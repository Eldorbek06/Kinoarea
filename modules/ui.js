export function headerCreate(place) {
	place.innerHTML = ''
	place.innerHTML = `
		<div class="left">
			<a href='/'>
				<img src="/public/images/logo.svg" alt="image">
			</a>
			<img src="/public/images/menu.svg" alt="image">
		</div>
		<nav>
			<a href="#">Афиша</a>
			<a href="#">Медиа</a>
			<a href="#">Фильмы</a>
			<a href="#">Актёры</a>
			<a href="#">Новости</a>
			<a href="#">Подборки</a>
			<a href="#">Категории</a>
		</nav>
		<div class="right">
			<button>
				<img src="/public/icons/search.svg" alt="icon">
			</button>
			<button>Войти</button>
		</div>
    `
}


export function reload(arr, place) {
	place.innerHTML = ''
	for (let item of arr) {
		place.innerHTML += `
            <div class="movie-card" >
                <div class="image">
                    <img src="${import.meta.env.VITE_BASE_IMG + item.poster_path}" alt="image">
                    <span>${item.vote_average}</span>
					<a href="/pages/movieid.html?id=${item.id}">
                    	<button>Карточка фильма</button>
					</a>
                </div>
                <div class="name__genre">
                    <p>${item.title}</p>
                    <p>${item.genre_ids}</p>
                </div>
            </div>
            `
	}
}

export function reloadTrailerCart(arr, place){
	place.innerHTML = ''
	for(let item of arr){
		place.innerHTML = `
		<div class="trailers__footer-item">
			<div class="trailers__vid trailers__vid_mini">
				<iframe class="trailers__iframe trailers__iframe_small"
					src="https://www.youtube.com/embed/HihYQVuH64U" frameborder="0" allowfullscreen></iframe>
				<img class="trailers_play-icon trailers_play-icon_mini" src="/public/icons/play.svg" alt="icon">
			</div>
			<p class="trailers__title trailers__title_small">Мулан</p>
		</div>
		`
	}
}