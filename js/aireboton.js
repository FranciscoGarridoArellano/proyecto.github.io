const toggleButton = document.getElementById('toggleButton');
const statusText = document.getElementById('status');

toggleButton.addEventListener('click', () => {
    if (toggleButton.textContent === "Apagar") {
        toggleButton.textContent = "Encender";
        toggleButton.classList.add("off");
        statusText.textContent = "Aire Acondicionado Apagado";
        statusText.style.color = "red";
    } else {
        toggleButton.textContent = "Apagar";
        toggleButton.classList.remove("off");
        statusText.textContent = "Aire Acondicionado Prendido";
        statusText.style.color = "green";
    }
});