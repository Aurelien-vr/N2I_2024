import {CreateBateauDore} from './bateaudore.js'
import {augmentSpawnDore} from './augmentspawndore.js'
import { augmentTempsDore } from './augmenttempsdore.js';
const DevilFenetre = document.getElementById('devil-fenetre');

function CreateDevilFenetre(){
    const currentHeight = window.innerHeight; 
    document.body.style.height = `${2 * currentHeight}px`; 
    DevilFenetre.disabled =true;
    CreateBateauDore();
    augmentSpawnDore.disabled=false;
    augmentTempsDore.disabled=false;
}

export {CreateDevilFenetre, DevilFenetre}
