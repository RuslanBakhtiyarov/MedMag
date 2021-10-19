const medtehnika = document.querySelector('.medtehnika');

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
    const tehnika = createElement('div', medtehnikaName);
    const card = createElement('div', 'card');
    const name = createElement('div', 'name');
    const price = createElement('div', 'price');
    const img = createElement('img');

    name.innerText = medtehnikaObj.name;
    price.innerText = medtehnikaObj.price;
    img.src = medtehnikaObj.img;

    tehnika.appendChild('card');
    card.appendChild('card');
    name.appendChild('name');
    price.appendChild('price');
    img.appendChild('img');

    return tehnika;
    

};
medtehnika.appendChild('medtehnika1',medtehnika1)
medtehnika.appendChild(medtehnika2)
medtehnika.appendChild(medtehnika3)