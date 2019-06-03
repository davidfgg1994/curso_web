/**
 * JSDoc
 * @description Programa que calcula y muestra 
 *              si un número es par o impar
 */

/**
 * @description Función que comprueba si una expresión 
 *      es convertible a un número valido
 *      rechazando objects, arrays, booleans, null 
 *      undefined, '' y string no numéricos
 * @param {any} n 
 * @returns {boolean}
 */ 
function isValidNumber(n) {
    let r = true
    if ( isNaN(n) || typeof n == 'boolean' 
    || Array.isArray(n) || n === ''  || n === null) {
        r = false
    }
    return r
}

/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */
function isEntero( n = 0) {
     return (parseInt(n) === parseFloat(n))
}

 /**
  * @description Función que calcula si un número es par
  *     Puede devolver: -2, -1, true, false
  * @param {number}: n
  * @returns {*}
  * 
  */
  function esPar(n) {
    let r = true 
    if (!isValidNumber(n)) {
        // Excepción: n no es un número
        return -2
    } else if (!isEntero(n)) {
        // Excepción: n no es entero
        return -1
    } else if (n%2)  {
        r = false
    }
    return r
  }


  /**
   * @description Función que muestra si un número es par o impar
   * @param {number}: n
   * @returns {void}
   */

   function mostrar(n) {
       let mensajes = [
           `El número ${n} es impar`,
           `El número ${n} es par`,
           `El número ${n} no es entero`,
           `${n} no es un número`
       ]
       try {
        let i = Number(esPar(n))   //i: return 0, 1 
       } catch (error) { // error -2 -1,
        i= -error + 1 // -1 -> 2 // -2 -> 3
           
       }
       // -2 -1, 0, 1
       if ( i< 0) { // código de error
         i = -i + 1 // -1 -> 2 // -2 -> 3
       }
       console.log(mensajes[i])
   }

   function probar() 
      
   
   // probar()

//    Gestion de errores

//        const x = 67
// try {  
//     // x = 51
//    //throw 'probando error'
//    z = z + x
//    console.log ('z vale', z)
// } catch (e) {
//     console.log('Se ha producido un error')
//     if(error.name) {
//       console.log(error.name, error.message)  
//     } else {
//         console.log(e)
//     }

// }
// console.log('x vale' ,x)

//    }

//    errores ()

  