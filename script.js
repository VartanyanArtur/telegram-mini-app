let tg = window.Telegram.WebApp;
tg.expand(); // разворачивает окно

document.getElementById("username").innerText = tg.initDataUnsafe.user?.first_name || "пользователь";

function sendData() {
  tg.sendData("👋 Привет от мини-приложения!");
}
