document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener("submit", async (event) => {
        event.preventDefault();

        let usuario = document.getElementById("usuario").value;
        let contraseña = document.getElementById("password").value;

        if (!usuario || !contraseña) {
            alert("Por favor, ingrese ambos campos.");
            return;
        }

        fetch("json/login.json")
            .then(response => response.json())
            .then(usuarios => {
                let usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);

                if (usuarioEncontrado) {
                    alert("Inicio de sesión exitoso");

                    localStorage.setItem("nombreUsuario", usuarioEncontrado.usuario);

                    window.location.href = usuarioEncontrado.tipo === "admin" ? "html/admin.html" : "html/usuario.html";
                } else {
                    alert("Usuario o contraseña incorrectos");
                }
            })
            .catch(error => {
                console.error("Error cargando el archivo JSON", error);
                alert("Hubo un problema al cargar los datos. Intente nuevamente.");
            });
    });
});


