import { CreateAugmentNb,augmentNbButton,UpdateNb } from "./modules/augmentnb.js";
import { augmentScoreButton,UpdateScore, CreateAugmentScore } from "./modules/augmentscore.js";
import { augmentTailleButton,UpdateTaille, CreateAugmentTaille } from "./modules/augmenttaille.js";
import { CreateBatbateau,batbateauButton } from "./modules/batbateau.js";
import { batBenevoleButton, CreateBatBenevole } from "./modules/batbenevole.js";
import { batDrapeauButton, CreateBatDrapeau } from "./modules/batdrapeau.js";
import { batepurationButton, CreateBatepuration } from "./modules/batepuration.js";
import { batpoubelleButton, CreateBatpoubelle } from "./modules/batpoubelle.js";
import { batrecyclageButton, CreateBatrecyclage } from "./modules/batrecyclage.js";
import { CreateCookie, UpdateStock } from "./modules/Cookie.js";
import { scrollContainer,CreateScrollBar } from './modules/scrollbar.js';
import { CreateDevilFenetre, DevilFenetre} from './modules/devilfenetre.js';
import { augmentSpawnDore, UpdateSpawn,CreateSpawnDore } from "./modules/augmentspawndore.js";
import { augmentTempsDore,UpdateTemps, CreateTempsDore } from "./modules/augmenttempsdore.js";
import { DevilDepop, CreateDevilDepop } from "./modules/devildepop.js";
import { CreateDevilPetit, DevilPetit } from "./modules/devilpetit.js";

CreateCookie();
UpdateStock();

augmentNbButton.addEventListener('click',function(){
    CreateAugmentNb();
});

augmentTailleButton.addEventListener('click',function(){
    CreateAugmentTaille();
})

augmentScoreButton.addEventListener('click',function(){
    CreateAugmentScore();
})

scrollContainer.addEventListener('wheel', CreateScrollBar);

batDrapeauButton.addEventListener('click',function(){
    CreateBatDrapeau();
})

batBenevoleButton.addEventListener('click',function(){
    CreateBatBenevole();
})

batpoubelleButton.addEventListener('click',function () {
    CreateBatpoubelle();
})

batepurationButton.addEventListener('click',function(){
    CreateBatepuration();
})

batrecyclageButton.addEventListener('click',function(){
    CreateBatrecyclage();
})

batbateauButton.addEventListener('click',function(){
    CreateBatbateau();
})

DevilFenetre.addEventListener('click',function(){
    CreateDevilFenetre();
})  

augmentSpawnDore.addEventListener('click',function(){
    CreateSpawnDore();
})

augmentTempsDore.addEventListener('click',function(){
    CreateTempsDore();
})

DevilDepop.addEventListener('click',function(){
    CreateDevilDepop();
})

DevilPetit.addEventListener('click',function(){
    CreateDevilPetit();
})

UpdateNb();
UpdateTaille();
UpdateScore();
UpdateSpawn();
UpdateTemps();