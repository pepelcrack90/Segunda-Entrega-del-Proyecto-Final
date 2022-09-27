class Producto {
    constructor(id, nombre, importe, ) {
        this.id = creoID()
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return '$ ' + parseFloat((this.importe * IVA).toFixed(2))
    }
}

generadorAutomatico()

listarProductos()

btn.addEventListener("click", () => { filtrarProductos() })
rmv.addEventListener("click", () => { remover() })
finalizar.addEventListener("click", () => { finaliza() })
cargar.addEventListener("click", () => { carga() })

button.addEventListener("mouseover", () => input.className = "hoverr")
button.addEventListener("blur", () => input.className = "")