import { SetRandomPosition, SetCookieMult } from "./Cookie.js";
const cookieButtons = document.getElementsByClassName('cookie-button');
const DevilDepop = document.getElementById('devil-depop');
let temps=4;
let interval;

function CreateDevilDepop(){
    if (temps==4){
        temps--;
        interval=setInterval(function(){
            Array.from(cookieButtons).forEach(button => {
                SetRandomPosition(button)})
        },temps*1000);
        SetCookieMult(1);
    } else if(temps>1){
        temps--;
        clearInterval(interval);
        interval=setInterval(function(){
            Array.from(cookieButtons).forEach(button => {
                SetRandomPosition(button)})
        },temps*1000);
        SetCookieMult(1);
    }else {
        DevilDepop.disabled=true;
    }
}

export {CreateDevilDepop,DevilDepop}