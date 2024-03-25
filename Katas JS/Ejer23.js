// Ejercicio 23
// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array por consola.

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 }
]

const peliculasPequenas = []
const peliculasMedianas = []
const peliculasGrandes = []

for (let index = 0; index < movies.length; index++) {
  const movie = movies[index]
  if (movie.durationInMinutes < 100) {
    peliculasPequenas.push(movie)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes <= 200) {
    peliculasMedianas.push(movie)
  } else {
    peliculasGrandes.push(movie)
  }
}

console.log(peliculasMedianas)
console.log(peliculasGrandes)
console.log(peliculasPequenas)
