// Función para mostrar ejercicios según la edad seleccionada
document.getElementById("ejercicioInfantil").addEventListener("click", function() {
  document.getElementById("ejercicioDetalle").innerHTML = `
    <p>Ejercicios para mejorar el vocabulario y la comprensión. Ejemplo: Completa la frase con imágenes.</p>
  `;
});

document.getElementById("ejercicioPrimaria").addEventListener("click", function() {
  document.getElementById("ejercicioDetalle").innerHTML = `
    <p>Ejercicios para estructuración de oraciones y comprensión lectora. Ejemplo: Completa la historia.</p>
  `;
});

document.getElementById("ejercicioAdolescentes").addEventListener("click", function() {
  document.getElementById("ejercicioDetalle").innerHTML = `
    <p>Ejercicios para mejorar la fluidez y la comunicación. Ejemplo: Debate sobre un tema y practica respuestas.</p>
  `;
});

// Función para registrar el progreso
function registrarProgreso() {
  const listaProgreso = document.getElementById("listaProgreso");
  const item = document.createElement("li");
  item.textContent = "Ejercicio completado el " + new Date().toLocaleDateString();
  listaProgreso.appendChild(item);
}
