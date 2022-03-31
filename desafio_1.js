// DESAFIO
/* 👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

👉 Crear una función que acepte ese array como parámetro. 

Dentro de la función, debemos lograr lo siguiente: 
👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
Los ingredientes impares son: (ingredientes en array impares)."*/

var ingredientes = ["harina", "agua", "aceite", "levadura", "sal", "salsa", "queso", "orégano", "huevo", "tomate"]
console.log(`Los ingredientes que hay son: ${ingredientes.toString()}`);

function parImpar (ingredientes) {

    let ingredientesPar = ingredientes.filter(item => item.length % 2 == 0);
    let ingredientesImpar = ingredientes.filter(item => !(item.length % 2 == 0));

    return console.log(`Los ingredientes pares son: ${ingredientesPar.toString()}. Los ingredientes impares son: ${ingredientesImpar.toString()}`)
}
parImpar(ingredientes);