import { headerCreate } from "./ui";
import { getData } from "./http";
let header = document.querySelector('header')
let body = document.body

headerCreate(header)

getData('/movie/popular')
    .then(res => {
    })

let movie_id = location.search.split('=').at(-1)

getData(`/movie/${movie_id}`)
    .then(res => {
        console.log(res.data)
        body.style.backgroundImage = `url(${import.meta.env.VITE_BASE_IMG + res.data.backdrop_path})`
    })

getData(`/movie/${movie_id}/videos`)
    .then(res => {
        let video = res.data.results[Math.floor(Math.random() * res.data.results.length)]
    })

getData(`/movie/${movie_id}/credits`)
    .then(res => console.log({ res }))