
window.Telegram.WebApp.ready();

if (window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
    const user = window.Telegram.WebApp.initDataUnsafe.user;

    console.log("User ID:", user.id);
    console.log("First Name:", user.first_name);
    console.log("Last Name:", user.last_name || "Нет фамилии");
    console.log("Username:", user.username || "Нет юзернейма");
    console.log("Avatar:", user.photo_url || "Нет фото");

    document.getElementById("username").innerText = `Привет, ${user.first_name}!`;
} else {
    console.error("User is not authorized Game");
}


function logout() {
    window.Telegram.WebApp.close();
}
