const otrosProductos = [
    {
        id: 0,
        nombre: 'Alfajor Nutella',
        precio: 1200,
        det: 'Relleno de manjar, nutella y suaves marshmallows',
        cantidad: 2


    },
    {
        id: 1,
        nombre: 'Alfajor Crema de maní',
        precio: 1200,
        det: 'Relleno de manjar, crema de maní y suaves marshmallows',
        cantidad: 2
    },
    {
        id: 2,
        nombre: 'Alfajor Pasas al Ron',
        precio: 1200,
        det: 'Rellenos de manjar y pasas maceradas artesanalmente en Ron',
        cantidad: 2

    },
    {
        id: 3,
        nombre: 'Alfajor Ferrero',
        precio: 1200,
        det: 'Relleno de manjar y mezcla ferrero (oblea,nutella y avellanas)',
        cantidad: 2
    },
    {
        id: 4,
        nombre: 'Alfajor Nueces',
        precio: 1200,
        det: 'Relleno de manjar y nueces seleccionadas',
        cantidad: 2
    },
    {
        id: 5,
        nombre: 'Alfajor Maracuyá',
        precio: 1200,
        det: 'Relleno de manjar y exquisito cremoso de maracuyá',
        cantiadad: 2
    },
    {
        id: 6,
        nombre: 'Alfajor Lemon pie',
        precio: 1200,
        det: 'Relleno de manjar y exquisito cremoso de Lemon pie',
        cantidad: 2
    },
]

let container = document.querySelector('section');

let boton = document.querySelectorAll('.boton');

boton.forEach((botoncillo) => {
    botoncillo.addEventListener('click', (botonsuelo) => {
        console.log(products)
        let ide = botonsuelo.target.id;
        let producto = (otrosProductos.at(ide));
        const div = document.createElement('div');
        div.classList.add('caja');
        div.innerHTML = `
        <div class="caja">
            <h2>${producto.nombre}</h2>
            <h2>${producto.det}</h2>
        </div>
        `
        container.appendChild(div);
    }
    )
});
