// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]

function average(param) {
  let suma = 0
  for (const number of param) {
    suma += number
  }
  return suma / param.length
}

console.log(average(numbers))
