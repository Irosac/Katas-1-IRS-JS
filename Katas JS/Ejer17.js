// Ejercicio 17
// Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

for (const key in alien) {
  if (Object.hasOwnProperty.call(alien, key)) {
    const value = alien[key]
    // console.log(`${key}: ${value}`)
    console.log(key + ': ' + value)
  }
}

// Plantilla de Visual Studio para el for in para objetos (recuerda, no arrays)
// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }
