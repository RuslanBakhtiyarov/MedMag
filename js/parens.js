var cardParens1 = {
    name: небулайзер,
    price:150,
    img:src = "./image/img(0).jpeg" 
}
var cardParens2 = {
    name: инголятор,
    price:200,
    img:src = "./img/img(1)jpeg"
}

function cardIngolyatorOl (cardIngolyatorName,cardIngolyatorObj) {
    var cardIngolyator = document.createElement('div');
    cardIngolyator.classList.add(cardIngolyatorName);
    var cards = document.createElement('div');
    cards.classList.add('cards');
    var name = document.createElement('h3');
    name.classList.add('name');
    var price = document.createElement('p');
    price.classList.add('price');
    var image = document.createElement('img');
    image.classList.add('img');

    name.innerText = cardIngolyatorObj.name;
    price.innerText = cardIngolyatorObj.price;
    image.innerText = cardIngolyatorObj.image;

    cardIngolyator.appendChild(cards);
    cards.appendChild(img);
    cards.appendChild(name);
    cards.appendChild(price);

    var parens = document.querySelector('#parens')
    parens.appendChild(cardIngolyator);
}
cardIngolyatorOl('cardParens1', cardParens1);
cardIngolyatorOl('cardParens2', cardParens1);

