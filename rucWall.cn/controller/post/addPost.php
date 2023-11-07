<?php
//验证登录
require './../login/judgeLogin.php';
if (!empty($_POST)) {
    $title = $_POST['title'];
    $author = $_POST['author'];
    $content = $_POST['content'];
    if (!$title) {
        $title = "这个人没有上传标题";
    }
    if (!$author) {
        $author = "这个人不愿透露他的昵称";
    }
    if (!$content) {
        $content = "这个人没有说任何东西";
    }

    //连接数据库
    require './../db/db_connect.php';
    $sql = "insert into posts(title, author, content) values ('$title', '$author', '$content')";
    try {$result = mysqli_query($conn, $sql);} catch (Exception $e) {die("执行错误");}
    header('Location:../../index.php');
}