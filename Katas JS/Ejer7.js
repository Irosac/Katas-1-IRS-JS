// Completa la función que tomando dos números como argumento devuelva el más alto.

const numberOne = 175
const numberTwo = 75

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  }
  if (numberOne == numberTwo) {
    return 'Son el mismo número'
  } else {
    return numberTwo
  }
}

// function sum(numberOne, numberTwo) {
//   return Math.max(numberOne, numberTwo)
// }

// let numberOne = 175
// let numberTwo = 17

console.log(sum(numberOne, numberTwo))
