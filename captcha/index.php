<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Captcha Page</title>
    <link rel="stylesheet" href="../styles/variables.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <h1></h1>
    <div id="objets">
        <div id = "pickaxe">
            <img src="./ressources/Pickaxe.png" alt="pioche">
        </div>
        <div id = "mur">
            <img src="./ressources/BuiltWall.png" alt="pelle">
        </div>
    </div>
        
    <script type="module" language="JavaScript">
        import { GridForGame } from "./modules/webcomponents/gridforgame.js";
        import { createGrid1 } from "./modules/differentgrids/grid1.js";
        import { setupImageInteractions } from "./modules/webcomponents/imginteraction.js";
        import { BotDetector } from "../scripts/BotDetector.js";
        window.alert("Check for console to see output (is bot or not) results");
        const size = 9;
        let player = createGrid1();

        // Crée la grille principale
        const mainGrid = new GridForGame(size,player);

        for (let x = 1; x <= size; x++) {
            for (let y = 1; y <= size; y++) {
                mainGrid.addElementToGrid(x, y);
            }
        }

        setupImageInteractions();
        // Ajoute la grille principale au document
        mainGrid.Bind(document.body);

        // action listener sur les click
        mainGrid.displayGrid(player);

        // check console ! :)
        new BotDetector();

        export{mainGrid,size}
    </script>

</body>
</html>
