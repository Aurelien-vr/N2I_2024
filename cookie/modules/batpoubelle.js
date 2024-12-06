import { cookieStock, UpdateStock, SetCookieStock, CookieBat } from "./Cookie.js";
import { RefreshTooltip,buttonText } from "./scrollbar.js";

const batpoubelleButton = document.getElementById('bat-poubelle');
let batpoubellepurshased =0;
let valuepoubelle=1100;
let poubelleIntervals = [];
function CreateBatpoubelle(){
    const isAcheterChecked = document.getElementById('acheter').checked
    if (isAcheterChecked) {
        if (valuepoubelle<=cookieStock){
            SetCookieStock(-valuepoubelle);
            batpoubellepurshased+=1;
            UpdateStock();
            Updatepoubelle();
            const newInterval = setInterval(function() {
                CookieBat(8);
            }, 1000);
            poubelleIntervals.push(newInterval);
            document.getElementById('acheter').checked = false;
            document.getElementById('vendre').checked = true;
            valuepoubelle*=1.15**batpoubellepurshased;
        } 
    } else {
        if (poubelleIntervals.length > 0) {
            const intervalToRemove = poubelleIntervals.pop(); 
            clearInterval(intervalToRemove); 
            SetCookieStock(valuepoubelle * 0.2); 
            batpoubellepurshased -= 1;
            UpdateStock();
            Updatepoubelle();
        }
    }
}

function Updatepoubelle(){
    let additionalText = " || Prix : " + valuepoubelle +
                             " || Rapport de cookie par seconde : 8 || " +
                             "Nombre actuel : " + batpoubellepurshased +
                             " || Rapport actuel par seconde : " +batpoubellepurshased*8;
    RefreshTooltip(buttonText,additionalText);
}

export {batpoubelleButton,batpoubellepurshased,valuepoubelle,CreateBatpoubelle}

