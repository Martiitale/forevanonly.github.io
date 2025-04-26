function checkPassword() {
    const input = document.getElementById("password").value.trim().toLowerCase();
    const correctPassword = "florconalas"; // Aquí pon la contraseña 1
    const correctPassword1 = "buenas"; // Aquí pon la contraseña 2
    const correctPassword2 = "tardes"; // Aquí pon la contraseña 2

    // Aquí puedes añadir todas las que quieras
    const clues = [
        "Pista 1: Esto es una prueba",
        "Pista 2: Otra prueba",
        "Pista 3: Puede ser que estes cerca"
    ]

    let clueCount = clues.length;
    let randomClue = Math.floor(Math.random() * clueCount);

    if (input === correctPassword) {
        // Link contraseña 1
        document.getElementById("link").innerHTML = `<a href="https://martiitale.github.io/eatingtoes.github.io/resources/grammarism-some-any-test-5-1196242.pdf" target="_blank">✨ Haz clic para continuar ✨</a>`;
    } else if (input === correctPassword1) {
        // Link contraseña 2
        document.getElementById("link").innerHTML = `<a href="https://martiitale.github.io/eatingtoes.github.io/error/index.html" target="_blank">✨ Haz clic para continuar ✨</a>`;
    } else if (input === correctPassword2) {
        // Link contraseña 3
        document.getElementById("link").innerHTML = `<a href="https://example.com" target="_blank">✨ Haz clic para continuar ✨</a>`;
    } else {
        document.getElementById("link").innerText = "❌ Contraseña incorrecta. Intenta otra vez.";
        document.getElementById("clue").innerText = clues[randomClue];
    }
}
