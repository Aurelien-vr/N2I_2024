<!DOCTYPE html>
<html>
<head>
    <title>"HelloWorld"(print) work for N2i - 2024</title>
    <link rel="stylesheet" href="./styles/variables.css">
    <link rel="stylesheet" href="./styles/dark.css">
</head>
<body>
    <section>
        <h1 class="title">Bienvenue sur <span class="i">float</span>.</h1>
        <p>
            Pour cette fin d'année 2024, les organisateur du la nuit de l'informatique nous on donnée comme thématique : 
            <b>Et si l'océan était un corps humain ?</b> Nous avons donc choisi certains défis que nous avons adapter à cette 
            thématique tel que le cookie cliquer. En outre nous avons aussi choisi les défis suivant, a savoir le CAPCHA ludique, 
            la pire interface utilisateur possible, la touche rétro et le projet de crossover de jeux.
        </p>
    </section>
<script type="module">
    import { Navbar } from "./scripts/generators/navbar.js";
    let navbar = new Navbar([
        "./captcha/index.php",
        "./cookie/index.php",
    ]);
    navbar.PrependBind(document.body);
</script>
</body>
</html>