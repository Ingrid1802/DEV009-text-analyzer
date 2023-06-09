// Objeto analizador de texto
let analyzer = {
  getWordCount: function (text) {
    const words = text.trim().split(/\s+/);
    return words.length;
  },

  getCharacterCount: function (text) {
    return text.length;
  },

  getCharacterCountExcludingSpaces: function (text) {
    const textWithoutSpaces = text.replace(/\s/g, "");
    return textWithoutSpaces.length;
  },

  getNumbersCount: function (text) {
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  },

  getNumbersSum: function (text) {
    let sum = 0;
    let numbers = text.match(/\d+/g);
    if (numbers) {
      for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
      }
    }
    return sum;
  },
  getAverageWordLength: function (text) {
    const words = text.trim().split(/\s+/);
    const totalLength = words.reduce((acc, curr) => acc + curr.length, 0);
    return totalLength / words.length || 0;
  },
};

export default analyzer;
