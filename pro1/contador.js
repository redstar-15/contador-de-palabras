function contar_caracter() {
  document.getElementById("numerocarac").textContent = document.getElementById("texto").value.length;
}
document.getElementById("texto").addEventListener("input", contar_caracter);

