export function headerCreate(place) {
	place.innerHTML = ''
	place.innerHTML = `
		<div class="left">
			<img src="/public/images/logo.svg" alt="image">
			<img src="/public/icons/menu.svg" alt="image">
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