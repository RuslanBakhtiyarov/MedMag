window.onload = function () {

    var cardParens1 = {
        name: 'небулайзер',
        price: 150,
        img: src = "../image/parens/img0.jpeg",
    }
    var cardParens2 = {
        name: 'инголятор',
        price: 200,
        img: src = "../image/parens/img2.jpeg",
    }

    function cardIngolyatorOl(cardIngolyatorName, cardIngolyatorObj) {
        var cardIngolyator = document.createElement('div');
        cardIngolyator.classList.add(cardIngolyatorName);
        var cards = document.createElement('div');
        cards.classList.add('cards');
        var name = document.createElement('h3');
        name.classList.add('name');
        var price = document.createElement('p');
        price.classList.add('price');
        var img = document.createElement('img');
        img.classList.add('parensImg');

        name.innerText = cardIngolyatorObj.name;
        price.innerText = cardIngolyatorObj.price;
        img.innerText = cardIngolyatorObj.img;

        cardIngolyator.appendChild(cards);
        cards.appendChild(img);
        cards.appendChild(name);
        cards.appendChild(price);

        var parens = document.querySelector('#parens')
        parens.appendChild(cardIngolyator);
    }
    cardIngolyatorOl('cardParens1', cardParens1);
    cardIngolyatorOl('cardParens2', cardParens1);

}