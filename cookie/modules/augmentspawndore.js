import { cookieStock, SetCookieStock,UpdateStock } from "./Cookie.js";

const augmentSpawnDore = document.getElementById('augment-spawndore');
let spawndore=300;
let achat=0;
let valuespawn= 75;

function CreateSpawnDore(){
  
    if (valuespawn<=cookieStock){    
        SetCookieStock(-valuespawn);
        spawndore-=60;
        valuespawn*=1.05**achat;
        UpdateStock();
        achat++;
        UpdateSpawn();
    } 
    if (achat==4){
        augmentSpawnDore.disabled=true;
    }
}

function UpdateSpawn() {
    document.getElementById('augment-spawndore').value= "Temps apparition bateau doré augmenté || Prix : " + valuespawn.toFixed(0);
}

export {augmentSpawnDore,CreateSpawnDore,spawndore,UpdateSpawn}