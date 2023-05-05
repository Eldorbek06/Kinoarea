import { getData } from "./http";
import { headerCreate, reload } from "./ui";
import { modalToggle, reloadPopup } from './popup'

let liked_arr = JSON.parse(localStorage.getItem('fav_movies')) || []
let header_cont = document.querySelector('header')
let movie_cont = document.querySelector('.movies')
let show_more_btn = document.querySelector('.more')

headerCreate(header_cont)
reloadPopup(document.querySelector('.popup'))

getData('/movie/popular')
    .then(({ data }) => {
        let liked_arr_filtered = []
        for (let item of liked_arr) {
            data.results.forEach(el => {
                if (el.id == item) {
                    liked_arr_filtered.push(el)
                }
            })
        }
        if (liked_arr_filtered.length == 0) {
            show_more_btn.innerHTML = 'Выбрать фильмы'
            show_more_btn.style.display = 'block'
            show_more_btn.onclick = () => location.assign('/')
        } else {
            reload(liked_arr_filtered, movie_cont)
            show_more_btn.style.display = 'none'
        }
    })


let search_btn = document.querySelector('header .right').firstElementChild
let sign_in = document.querySelector('header .right').lastElementChild
let close_btns = document.querySelectorAll('[data-popup_close]')


close_btns.forEach(el => el.onclick = () => modalToggle())
sign_in.onclick = () => modalToggle(sign_in.dataset.popup)
search_btn.onclick = () => modalToggle(search_btn.dataset.popup)