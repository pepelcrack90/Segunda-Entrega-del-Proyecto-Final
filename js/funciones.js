function generadorAutomatico() {
    productos.push(new Producto(1234, "MOUSE LOGITECH", 29950))
    productos.push(new Producto(2345, "MOUSEPAD REDRAGON XL", 249900))
    productos.push(new Producto(3456, "TECLADO REDRAGON", 199949))
    productos.push(new Producto(4567, "MONITOR 32 SAMSUNG", 219890))
    productos.push(new Producto(5678, "GABINETE SENTEY", 409090))
    productos.push(new Producto(6789, "AURICULARES HYPERX", 459000))
    productos.push(new Producto(7890, "TARJETA DE VIDEO 560 4GB", 679800))
}


function cargarProductos() {
    carrito.forEach(producto => {
        fila = `<tr>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.importe}</td>
                        <td>${producto.precioFinal()}</td>
                    </tr>`
        tabla.innerHTML += fila
    })
}

function remover() {
    tabla.innerHTML -= fila
}


function filtrarProductos() {
    tabla.innerHTML = ""
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        let resultado = productos.find((producto) => producto.nombre.includes(inputFiltrar.value))
        if (resultado.length === 0) {
            console.clear()
            console.warn("No se encontraron productos.")
            cargarProductos()
        } else {
            carrito.push(new Producto(resultado.id, resultado.nombre, resultado.importe))
            cargarProductos()
        }
    } else {
        cargarProductos()
    }
}

function listarProductos() {
    //debugger
    productos.forEach((producto) => {
        listas = `<tr>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.importe}</td>
                        <td>${producto.precioFinal()}</td>
                    </tr>`
        lista.innerHTML += listas
    })
}

function finaliza() {
    guardar("carritoG", JSON.stringify(carrito))
    tabla.innerHTML -= fila
}

function carga() {
    for (producto of almacenados) {
        carrito2.push(new Producto(producto))
    }
    if (carrito2 !== "") {
        carrito2.forEach(producto => {
            fila = `<tr>
                            <td>${producto.id}</td>
                            <td>${producto.nombre}</td>
                            <td>${producto.importe}</td>
                            <td>${producto.precioFinal()}</td>
                        </tr>`
            tabla.innerHTML += fila
        })
    } else {
        fila2 = `<p>"su carrito esta vacio" </p>`
        tabla.innerHTML += fila2
    }

}