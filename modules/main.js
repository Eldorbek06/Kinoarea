import { getData } from './http';
import { headerCreate, reload } from "./ui";
let body = document.body
let header = document.querySelector('header')
let movies_cont = document.querySelector('.movies')
let first_section_moreBtn = document.querySelector('.first-section .more')


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
    })