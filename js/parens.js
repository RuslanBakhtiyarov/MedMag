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
    var cardIngolyator = document.createElement('div')
    cardIngolyator.classList.add(cardIngolyatorName)



    var parens = document.querySelector('#parens')
    parens.appendChild(cardIngolyator)
}

