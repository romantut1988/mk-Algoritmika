'use strict';

const answer = []
answer[0] = prompt("Напиши свое имя?");
answer[1] = prompt("Напиши свою фамилию?");
answer[2] = prompt("Сколько тебе лет?");


const HEADER = document.querySelector('header');
const MAIN = document.querySelector('main');
const ImagesArr = Array.from(MAIN.querySelectorAll('img'));
let imagesArrSize = ImagesArr.length;

ImagesArr.forEach(img => selectImageType(img));

function selectImageType(img) {

    let div = document.createElement('div');

    let imgClass = (
           img.className === 'full-width'
        || img.className === 'float-left'
        || img.className === 'float-right')
        ?  img.className : 'class-error';

    div.className = imgClass; console.log('imgClass =', imgClass);

    if(imgClass === 'class-error') div.innerHTML = `
        ERROR in image class name<br><br>
        class name <b><i>${img.className}</i></b> not supported`;
    else div.style.backgroundImage = `url(${img.src})`;

    MAIN.insertBefore(div, img);
    img.remove();
}

window.addEventListener('resize', () => {
    MAIN.style.margin = `${HEADER.clientHeight + 20}px auto 40px`;
    console.log('get resize');
});