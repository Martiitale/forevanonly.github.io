function checkPassword() {
    const input = document.getElementById("password").value.trim().toLowerCase();
    const correctPassword = "florconalas"; // pon aquí el código correcto

    if (input === correctPassword) {
        document.getElementById("link").innerHTML = `<a href="https://tu-link-final.com" target="_blank">✨ Haz clic para continuar ✨</a>`;
    } else {
        document.getElementById("link").innerText = "❌ Contraseña incorrecta. Intenta otra vez.";
    }
}