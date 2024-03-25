// Ejercicio 14

// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(param) {
  let wordCount = {}
  for (let word of param) {
    if (wordCount[word]) {
      wordCount[word]++
    } else {
      wordCount[word] = 1
    }
  }
  return wordCount
}

console.log(repeatCounter(counterWords))
