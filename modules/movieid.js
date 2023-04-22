import { headerCreate } from "./ui";
import { getData } from "./http";
let header = document.querySelector('header')
let iframe = document.querySelector('iframe')

headerCreate(header)

let movie_id = location.search.split('=').at(-1)

getData(`/movie/${movie_id}`)
    .then(res => {console.log(res)})

getData(`/movie/${movie_id}/videos`)
    .then(res => {
        let video = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        iframe.src = `https://www.youtube.com/embed/${video.key}`;
    })

getData(`/movie/${movie_id}/credits`)
    .then(res =>console.log({res}))