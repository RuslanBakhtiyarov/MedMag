window.onload = function () {
    
var medicalEquipment1 = {
    name: 'inhaler',
    price: 100,
    img: src = "./image/ingolyator.webp"
        
};
var medicalEquipment2 = {
    name: 'tonometer',
    price: 120,
    img:src = "./image/tonometr.webp"
    
};
var medicalEquipment3 = {
    name: 'glucometer',
    price: 200,
    img:src ="./image/Blood glucose meters.webp"
    
};


function medicalEquipmentOl(medicalEquipmentName, medicalEquipmentObj) {
    var medicalEquipment = document.createElement('div');
    medicalEquipment.classList.add(medicalEquipmentName);
    var cards = document.createElement('div');
    cards.classList.add('cards');
    var card1 = document.createElement('a');
    card1.href = "./partner.html";
    card1.classList.add('card1');
    var card2 = document.createElement('a');
    card2.href = "/"
    card2.classList.add('capd2');
    var name = document.createElement('h2');
    name.classList.add('name');
    var price = document.createElement('p',);
    price.classList.add('price');
    var img = document.createElement('img');
    img.classList.add('img');


    name.innerText = medicalEquipmentObj.name;
    price.innerText = medicalEquipmentObj.price;
    img.src = medicalEquipmentObj.img;

    medicalEquipment.appendChild(card1);
    card1.appendChild(img);
    card1.appendChild(name);
    card1.appendChild(price);

    medicalEquipment.appendChild(card2);
    card2.appendChild(img);
    card2.appendChild(name);
    card2.appendChild(price);
   


    var pole = document.querySelector('#pole');
    pole.appendChild(medicalEquipment)


    card1.onclick = function transition() {
        document.location.href = "./partner.html";
        
    }

};
    medicalEquipmentOl('medicalEquipment1', medicalEquipment1)
    medicalEquipmentOl('medicalEquipment2', medicalEquipment2)
    medicalEquipmentOl('medicalEquipment3', medicalEquipment3)
    

  
}
