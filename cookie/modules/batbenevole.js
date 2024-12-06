import { cookieStock, UpdateStock, SetCookieStock, CookieBat } from "./Cookie.js";
import { RefreshTooltip,buttonText } from "./scrollbar.js";

const batBenevoleButton = document.getElementById('bat-benevole');
let batbenevolepurshased =0;
let valuebenevole= 100;
let benevoleIntervals = [];

function CreateBatBenevole(){
    const isAcheterChecked = document.getElementById('acheter').checked;
    if (isAcheterChecked) {
        if (valuebenevole<=cookieStock){
            SetCookieStock(-valuebenevole);
            batbenevolepurshased+=1;
            UpdateStock();
            UpdateBenevole();
            const newInterval = setInterval(function() {
                CookieBat(1);
            }, 1000);
            benevoleIntervals.push(newInterval);
            document.getElementById('acheter').checked = false;
            document.getElementById('vendre').checked = true;
            valuebenevole*=1.15**(batbenevolepurshased);
        } 
    } else {
        if (benevoleIntervals.length > 0) {
            const intervalToRemove = benevoleIntervals.pop(); 
            clearInterval(intervalToRemove); 
            SetCookieStock(valuebenevole * 0.2); 
            batbenevolepurshased -= 1;
            UpdateStock();
            Updatebenevole();
        }
    }
}

function UpdateBenevole(){
    let additionalText = " || Prix : " + valuebenevole.toFixed(0) +
                             " || Rapport de cookie par seconde : 1 || " +
                             "Nombre actuel : " + batbenevolepurshased +
                             " || Rapport actuel par seconde : " +batbenevolepurshased;
    RefreshTooltip(buttonText,additionalText);
}

export {batBenevoleButton,batbenevolepurshased,valuebenevole,CreateBatBenevole}

