function contar_palabras() {
  let area_texto = document.getElementById("texto");
  let contar_palabras = area_texto.value.split(" ");
  let numero_palabras = document.getElementById("nu_palabras");
  numero_palabras.textContent = contar_palabras.length;
}

function palabras_repetidas() {
  let contador = {}
  let area_texto = document.getElementById("texto");
  let palabra_igual = area_texto.value.split(" ");
  let palabra_similar = document.getElementById("palabras_iguales");
  for (var i = 0; i < palabra_igual.length; i++) {
    var elemento = palabra_igual[i];
    var palabra = palabra_igual.reduce(function (n, val) {
      return n + (val === elemento);
    }, 0)

    if (palabra > 1) {
      contador[palabra_igual[i]] = palabra;
    }
  }

  for (cont in contador) {
    let li = document.createElement("li")
    li.innerHTML = cont + " está " + (contador[cont]) + " veces"
    palabra_similar.append(li);
  }
}

function contar_caracter() {
  let node_numero_caracteres = document.getElementById("numerocarac");
  let node_text_area = document.getElementById("texto");
  node_numero_caracteres.textContent = node_text_area.value.length;

}
var c = document.getElementById("contar_todo")
c.addEventListener("click", contar_caracter);
c.addEventListener("click", contar_palabras);
c.addEventListener("click", palabras_repetidas);


