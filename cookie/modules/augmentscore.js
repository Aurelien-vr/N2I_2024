import { cookieStock, SetCookieStock, SetCookieValue,UpdateStock } from "./Cookie.js";

const augmentScoreButton = document.getElementById('augment-score');
let augmentscorepurshased =1;
let valuescore= 120;
function CreateAugmentScore(){
    
    if (valuescore<=cookieStock){
        SetCookieStock(-valuescore);
        valuescore*=1.05**augmentscorepurshased;
        SetCookieValue(augmentscorepurshased);
        augmentscorepurshased+=1;
        UpdateStock();
        UpdateScore();
    } 
}
function UpdateScore() {
    document.getElementById('augment-score').value= "Score par bateaux augmenté || Prix : " + valuescore.toFixed(0);
}



export {augmentScoreButton,CreateAugmentScore,UpdateScore}