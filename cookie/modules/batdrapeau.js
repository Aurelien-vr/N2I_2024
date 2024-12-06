import { cookieStock, UpdateStock, SetCookieStock, CookieBat } from "./Cookie.js";
import { RefreshTooltip,buttonText } from "./scrollbar.js";
const batDrapeauButton = document.getElementById('bat-drapeau');
let batdrapeaupurshased =0;
let valuedrapeau= 75;
let drapeauIntervals = [];
function CreateBatDrapeau(){
    const isAcheterChecked = document.getElementById('acheter').checked
    if (isAcheterChecked) {
        if (valuedrapeau<=cookieStock){
            SetCookieStock(-valuedrapeau);
            batdrapeaupurshased+=1;
            UpdateStock();
            Updatedrapeau();
            const newInterval = setInterval(function() {
                CookieBat(0.5);
            }, 1000);
            drapeauIntervals.push(newInterval);
            document.getElementById('acheter').checked = false;
            document.getElementById('vendre').checked = true;
            valuedrapeau*=1.15**batdrapeaupurshased;
        } 
    } else {
        if (drapeauIntervals.length > 0) {
            const intervalToRemove = drapeauIntervals.pop(); 
            clearInterval(intervalToRemove); 
            SetCookieStock(valuedrapeau * 0.2); 
            batdrapeaupurshased -= 1;
            UpdateStock();
            Updatedrapeau();
        }
    }
}

function Updatedrapeau(){
    let additionalText = " || Prix : " + valuedrapeau.toFixed(0) +
                             " || Rapport de cookie par seconde : 0.5 || " +
                             "Nombre actuel : " + batdrapeaupurshased +
                             " || Rapport actuel par seconde : " +batdrapeaupurshased*0.5;
    RefreshTooltip(buttonText,additionalText);
}

export {batDrapeauButton,batdrapeaupurshased,valuedrapeau,CreateBatDrapeau}

