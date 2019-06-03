'use strict'
//Operaciones con Numbers
let x = 2
let y = 3
let z = x * y
// Operaciones con Numbers y Strings
let y = '3'
z = x * y // Durante la operacioon Number (y)
x = '5'
z = x * y

console.log (z) // 6
console.log(z, typeof z) // number
console.log(x, typeof x) // string
console.log(y, typeof y) // string

/* Sobrecarga del símbolo +
+3
"Hola" + "Pepe"
2+2
*/


let w= x + y  // No da 8 da '53'
console.log (w, typeof w)

x = 23
y = '20'
let w= x + y  // No da 43 da '2320'
console.log (w, typeof w)

function sumar (a,b) {

    if (typeof a != 'number' || typeof b != 'number') {
        return 'No se puede sumar'
    }
    let r = a + b
    return 'La suma es ' + r

}


console.log(sumar(2,2))
console.log(sumar(2.0))
console.log(sumar(0,2))
console.log(sumar(2,'5'))
