let form = document.querySelector("#registrationForm")
const MIN_NAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 6;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    if (name.length < MIN_NAME_LENGTH) {
        alert("Ім'я повинне містити не менше " + MIN_NAME_LENGTH + " символів.")
        return;
    }
    const email = document.getElementById('email').value;
    if (!EMAIL_PATTERN.test(email)) {
        alert("Введіть коректний email-адрес.");
        return;
    }
    const password = document.getElementById('password').value;
    if (password.length < MIN_PASSWORD_LENGTH) {
        alert("Пароль повинен бути довжиною мінімум " + MIN_PASSWORD_LENGTH + " символів.")
        return;
    }
    alert("Форма успішно відправлена!");
    form.reset();
}) 