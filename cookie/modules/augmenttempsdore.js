import { cookieStock, SetCookieStock,UpdateStock } from "./Cookie.js";

const augmentTempsDore = document.getElementById('augment-tempsdore');
let tempsdore=10;
let achattemps=0;
let valuetemps= 90;

function CreateTempsDore(){
    if (valuetemps<=cookieStock){    
        SetCookieStock(-valuetemps);
        tempsdore+=5;
        valuetemps*=1.05**achattemps;
        UpdateStock();
        achattemps++;
        UpdateTemps();
    } 
    if (achattemps==3){
        augmentTempsDore.disabled=true;
    }
}
function UpdateTemps() {
    document.getElementById('augment-tempsdore').value= "Temps réapparition bateau doré réduit || Prix : " + valuetemps.toFixed(0);
}

export {augmentTempsDore,CreateTempsDore,tempsdore,UpdateTemps}