function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }

  function validarFormulario() {
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;

    if (!nombre || !email || !mensaje) {
        alert("Por favor, llena todos los campos antes de enviar el formulario.");
        return false; // Evita el envío del formulario
    }

    alert("¡Mensaje enviado con éxito!");
    return true; // Permite el envío del formulario
}
