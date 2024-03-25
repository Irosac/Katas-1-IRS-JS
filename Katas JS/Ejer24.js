// Ejercicio 24
// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let totalSales = 0

for (let index = 0; index < products.length; index++) {
  totalSales += products[index].sellCount
}

console.log('Total de ventas:', totalSales)
