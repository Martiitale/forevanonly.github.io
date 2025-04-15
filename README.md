<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>🔒 Introduce la contraseña</title>
  <style>
    body {
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: sans-serif;
    }
    input, button {
      margin: 10px;
      padding: 10px;
      font-size: 1.2rem;
    }
    #link {
      margin-top: 20px;
      color: green;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h2>🔍 Introduce la contraseña</h2>
  <input type="text" id="passwordInput" placeholder="Escribe aquí...">
  <button onclick="checkPassword()">Enviar</button>
  
  <div id="link"></div>

  <script>
    function checkPassword() {
      const input = document.getElementById("passwordInput").value.trim().toLowerCase();
      const correctPassword = "florconalas"; // pon aquí el código correcto

      if (input === correctPassword) {
        document.getElementById("link").innerHTML = `<a href="https://tu-link-final.com" target="_blank">✨ Haz clic para continuar ✨</a>`;
      } else {
        document.getElementById("link").innerText = "❌ Contraseña incorrecta. Intenta otra vez.";
      }
    }
  </script>

</body>
</html>
