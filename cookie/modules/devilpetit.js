import { SetCookieMult,UpdateWidth } from "./Cookie.js";
const DevilPetit = document.getElementById('devil-petit');
let achatpetit=0;
function CreateDevilPetit(){
    if(achatpetit<5){
        UpdateWidth(0.5)
        SetCookieMult(1);
        achatpetit++;
    } else {
        DevilPetit.disabled=true;
    }
}

export {CreateDevilPetit, DevilPetit}
