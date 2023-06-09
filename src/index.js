import analyzer from "./analyzer.js";

// Event listener para el evento keyup del textarea
//captura del valor del textarea al darle
document.querySelector("textarea").addEventListener("keyup", function () {
  let text = this.value;

  // Actualizar métricas

  //Recuento de caracteres :
  const charCount = analyzer.getCharacterCount(text);
  if (charCount === 1) {
    document.getElementById("charCount").textContent = charCount + " carácter";
  } else {
    document.getElementById("charCount").textContent =
      charCount + " caracteres";
  }

  //Recuento de caracteres sin espacios
  const charCountNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  if (charCountNoSpaces === 1) {
    document.getElementById("charCountNoSpaces").textContent =
      charCountNoSpaces + " carácter";
  } else {
    document.getElementById("charCountNoSpaces").textContent =
      charCountNoSpaces + " caracteres";
  }

  //palabras
  const wordCount = analyzer.getWordCount(text);
  if (wordCount === 1) {
    document.getElementById("wordCount").textContent = wordCount + " palabra";
  } else {
    document.getElementById("wordCount").textContent = wordCount + " palabras";
  }

  //numeros
  const numberCount = analyzer.getNumbersCount(text);
  if (numberCount === 1) {
    document.getElementById("numberCount").textContent =
      numberCount + " número";
  } else {
    document.getElementById("numberCount").textContent =
      numberCount + " números";
  }

  //suma total de numeros
  const numberSum = analyzer.getNumbersSum(text);
  document.getElementById("numberSum").textContent = numberSum;

  //longitud de palabras
  const averageWordLength = analyzer.getAverageWordLength(text);
  document.getElementById("averageWordLength").textContent =
    averageWordLength.toFixed(2);
  7;
});

// Event listener para el botón de reset
//al darle click al boton se reinicia todos los valores
document.getElementById("reset-button").addEventListener("click", function () {
  document.querySelector("textarea").value = "";
  document.getElementById("wordCount").textContent = "";
  document.getElementById("charCount").textContent = "";
  document.getElementById("charCountNoSpaces").textContent = "";
  document.getElementById("numberCount").textContent = "";
  document.getElementById("numberSum").textContent = "";
  document.getElementById("averageWordLength").textContent = "";
});
