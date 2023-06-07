// Objeto analizador de texto
const analyzer = {
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
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.reduce((acc, curr) => acc + parseInt(curr), 0) : 0;
  },

  getAverageWordLength: function (text) {
    const words = text.trim().split(/\s+/);
    const totalLength = words.reduce((acc, curr) => acc + curr.length, 0);
    return totalLength / words.length || 0;
  },
};

export default analyzer;
