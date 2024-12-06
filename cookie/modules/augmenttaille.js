import { cookieStock, UpdateStock, UpdateWidth, SetCookieStock } from "./Cookie.js";

const augmentTailleButton = document.getElementById('augment-taille');
let augmenttaillepurshased =1;
let valuetaille= 100;

function CreateAugmentTaille(){

    if (valuetaille<=cookieStock){
        SetCookieStock(-valuetaille);
        valuetaille*=1.05**augmenttaillepurshased;
        augmenttaillepurshased+=1;
        UpdateStock();
        UpdateWidth(1.1);
        UpdateTaille();
    } 
}

function UpdateTaille() {
    document.getElementById('augment-taille').value= "Taille des bateaux augmentée || Prix : " + valuetaille.toFixed(0);
}

export {CreateAugmentTaille, augmentTailleButton,UpdateTaille}
