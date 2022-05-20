/*

<button class="card-button">
<img src="images/cart.svg" alt="cart">
<div class="button-text">Add to Cart</div>
</button>
*/
"use strict"

let productsCount = 0;
document.querySelector('.productsCount').textContent = productsCount;

const cardEl = document.querySelector('.main__card');
document.querySelectorAll('.main__card_price').forEach(el => {
    el.textContent = `$${cardEl.dataset.price}`
});

const basketEl = document.querySelector('.cart_button');
const purchasesList = document.querySelector('.basket');
basketEl.addEventListener('click', event => {
    purchasesList.classList.toggle('hidden');
})

const basket = {};
const basketTotalValue = document.querySelector('.basketTotalValue');
function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = { id, name, price, count: 0 };
    }
    basket[id].count++;
    document.querySelector('.productsCount').textContent = productsCount;
    basketTotalValue.textContent = getBasketTotalValue().toFixed(2);
}

function getBasketTotalValue() {
    console.log(Object.values(basket))
    return Object.values(basket).reduce((acc, product) => acc + product.count * product.price, 0);
}

console.log(document.querySelectorAll('.main__card'));
document.querySelectorAll('.main__card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.querySelector('.featuredImgDark').style.display = 'flex';
    });
});

document.querySelectorAll('.main__card').forEach(card => {
    card.addEventListener('mouseout', () => {
        card.querySelector('.featuredImgDark').style.display = 'none';
    });
});

document.querySelectorAll('.card-button').forEach(btn => {
    btn.addEventListener('click', event => {

        setTimeout(() => {
            btn.style.backgroundColor = '#cccccc',
                2000;
        });
        btn.style.backgroundColor = '#222222';
        //не понимаю почему кнопка не работает плавно
        productsCount++;
        document.querySelector('.productsCount').textContent = productsCount;
        const addedProduct = event.target.closest('.main__card');
        const id = +addedProduct.dataset.id;
        const name = addedProduct.dataset.name;
        const price = +addedProduct.dataset.price;
        console.log(id, name, price);
    });
});


