function reverseText(text) {
  if (typeof text === 'string') {
    return text.split('').reverse().join('');
  } else {
    throw new Error("Type is not correct");
  }
};

function emptyText(text) {
    throw new Error("empty string")
}

module.exports = {reverseText, emptyText};