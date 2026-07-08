// LOADING SCREEN
window.addEventListener("load", () => {
  setTimeout(() => {
    const loading = document.getElementById("loading-screen");
    loading.style.opacity = "0";

    setTimeout(() => {
      loading.style.display = "none";
      document.getElementById("app").classList.remove("hidden");
    }, 500);

  }, 1500);
});

// CAMBIO DE PANTALLA
function seleccionarCarta(nombre) {
  const p1 = document.getElementById("pantalla1");
  const p2 = document.getElementById("pantalla2");

  p1.classList.add("hidden");
  p2.classList.remove("hidden");

  document.getElementById("tituloCarta").textContent = nombre;
}

// FORM
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Aquí conectamos con el backend después 🚀");
});