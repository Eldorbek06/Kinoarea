import { getData } from './http';
import { headerCreate, reload, reloadPopularPerson, reloadTrailerCart } from "./ui";
let body = document.body
let header = document.querySelector('header')
let movies_cont = document.querySelector('.movies')
let first_section_moreBtn = document.querySelector('.first-section .more')
let trailers__footer = document.querySelector('.trailers__footer')
let popular_person_cont = document.querySelector('.popular_person_cont')
let popular_person_cart_cont = document.querySelector('.popular-persons__list')

headerCreate(header)

getData('/movie/popular')
    .then(res => {
        let item = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        reload(res.data.results.slice(0, 8), movies_cont)
        body.style.backgroundImage = `url(${import.meta.env.VITE_BASE_IMG + item.backdrop_path})`

        first_section_moreBtn.onclick = () => {
            let item = first_section_moreBtn
            if (item.dataset.count === 'not-all') {
                reload(res.data.results, movies_cont)
                item.dataset.count = 'all'
                item.innerHTML = 'Скрыть'
            } else {
                reload(res.data.results.slice(0, 8), movies_cont)
                item.dataset.count = 'not-all'
                item.innerHTML = 'Все новинки'
            }
        }
        reloadTrailerCart(res.data.results, trailers__footer)

        let trailers__footer_items = document.querySelectorAll('.trailers__footer-item')
        let trailers__iframe_big = document.querySelector('.trailers__iframe_big')
        trailers__footer_items.forEach((el, idx) => {
            if (idx === 0) {
                getData(`/movie/${el.dataset.id}/videos`)
                    .then(({ data }) => {
                        trailers__iframe_big.src = `https://www.youtube.com/embed/${data.results[0].key}`
                    })
            }
            el.onclick = () => {
                getData(`/movie/${el.dataset.id}/videos`)
                    .then(({ data }) => {
                        trailers__iframe_big.src = `https://www.youtube.com/embed/${data.results[0].key}`
                    })
            }
        })

    })

getData('/person/popular')
    .then(({data}) => {
        reloadPopularPerson(data.results.slice(0,2), popular_person_cont)
        reloadPopularPerson(data.results.slice(2), popular_person_cart_cont)
    })