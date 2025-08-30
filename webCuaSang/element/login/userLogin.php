<?php
    session_start();
?>

<link rel="stylesheet" href="userLogin.css">
<div class="wrapper">
    <form action="../../index.php" method="post" class="from_Login">
        <div class="heading_Login">Đăng nhập</div>
        <div class="from_group">
            <img src="./img/user.png" alt="" class="iconimg">
            <input type="text" name="username" id="input" placeholder= "Tên đăng nhập" ></input>
        </div>
        <div class="from_group">
        <img src="./img/password.png" alt="" class="iconimg">    
        <input type="password" name="password" id="input" placeholder= "Mật khẩu" ></input>
        </div>
        <div class="from_group">
            <input type="submit" value="Đăng nhập" class="from_submit">
            <input type="submit" value="Đăng ký" class="from_submit">
        </div>
        
    </from>
</div>