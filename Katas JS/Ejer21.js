// Ejercicio 21
// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
// "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

for (let index = 0; index < users.length; index++) {
  if (users[index].years >= 18) {
    console.log('Usuarios mayores de edad: ' + users[index].name)
  } else {
    console.log('Usuarios menores de edad: ' + users[index].name)
  }
}
