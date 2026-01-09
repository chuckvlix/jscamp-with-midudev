// Importar módulos con COMMON JS
const { sum } = require('./math')

const result = sum(2, 3)
console.log(`The sum of 2 and 3 is: ${result}`)

// En math.js
export const sum = (a, b) => a + b
module.exports.sum = { sum }