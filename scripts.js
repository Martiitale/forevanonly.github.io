function checkPassword() {
    const input = document.getElementById("password").value.trim().toLowerCase();
    const correctPassword = "florconalas"; // Aquí pon la contraseña
    const correctPassword1 = "buenas"; // Aquí pon la contraseña
    const correctPassword2 = "tardes"; // Aquí pon la contraseña

    // Aquí puedes añadir todas las que quieras
    const clues = [
        "Pista 1: Esto es una prueba",
        "Pista 2: Otra prueba",
        "Pista 3: Puede ser que estes cerca"
    ]

    let clueCount = clues.length;
    let randomClue = Math.floor(Math.random() * clueCount);

    if (input === correctPassword) {
        document.getElementById("link").innerHTML = `<a href="https://tu-link-final.com" target="_blank">✨ Haz clic para continuar ✨</a>`;
    } else if (input === correctPassword1) {
        document.getElementById("link").innerHTML = `<a href="https://tu-link-final1.com" target="_blank">✨ Haz clic para continuar ✨</a>`;
    } else if (input === correctPassword2) {
        document.getElementById("link").innerHTML = `<a href="https://tu-link-final2.com" target="_blank">✨ Haz clic para continuar ✨</a>`;
    } else {
        document.getElementById("link").innerText = "❌ Contraseña incorrecta. Intenta otra vez.";
        document.getElementById("clue").innerText = clues[randomClue];
    }
}