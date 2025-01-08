<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $city = $_POST['city'];

    // Настроим получателя (ваш email)
    $to = "your-email@example.com"; // Замените на ваш email

    // Настроим тему письма
    $subject = "Новая заявка с сайта";

    // Создаем тело письма
    $message = "
    Имя: $name\n
    Email: $email\n
    Возраст: $age\n
    Город: $city
    ";

    // Заголовки письма
    $headers = "From: no-reply@example.com"; // Ваш email для отправки

    // Отправляем email
    if (mail($to, $subject, $message, $headers)) {
        echo "Спасибо за вашу заявку!";
    } else {
        echo "Произошла ошибка при отправке заявки.";
    }
}
?>