// Objeto analizador de texto
const analyzer = {
  //recuento de caracteres
  getCharacterCount: function (text) {
    return text.length;
  },

  //recuento de caracteres sin espacios
  getCharacterCountExcludingSpaces: function (text) {
    const textWithoutSpacesAndPunctuation = text.replace(/[^\w]/g, "");
    return textWithoutSpacesAndPunctuation.length;
  },

  //recuento de palabras
  getWordCount: function (text) {
    const words = text.trim().split(/\s+/);
    return words.length;
  },

  //recuento de numeros
  getNumberCount: function (text) {
    const numbers = text.match(/\b\d+(?:\.\d+)?\b/g);
    return numbers ? numbers.length : 0;
  },

  //suma de numeros
  getNumberSum: function (text) {
    let sum = 0;
    const numbers = text.match(/\b\d+(?:\.\d+)?\b/g);
    if (numbers) {
      for (let i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i]);
      }
    }
    return sum;
  },

  //longitud de palabras
  getAverageWordLength: function (text) {
    const words = text.trim().split(/\s+/);
    const totalLength = words.reduce((acc, curr) => acc + curr.length, 0);
    const averageLength = totalLength / words.length || 0;
    return parseFloat(averageLength.toFixed(2));
  },
};

export default analyzer;
