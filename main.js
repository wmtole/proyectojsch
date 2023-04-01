const libros = [{
        nombre: "harry potter",
        precio: 100
    },
    {
        nombre: "el señor de los anillos",
        precio: 200
    },
    {
        nombre: "game of thrones",
        precio: 300
    },
    {
        nombre: "star wars",
        precio: 400
    },
    {
        nombre: "marvel",
        precio: 500
    },
];
let carrito = []

let seleccion = prompt("¡hola!, ¿desea comprar algun libro? ingrese si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

if (seleccion == "si") {
    alert("a continuacion nuestros libros")
    let todoslosLibros = libros.map(
        (libro) => libro.nombre + " " + libro.precio + "$"
    );
    alert(todoslosLibros.join(" - "))
} else if (seleccion == "no") {
    alert("¡gracias, hasta pronto!")
}

while (seleccion != "no") {
    let libro = prompt("agrega un libro a tu carrito")
    let precio = 0

    if (libro == "harry potter" || libro == "el señor de los anillos" || libro == "game of thrones" || libro == "star wars" || libro == "marvel") {
        switch (libro) {
            case "harry potter":
                precio = 100;
                break;
            case "el señor de los anillos":
                precio = 200;
                break;
            case "game of thrones":
                precio = 300;
                break;
            case "star wars":
                precio = 400;
                break;
            case "marvel":
                precio = 500;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("¿cuantos libros quiere llevar?"))

        carrito.push({
            libro,
            unidades,
            precio
        })
        console.log(carrito)
    } else {
        alert("no tenemos ese libro")
    }

    seleccion = prompt("¿desea seguir comprando?")

    while (seleccion === "no") {
        alert("¡gracias por la compra, hasta pronto!")
        carrito.forEach((carritoFinal) => {
            console.log(`libro: ${carritoFinal.libro}, unidades: ${carritoFinal.unidades}, total a pagar por el libro ${carritoFinal.unidades * carritoFinal.precio}`)

        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`el total a pagar por su compra es: ${total}`)