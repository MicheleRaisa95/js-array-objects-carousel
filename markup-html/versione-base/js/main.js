'use strict'

//  array di oggetti

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images);

//  seleziono il contenitore del carosello  e i bottoni

const caroselloImg = document.querySelector('.items');

console.log(caroselloImg);

const prvBtn = document.querySelector('.prev');

console.log(prvBtn);

const nxtBtn = document.querySelector('.next')

console.log(nxtBtn);

// creo la funzione per aggiornare il carosello 

let currentIndex = 0

function aggiornaCarosello(index) {
   // console.log(index);
    // selezione elemento attivo
const activeItem = document.querySelector('.item.active');
// rimuovo la classe active dall'elemento attivo
activeItem.classList.remove('active');

// seleziono l'elemento nuovo da attivare
const newItem = document.querySelectorAll('.item')[index];

// aggiungo la classe active all'elemento da attivare
newItem.classList.add('active');

// seleziono il titolo del nuovo elemento
const title = newItem.querySelector('h2');
// seleziono il testo
const text = newItem.querySelector('p')
// imposto titolo e testo
title.innerText = images[index].title;
text.innerText = images[index].text;

//console.log(title.innerText);
//console.log(text.innerText);

}

// inizializzo il carosello 

images.forEach((image,index) => {
    // creo un nuovo elemento div e gli aggiungo la classe item
    const item = document.createElement('div');
item.classList.add('item');

// aggiungo la classe active al primo elemento per renderlo visbile
if (index === 0) {
    item.classList.add('active');
}

// creo un elemento img + src + alt
const img = document.createElement('img');
img.src = image.image;
console.log(img.src);
img.alt = image.title

// creo un elemento div al quale aggiungo la classe info al suo interno metto titolo e descrizione 
const info = document.createElement('div');
info.classList.add('info');

const title = document.createElement('h2');

title.innerText = image.title

const text = document.createElement('p');

text.innerText = image.text


// aggiungo elemeti figli all'elemento pricipale 

info.append(title);
info.append(text);
item.append(img);
item.append(info);

// aggiungo al carosello

caroselloImg.append(item);
});

// gsestisco i click sulle frecce

prvBtn.addEventListener('click',function(){
    console.log("click sul bottone precedente");
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }

    aggiornaCarosello(currentIndex)
});

nxtBtn.addEventListener('click',function(){
    console.log("click sul bottone successivo");
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
// invoco la funzione 
    aggiornaCarosello(currentIndex)
});





