import { cookieStock,UpdateStock,CreateCookie, SetCookieStock } from "./Cookie.js";
const augmentNbButton = document.getElementById('augment-nb');
let augmentnbpurshased = 0;
let valuenb= 50;
//---------------- Augment nombre de cookie
function CreateAugmentNb(){
    if (valuenb<=cookieStock){
        SetCookieStock(-valuenb);
        valuenb*=1.05**augmentnbpurshased;
        augmentnbpurshased++;
        UpdateStock();
        CreateCookie();
        UpdateNb();
    }      
}

function UpdateNb() {
    document.getElementById('augment-nb').value= "Nombre de bateaux augmenté || Prix : " + valuenb.toFixed(0);
}

export {CreateAugmentNb,augmentNbButton,UpdateNb}


