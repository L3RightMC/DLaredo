document.addEventListener("DOMContentLoaded", () => {
    const cajaPolitica = document.getElementById("caja-politica");
    const checkbox = document.getElementById("checkbox-politica");
    const botonPolitica = document.getElementById("boton-politica");

    checkbox.addEventListener("change", () => {
        botonPolitica.disabled = !checkbox.checked;
    });

    botonPolitica.addEventListener("click", () => {
        cajaPolitica.classList.add("oculto");
    });
});