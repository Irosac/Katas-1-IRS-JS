// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
avengers[0] = 'IRONMAN'
console.log(avengers)

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length)

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[4])

//En este caso son 5 posiciones, el elemento 4, pero de haber más, muestro otra opción abajo.
let ultimoElemento = rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
console.log(ultimoElemento)

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters2.pop()
let primerElemento = rickAndMortyCharacters2[0]
let ultimoElemento2 =
  rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]

console.log(primerElemento, ultimoElemento2)

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters3.splice(1, 1)
console.log(rickAndMortyCharacters3)
