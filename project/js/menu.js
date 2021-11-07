const restourant = 'tanuki';
const cardsMenu = document.querySelector('.cards-menu');

const renderItems = (data) => {
	data.forEach(({ description, id, image, name, price }) => {
		const card = document.createElement('div');

		card.classList.add('card');
				console.log(cardsMenu);
		
		card.innerHtml = `
						<img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${name}</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">${description}
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">${price} ₽</strong>
							</div>
						</div>
					`

		cardsMenu.append(card)
	});
};

fetch(`./db/${restourant}.json`)
	.then((response) => response.json())
	.then((data) => {
		renderItems(data);
	})
	.catch((error) => {
		console.log(error);
	});
