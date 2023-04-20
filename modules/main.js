import axios from "axios";
import { headerCreate } from "./ui";

let header = document.querySelector('header')
let movies = document.querySelector('.movies')
headerCreate(header)

axios.get(import.meta.env.VITE_API)
    .then(res => reload(res.data.results, movies))

function reload(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        place.innerHTML += `
            <div>
                <div class="image">
                    <img src="${import.meta.env.VITE_IMG_API + item.poster_path}" alt="image">
                    <span>${item.vote_average}</span>
                    <button>Карточка фильма</button>
                </div>
                <div class="name__genre">
                    <p>${item.title}</p>
                    <p>${item.genre_ids}</p>
                </div>
            </div>
            `
    }
    place.querySelectorAll('.image button').forEach(el => el.onclick = () => {
        location.assign('/pages/movieID.html')
    })
}
// 0670efcf22f2643399079ecc3fcec656