import { cookieStock, UpdateStock, SetCookieStock, CookieBat } from "./Cookie.js";
import { RefreshTooltip,buttonText } from "./scrollbar.js";

const batrecyclageButton = document.getElementById('bat-recyclage');
let batrecyclagepurshased =0;
let valuerecyclage=130000;
let recyclageIntervals = [];
function CreateBatrecyclage(){
    const isAcheterChecked = document.getElementById('acheter').checked
    if (isAcheterChecked) {
        if (valuerecyclage<=cookieStock){
            SetCookieStock(-valuerecyclage);
            batrecyclagepurshased+=1;
            UpdateStock();
            Updaterecyclage();
            const newInterval = setInterval(function() {
                CookieBat(260);
            }, 1000);
            recyclageIntervals.push(newInterval);
            document.getElementById('acheter').checked = false;
            document.getElementById('vendre').checked = true;
            valuerecyclage*=1.15**batrecyclagepurshased;
        } 
    } else {
        if (recyclageIntervals.length > 0) {
            const intervalToRemove = recyclageIntervals.pop(); 
            clearInterval(intervalToRemove); 
            SetCookieStock(valuerecyclage * 0.2); 
            batrecyclagepurshased -= 1;
            UpdateStock();
            Updaterecyclage();
        }
    }
}

function Updaterecyclage(){
    let additionalText = " || Prix : " + valuerecyclage.toFixed(0) +
                             " || Rapport de cookie par seconde : 260 || " +
                             "Nombre actuel : " + batrecyclagepurshased +
                             " || Rapport actuel par seconde : " +batrecyclagepurshased*260;
    RefreshTooltip(buttonText,additionalText);
}

export {batrecyclageButton,batrecyclagepurshased,valuerecyclage,CreateBatrecyclage}

