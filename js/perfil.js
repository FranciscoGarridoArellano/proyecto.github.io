let nombreUsuario = localStorage.getItem("nombreUsuario"); 

if (nombreUsuario) {
  console.log("Nombre de usuario recuperado: ", nombreUsuario);
  
  fetch("../json/login.json")
    .then(response => response.json())
    .then(data => {
      let usuario = data.find(u => u.usuario === nombreUsuario);

      if (usuario) {
        document.getElementById("nombreUsuario").textContent = usuario.nombre;
        document.getElementById("usuarioNombre").textContent = usuario.usuario;
        
        document.getElementById("rolUsuario").textContent = 
          usuario.tipo.charAt(0).toUpperCase() + usuario.tipo.slice(1); 
      } else {
        console.error("Usuario no encontrado en el JSON");
      }
    })
    .catch(error => {
      console.error("Hubo un problema al cargar el archivo JSON:", error);
    });
} else {
  console.error("No se ha encontrado un usuario en el localStorage.");
}
