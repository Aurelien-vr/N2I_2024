import { cookieStock, UpdateStock, SetCookieStock, CookieBat } from "./Cookie.js";
import { RefreshTooltip,buttonText } from "./scrollbar.js";
let bateauxIntervals = [];

const batbateauButton = document.getElementById('bat-bateau');
let batbateaupurshased =0;
let valuebateau=700000;

function CreateBatbateau(){
    const isAcheterChecked = document.getElementById('acheter').checked
    if (isAcheterChecked) {
        if (valuebateau<=cookieStock){
            SetCookieStock(-valuebateau);
            batbateaupurshased+=1;
            UpdateStock();
            Updatebateau();
            const newInterval = setInterval(function() {
                CookieBat(700);
            }, 1000);
            bateauxIntervals.push(newInterval);
            document.getElementById('acheter').checked = false;
            document.getElementById('vendre').checked = true;
            valuebateau*=1.15**batbateaupurshased;
        } 
    } else {
        if (bateauxIntervals.length > 0) {
            const intervalToRemove = bateauxIntervals.pop(); 
            clearInterval(intervalToRemove); 
            SetCookieStock(valuebateau * 0.2); 
            batbateaupurshased -= 1;
            UpdateStock();
            Updatebateau();
        }
    }
}

function Updatebateau(){
    let additionalText = " || Prix : " + valuebateau.toFixed(0) +
                             " || Rapport de cookie par seconde : 700 || " +
                             "Nombre actuel : " + batbateaupurshased +
                             " || Rapport actuel par seconde : " +batbateaupurshased*700;
    RefreshTooltip(buttonText,additionalText);
}

export {batbateauButton,batbateaupurshased,valuebateau,CreateBatbateau}

