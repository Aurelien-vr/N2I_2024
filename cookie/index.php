<!DOCTYPE html>
<html lang="fr">
<html>
    <head>
        <meta charset="utf-8">
        <title>Cookie cauchemar</title>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <span id="cookie-count"></span>

        <div class="progress-container">
            <div class="progress-bar"></div>
        </div>
        <div id=choix>
            <div id='augment'>
                <input id="augment-nb" type="button" value="">
                <input id="augment-taille" type="button" value="">
                <input id="augment-score" type="button" value="">
                <input id="augment-spawndore" type="button" value="" disabled>
                <input id="augment-tempsdore" type="button" value="Temps avant dispawn bateau doré augmenté" disabled>
            </div>
            <div id='devil'>
                <button id="devil-fenetre"><b>Contrepartie négative : double fenetre</b> <br> Double la hauteur de votre fenêtre pour obtenir le bateau doré </button>
                <button id="devil-depop"><b>Contrepartie négative : disparition</b> <br> Fait disparaître les bateaux à intervalles réguliers contre plus de score </button>
                <button id="devil-petit"><b>Contrepartie négative : tout petit</b> <br> Rend le bateau extrêmement petit (attention!) contre plus de score </button>
            </div>
            
            <div id="achat_vente">
                <input type="radio" name="transaction" id="acheter">
                <label class="btnrd">Acheter</label>
                <input type="radio" name="transaction" id="vendre" checked='checked'>
                <label class="btnrd">Vendre</label>
                <div id="scroll-container" class="scroll-container">
                    <button id="bat-drapeau" class="scroll-button1" data-text="Drapeau de sensibilisation "><img src="images/drapeau.png"></button>
                    <button id="bat-benevole" class="scroll-button2" data-text="Bénévoles 'race for water' "><img src="images/benevole.png"></button>
                    <button id="bat-poubelle" class="scroll-button1" data-text="Poubelle jaune "><img src="images/poubelle.png"></button>
                    <button id="bat-epuration" class="scroll-button2" data-text="Station épuration "><img src="images/epuration.png"></button>
                    <button id="bat-recyclage" class="scroll-button1" data-text="Station recyclage "><img src="images/recyclage.png"></button>
                    <button id="bat-bateau" class="scroll-button2" data-text="Bateau 'cleaner' "><img src="images/cleaner.png"></button>
                </div>
            </div>
        </div>
        <div id="tooltip" class="tooltip"></div>

        

        

    </body>
    <script type="module" src="./main.js"></script>
</html>