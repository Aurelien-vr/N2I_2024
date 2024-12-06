import { batbateaupurshased,valuebateau } from "./batbateau.js";
import { batbenevolepurshased, valuebenevole } from "./batbenevole.js";
import { batdrapeaupurshased,valuedrapeau} from "./batdrapeau.js"; 
import { batepurationpurshased, valueepuration } from "./batepuration.js";
import { batpoubellepurshased, valuepoubelle } from "./batpoubelle.js";
import { batrecyclagepurshased, valuerecyclage } from "./batrecyclage.js";
import { SetRandomPosition } from "./Cookie.js";

const scrollContainer = document.getElementById('scroll-container');
const buttons = document.querySelectorAll('.scroll-button1, .scroll-button2');
const tooltip = document.getElementById('tooltip');
let buttonText;
let additionalText;
let currentIndex = 0;

function changeActiveButton() {
    currentIndex = (currentIndex + 1) % buttons.length;
    scrollContainer.scrollTo({
        left: buttons[currentIndex].offsetLeft,
        behavior: 'smooth'
    });
}

function showTooltip(event) {
    buttonText = event.target.getAttribute('data-text'); 
    tooltip.textContent = buttonText;
    const buttonIndex = Array.from(buttons).indexOf(event.target);
    switch (buttonIndex) {
        case 0:
            additionalText = " || Prix : " + valuedrapeau.toFixed(0) +
                             " || Rapport de cookie par seconde : 0.5 || " +
                             "Nombre actuel : " + batdrapeaupurshased +
                             " || Rapport actuel par seconde : " +batdrapeaupurshased*0.5;
            break;
        case 1:
            additionalText = " || Prix : " + valuebenevole.toFixed(0) +
                            " || Rapport de cookie par seconde : 1 || " +
                             "Nombre actuel : " + batbenevolepurshased +
                             " || Rapport actuel par seconde : " +batbenevolepurshased;
            break;
        case 2:
            additionalText = " || Prix : " + valuepoubelle.toFixed(0) +
                             " || Rapport de cookie par seconde : 8 || " +
                             "Nombre actuel : " + batpoubellepurshased +
                             " || Rapport actuel par seconde : " +batpoubellepurshased*8;
            break;
        case 3:
            additionalText = " || Prix : " + valueepuration.toFixed(0) +
                                " || Rapport de cookie par seconde : 47 || " +
                                "Nombre actuel : " + batepurationpurshased +
                                " || Rapport actuel par seconde : " +batepurationpurshased*47;
            break;
        case 4:
            additionalText = " || Prix : " + valuerecyclage.toFixed(0) +
                                " || Rapport de cookie par seconde : 260 || " +
                                "Nombre actuel : " +  batrecyclagepurshased +
                                " || Rapport actuel par seconde : " +batrecyclagepurshased*260;
            break;
        case 5:
            additionalText = " || Prix : " + valuebateau.toFixed(0) +
                                " || Rapport de cookie par seconde : 700 || " +
                                "Nombre actuel : " +  batbateaupurshased +
                                " || Rapport actuel par seconde : " +batbateaupurshased*700;
            break;
    }
    tooltip.textContent = buttonText + additionalText;
    SetRandomPosition(tooltip);
    tooltip.style.display = 'block'; 
    RefreshTooltip(buttonText, additionalText);
}

function hideTooltip() {
    tooltip.style.display = 'none';
}

function RefreshTooltip(buttonText, additionalText) {
    tooltip.innerHTML = buttonText + "<br>" + additionalText;  
    SetRandomPosition(tooltip); 
    tooltip.style.display = 'block'; 
}

buttons.forEach(button => {
    button.addEventListener('mouseenter', showTooltip);
    button.addEventListener('mouseleave', hideTooltip);
});

function CreateScrollBar(e) { 
    const deltaY = e?.deltaY || 0;

    if (deltaY > 0) {
        changeActiveButton(); 
    } else if (deltaY < 0) {
        currentIndex = (currentIndex - 1 + buttons.length) % buttons.length; 
        scrollContainer.scrollTo({
            left: buttons[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }
}

export { scrollContainer, CreateScrollBar, RefreshTooltip, buttonText };
