import { getData } from "./http";
import { headerCreate, reload } from "./ui";

let liked_arr = JSON.parse(localStorage.getItem('fav_movies')) || []
let header_cont = document.querySelector('header')
let movie_cont = document.querySelector('.movies')

headerCreate(header_cont)
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
        reload(liked_arr_filtered, movie_cont)
    })