<!DOCTYPE html>
<html>
<head>
    <title>"HelloWorld"(print) work for N2i - 2024</title>
    <link rel="stylesheet" href="./styles/variables.css">
    <link rel="stylesheet" href="./styles/dark.css">
</head>
<body>
    <section>
        <h1 class="title" style="color:black">Bienvenue sur <span class="i" style="color:black; text-decoration: underline;">float</span>.</h1>
        <p>
            Pour cette fin d'année 2024, les organisateur du la nuit de l'informatique nous on donnée comme thématique : 
            <b>Et si l'océan était un corps humain ?</b> Nous avons donc choisi certains défis que nous avons adapter à cette 
            thématique tel que le cookie cliquer. En outre nous avons aussi choisi les défis suivant, a savoir le CAPCHA ludique, 
            la pire interface utilisateur possible, la touche rétro et le projet de crossover de jeux.
        </p>
        <p class="pV2-right" style="color:black">
        A l'attention de l'association <b style="color:black">Race for Water</b>, qui met en service un nouveau catamaran a zéro émission de CO2, le MODX 70. 
        Leur travail mérite bien d'être saluer après 10 ans d'existence et la réussite de se types de projet.
        </p>
    </section>
<script type="module">
    import { Navbar } from "./scripts/generators/navbar.js";
    import { BotDetector } from "./scripts/BotDetector.js";
    let navbar = new Navbar([
        "./captcha/index.php",
        "./cookie/index.php",
    ]);
    navbar.PrependBind(document.body);
    const bd = new BotDetector();
    
</script>
</body>
</html>