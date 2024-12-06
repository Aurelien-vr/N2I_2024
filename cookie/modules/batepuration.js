import { cookieStock, UpdateStock, SetCookieStock, CookieBat } from "./Cookie.js";
import { RefreshTooltip,buttonText } from "./scrollbar.js";

const batepurationButton = document.getElementById('bat-epuration');
let batepurationpurshased =0;
let valueepuration=12000;
let epurationIntervals = [];
function CreateBatepuration(){
    const isAcheterChecked = document.getElementById('acheter').checked
    if (isAcheterChecked) {
        if (valueepuration<=cookieStock){
            SetCookieStock(-valueepuration);
            batepurationpurshased+=1;
            UpdateStock();
            Updateepuration();
            const newInterval = setInterval(function() {
                CookieBat(47);
            }, 1000);
            epurationIntervals.push(newInterval);
            document.getElementById('acheter').checked = false;
            document.getElementById('vendre').checked = true;
            valueepuration*=1.15**batepurationpurshased;
        } 
    } else {
        if (epurationIntervals.length > 0) {
            const intervalToRemove = epurationIntervals.pop(); 
            clearInterval(intervalToRemove); 
            SetCookieStock(valueepuration * 0.2); 
            batepurationpurshased -= 1;
            UpdateStock();
            Updateepuration();
        }
    }
}

function Updateepuration(){
    let additionalText = " || Prix : " + valueepuration.toFixed(0) +
                             " || Rapport de cookie par seconde : 47 || " +
                             "Nombre actuel : " + batepurationpurshased +
                             " || Rapport actuel par seconde : " +batepurationpurshased*47;
    RefreshTooltip(buttonText,additionalText);
}

export {batepurationButton,batepurationpurshased,valueepuration,CreateBatepuration}

