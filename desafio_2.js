/*Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸*/

const pizzas = [
    {
        "id": 1,
        "nombre": "Mozzarella",
        "ingredientes": ["salsa", "queso", "orégano"],
        "precio": 550
    },
    {
        "id": 2,
        "nombre": "Napolitana",
        "ingredientes": ["salsa", "queso", "tomate", "ajo", "orégano"],
        "precio": 600
    },
    {
        "id": 3,
        "nombre": "Fugazzetta",
        "ingredientes": ["cebolla", "queso", "orégano"],
        "precio": 650
    },
    {
        "id": 4,
        "nombre": "Huevo y jamón",
        "ingredientes": ["salsa", "queso", "huevo", "jamón", "orégano"],
        "precio": 700
    },
    {
        "id": 5,
        "nombre": "Calabresa",
        "ingredientes": ["salsa", "queso", "salame", "orégano"],
        "precio": 550
    },
    {
        "id": 6,
        "nombre": "Rúcula",
        "ingredientes": ["salsa", "queso", "rúcula", "orégano"],
        "precio": 600
    }
]

console.log(`Las pizzas que tiene el ID inpar son: ${pizzas.filter(pizza => pizza.id % 2 !== 0).map(pizza => pizza.nombre)}`);

console.log(`Las pizzas que tienen el precio menos a $600: ${pizzas.filter(pizza => pizza.precio < 600).map(pizza => pizza.nombre)}`);

pizzas.forEach(pizza => console.log("Nombre de la pizza:", pizza.nombre));

pizzas.forEach(pizza => console.log("Precio de la pizza: $", pizza.precio));

pizzas.forEach(pizza => console.log("Nombre de la pizza:", pizza.nombre, "Precio de la pizza: $", pizza.precio));

