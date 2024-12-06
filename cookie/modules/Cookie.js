// cookie.js
let cookieButtonWidth = 100;
let cookieButtonHeight = 50;

let cookieStock = 0;
let cookieProduct = 0;
let cookieValue = 1;
let cookieMult = 1;

let percentage;
let niveau=1;
let maxValue = 50; 
let img;
let imgsrc='./images/porte-conteneur.png';

const cookieButtons = document.getElementsByClassName('cookie-button');

function SetCookieStock(newStock) {
    cookieStock += newStock;
}

function SetCookieProduct(newProduct) {
    cookieProduct += newProduct;
}

function SetCookieValue(newValue) {
    cookieValue += newValue;
}

function SetCookieMult(newMult) {
    cookieMult += newMult;
}

function CreateCookie(){
    let Button = document.createElement('button');
    img = document.createElement('img');
    img.src = imgsrc;  
    img.className = 'cookie-image'
    Button.appendChild(img);
    Button.className ="cookie-button";
    Button.setAttribute('tabindex', '-1');
    Button.style.width = cookieButtonWidth + 'px';
    Button.style.height = cookieButtonHeight + 'px';
    document.body.appendChild(Button);
    Button.addEventListener('click', function () {
        CookieClick(Button);
    });
    SetRandomPosition(Button)
}

function CookieBat(value) {
    cookieStock += value;
    cookieProduct += value;
    UpdateStock();
    updateProgressBar();
    changementNiveau();
}

function CookieClick(button) {
    cookieStock += cookieValue * cookieMult;
    cookieProduct += cookieValue * cookieMult;
    UpdateStock();
    SetRandomPosition(button); 
    updateProgressBar();
    changementNiveau(); 
}

function SetRandomPosition(element) {
    const randomX = Math.floor(Math.random() * (document.documentElement.scrollWidth - element.offsetWidth-200));
    const randomY = Math.floor(Math.random() * (document.documentElement.scrollHeight - element.offsetHeight)-100);
    element.style.position = 'absolute';
    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

function UpdateWidth(mult) {
    cookieButtonWidth *= mult;
    cookieButtonHeight *= mult; 
    const buttons = document.querySelectorAll('.cookie-button');
    buttons.forEach(button => {
        button.style.width = cookieButtonWidth + 'px';
        button.style.height = cookieButtonHeight + 'px';
    });
}

function UpdateStock(){
    document.getElementById('cookie-count').textContent = cookieStock.toFixed(0) + " bateaux"; 
}

function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    percentage = (cookieProduct / maxValue) * 100;  
    progressBar.style.width = `${percentage}%`;  
}

function ChangeCookieImage(newImageSrc) {
    const images = document.querySelectorAll('.cookie-button img'); // Sélectionne toutes les images dans les boutons
    images.forEach(image => {
        image.src = newImageSrc;
    });
}

function changementNiveau() {
    switch (niveau) {
        case 1:
            if (percentage >= 100) {
                maxValue = 500;
                percentage = (cookieProduct / maxValue) * 100;
                updateProgressBar();
                document.body.style.backgroundImage = "url('images/ocean_n2.jpg')";
                niveau++;
                imgsrc="./images/croisiere.png";
                ChangeCookieImage("./images/croisiere.png"); 
                UpdateWidth(0.65);        
                cookieValue++;           
            }
            break;
        case 2:
            if (percentage >= 100) {
                maxValue = 10000;
                percentage = (cookieProduct / maxValue) * 100;
                updateProgressBar();
                document.body.style.backgroundImage = "url('images/ocean_n3.jpg')";
                niveau++;
                imgsrc="./images/yatch.png";
                ChangeCookieImage("./images/yatch.png"); 
                UpdateWidth(0.65);
                cookieValue++;                   
            }
            break;
        case 3:
            if (percentage >= 100) {
                maxValue = 70000;
                percentage = (cookieProduct / maxValue) * 100;
                updateProgressBar();
                document.body.style.backgroundImage = "url('images/ocean_n4.jpg')";
                niveau++;
                imgsrc="./images/chalutier.png";
                ChangeCookieImage("./images/chalutier.png"); 
                UpdateWidth(0.65);   
                cookieValue++;                
            }
            break;
        case 4:
            if (percentage >= 100) {
                maxValue = 500000;
                percentage = (cookieProduct / maxValue) * 100;
                updateProgressBar();
                document.body.style.backgroundImage = "url('images/ocean_n5.jpg')";
                niveau++;
                imgsrc="./images/jetski.png";
                ChangeCookieImage("./images/jetski.png"); 
                UpdateWidth(0.75);      
                cookieValue++;             
            }
            break;
        case 5:
            if (percentage >= 100) {
                maxValue = 2500000;
                percentage = (cookieProduct / maxValue) * 100;
                updateProgressBar();
                document.body.style.backgroundImage = "url('images/ocean_n6.jpg')";
                niveau++;
                imgsrc="./images/barque.png";
                ChangeCookieImage("./images/barque.png"); 
                UpdateWidth(0.75);     
                cookieValue++;              
            }
            break;
    }
}


export { UpdateWidth, CreateCookie, SetCookieMult, cookieValue, cookieMult, cookieStock, changementNiveau, updateProgressBar, UpdateStock, SetCookieStock, SetCookieProduct, SetCookieValue,SetRandomPosition, CookieBat };