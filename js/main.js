window.onload = function () {
    
const medicalEquipment1 = {
    name: 'inhaler',
    price: 100,
    img: src = "https://medmag.ua/image/cache/data/import_yml/178/081/187/681358659_w640_h640_omron_ne_c28p-380x380.jpeg.webp"
        
};
const medicalEquipment2 = {
    name: 'tonometer',
    price: 120,
    img:src = "https://medmag.ua/image/cache/catalog/image/tonometr/avtomaticheskie/oromed-oro-n2-basic-380x380.jpg.webp"
    
};
const medicalEquipment3 = {
    name: 'glucometer',
    price: 200,
    img:src ="https://medmag.ua/image/cache/catalog/image/glukometr/infopia-element-380x380.png.webp"
    
};


function medicalEquipmentOl(medicalEquipmentName, medicalEquipmentObj) {
    var medicalEquipment = document.createElement('div');
    medicalEquipment.classList.add(medicalEquipmentName);
    var card = document.createElement('a');
    card.classList.add('card');
    var name = document.createElement('h2');
    name.classList.add('name');
    var price = document.createElement('p',);
    price.classList.add('price');
    var img = document.createElement('img');
    img.classList.add('img');


    name.innerText = medicalEquipmentObj.name;
    price.innerText = medicalEquipmentObj.price;
    img.src = medicalEquipmentObj.img;

    medicalEquipment.appendChild(card);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(img);
    

    var pole = document.querySelector('#pole');
    pole.appendChild(medicalEquipment)


};
    medicalEquipmentOl('medicalEquipment1', medicalEquipment1)
    medicalEquipmentOl('medicalEquipment2', medicalEquipment2)
    medicalEquipmentOl('medicalEquipment3',medicalEquipment3)
}
