<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module" src="js/jquery-3.7.1.min.js"></script>
    <script type="module" src="js/main.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="element/top/top.css">
    <title>Document</title>
</head>
<body>
    <div id="lvOne">
        <?php 
            require './element/top/top.php';
        ?>
    </div>
    <div id="lvTwo">
        <?php
            require './element/loaihang.php';
        ?>
    </div>
    <div id="lvThree"></div>
    <div id="lvFore">
        <?php
            require './element/bottom.php' ;
        ?>
    </div>
</body>
</html>