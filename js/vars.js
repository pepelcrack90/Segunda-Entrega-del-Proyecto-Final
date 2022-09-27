const productos = []
const carrito = []
const carrito2 = []
const IVA = 1.21

let fila = ""
let listas = ""
let fila2 = ""

const creoID = () => parseInt(Math.random() * 100000)
const tabla = document.querySelector("#tabla")
const btn = document.querySelector("#btn")
const rmv = document.querySelector("#rmv")
const boton = document.querySelectorAll("button")
const lista = document.querySelector("#lista")
const inputFiltrar = document.querySelector("input")
const finalizar = document.querySelector("#fnlr")
const cargar = document.querySelector("#cargar")
const guardar = (clave, valor) => { localStorage.setItem(clave, valor) }
const almacenados = JSON.parse(localStorage.getItem("carritoG"))