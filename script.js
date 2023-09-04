var texto1 = "";

function atualizarVariavel() {
    var textBoxElement = document.getElementById("textBox");
    texto1 = textBoxElement.value; 

    var textoExibidoElement = document.getElementById("textoExibido");
    textoExibidoElement.textContent = texto1; 
}

function converter() {
    var valorReal = parseFloat(document.getElementById("valorReal").value);
    var dolar = 4.96;
    var euro = 5.41;
    var kwanza = 0.0060;
    var rublo = 0.053;
    var iene = 0.034;

    var valorDolar = valorReal / dolar;
    var valorEuro = valorReal / euro;
    var valorKwanza = valorReal / kwanza;
    var valorRublo = valorReal / rublo;
    var valorIene = valorReal / iene;

    document.getElementById("valorDolar").textContent = valorDolar.toFixed(2);
    document.getElementById("valorEuro").textContent = valorEuro.toFixed(2);
    document.getElementById("valorKwanza").textContent = valorKwanza.toFixed(2);
    document.getElementById("valorRublo").textContent = valorRublo.toFixed(2);
    document.getElementById("valorIene").textContent = valorIene.toFixed(2);
}

function limitarDigitos(input, maxLength) {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }
