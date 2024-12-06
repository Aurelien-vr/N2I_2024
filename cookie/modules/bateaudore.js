import { SetRandomPosition,UpdateStock,updateProgressBar,SetCookieStock,SetCookieProduct,changementNiveau, cookieMult,cookieValue } from "./Cookie.js";
import { spawndore } from "./augmentspawndore.js";
import { tempsdore } from "./augmenttempsdore.js";
let boatdore;

function CreateBateauDore(){
    boatdore = document.createElement('button');
    let img = document.createElement('img');
    img.src = './images/golden.png'; 
    boatdore.appendChild(img); 
    //Button.style.width = cookieButtonWidth + 'px';
    //Button.style.height = cookieButtonHeight + 'px';
    document.body.appendChild(boatdore);
    boatdore.className ="golden";
    boatdore.addEventListener('click', function () {
        DoreClick(boatdore);
    });
    SetRandomPosition(boatdore)
}

function DoreClick(){
    SetCookieStock(cookieValue * cookieMult *100);
    SetCookieProduct( cookieValue * cookieMult *100);
    UpdateStock();
    SetRandomPosition(boatdore); 
    updateProgressBar();
    changementNiveau();
    Despawn();
}

function Despawn(){
    boatdore.disabled=true;
    boatdore.style.visibility = 'hidden';
    TimerSpawn();
}

function TimerDespawn(){
    setInterval(function() {
        if( boatdore.disabled==false){
       Despawn();
        }
    }, Math.random()+1 *tempsdore*1000);
}

function TimerSpawn(){
    setInterval(function() {
        boatdore.disabled=false;
        boatdore.style.visibility = 'visible';
        TimerDespawn();
    }, Math.random()+1*spawndore*1000);
}

export {CreateBateauDore}