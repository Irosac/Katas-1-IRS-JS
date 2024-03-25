// Ejercicio 13

// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function finderName(param, value) {
  let position = param.indexOf(value)
  if (position !== -1) {
    return { found: true, position: position }
  } else {
    return { found: false }
  }
}

// ¡A probarlo!
console.log(finderName(nameFinder, 'Logan')) // Debería devolver true y su posición.
console.log(finderName(nameFinder, 'Irene')) // Debería devolver false

// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder2 = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function encontrarNombre(param, nombre) {
  let posicion = param.indexOf(nombre)
  if (posicion !== -1) {
    return { encontrado: true, posicion: posicion }
  } else {
    return { encontrado: false }
  }
}

console.log(encontrarNombre(nameFinder2, 'Irene'))
console.log(encontrarNombre(nameFinder, 'Logan'))
