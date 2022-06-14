const card = document.querySelector('.card')

export function crearCard(pizza) {
    limpiarHTML()
    
    // Crear imagen
    const img = document.createElement('img')
    img.classList.add('card-img')
    img.src = pizza.url
    card.appendChild(img)

    // Crear contenedor info
    const info = document.createElement('div')
    card.appendChild(info)

    // Crear nombre
    const title = document.createElement('h2')
    title.innerText = pizza.nombre
    info.appendChild(title)

    // Crear lista ingredientes
    const tit_ingre = document.createElement('h3')
    tit_ingre.innerText = 'Ingredientes:'
    info.appendChild(tit_ingre)
    const list = document.createElement('ul')
    info.appendChild(list)
    pizza.ingredientes.forEach(ingrediente => {
        const elementIngre = document.createElement('li')
        elementIngre.innerText = ingrediente
        list.appendChild(elementIngre)
    });

    // Crear precio
    const precio = document.createElement('p')
    precio.innerText = `$ ${pizza.precio}`
    info.appendChild(precio)

}

export function limpiarHTML(){
    while (card.firstChild) {
        card.removeChild(card.firstChild)
    }
}