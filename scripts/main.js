let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1200px-Desktop_computer_clipart_-_Yellow_theme.svg') {
        myImage.setAttribute('src', 'images/gratis-png-ilustracion-de-conjunto-de-computadora-de-escritorio-negro-computadora-personal-de-computadora-de-escritorio-computadora-de-escritorio-pc-thumbnail.png');
    } else {
        myImage.setAttribute('src', 'images/1200px-Desktop_computer_clipart_-_Yellow_theme.svg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello,' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}