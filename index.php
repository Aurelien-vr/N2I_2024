<!DOCTYPE html>
<html>
<head>
    <title>"HelloWorld"(print) work for N2i - 2024</title>
    <link rel="stylesheet" href="./styles/variables.css">
    <link rel="stylesheet" href="./styles/dark.css">
</head>
<body>

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