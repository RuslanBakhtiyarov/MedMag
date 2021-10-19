

const medtehnika1 = {
    name: 'inhaler',
    price: 100,
    img: src = "https://medmag.ua/image/cache/data/import_yml/178/081/187/681358659_w640_h640_omron_ne_c28p-380x380.jpeg.webp"
        
};
const medtehnika2 = {
    name: 'tonometer',
    price: 120,
    img:src = "https://medmag.ua/image/cache/catalog/image/tonometr/avtomaticheskie/oromed-oro-n2-basic-380x380.jpg.webp"
    
};
const medtehnika3 = {
    name: 'glucometer',
    price: 200,
    img:src ="https://medmag.ua/image/cache/catalog/image/glukometr/infopia-element-380x380.png.webp"
    
};


function medtehnikaOl(medtehnikaName, medtehnikaObj) {
    const medtehnika = document.createElement('div');
    medtehnika.classList.add(medtehnikaName);
    const card = document.createElement('div');
    card.classList.add('card');
    const name = document.createElement('div');
    name.classList.add('name');
    const price = document.createElement('div',);
    price.classList.add('price');
    const img = document.createElement('img');
    img.classList.add('img');


    name.innerText = medtehnikaObj.name;
    price.innerText = medtehnikaObj.price;
    img.src = medtehnikaObj.img;

    medtehnika.appendChild(card);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(img);
    

    const pole = document.querySelector('#pole');
    pole.appendChild(medtehnika)


};
medtehnikaOl('medtehnika1',medtehnika1)