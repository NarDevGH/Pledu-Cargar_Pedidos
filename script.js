
const input_nombre = document.querySelector("#input-nombre")
const input_autor = document.querySelector("#input-autor")
const input_direccion = document.querySelector("#input-direccion")
const btn_cargar = document.querySelector("#btn-cargar")
const btn_refrescar = document.querySelector("#btn-refrescar")

const div_confirmaciones = document.querySelector(".confirmaciones")
const ul_confirmaciones = document.querySelector("#lista-confirmaciones")

let pedidos = []

function numeroGestionRandomYUnico(){
    let numeroRandom = Math.floor(Math.random() * 101)
    if(pedidos.length > 0){
        let repetido = false
        do{
            for(let pedido in pedidos){
                if(pedido.numeroGestion == numeroRandom){
                    repetido = true
                    numeroRandom = Math.floor(Math.random() * 101)
                    break
                }
            }
        }while(repetido)
    }
    return numeroRandom
}

class Pedido{
    constructor(nombre,autor,direccion){
        this.numeroGestion = numeroGestionRandomYUnico()
        this.cargarItems(nombre,autor,direccion)    
    }

    crearDiv(nombre,autor,direccion){
        let li_pedido = document.createElement("li")
        li_pedido.textContent = `${this.numeroGestion} - El libro titulado ${nombre} , del autor ${autor} será llevado a la dirección ${direccion}`
        ul_confirmaciones.appendChild(li_pedido)
    }

    cargarItems(nombre,autor,direccion){
        this.crearDiv(nombre,autor,direccion)
    }
}

btn_cargar.addEventListener("click",_=>{
    if(ul_confirmaciones.children.length < 5){
        if(input_nombre.value != "" && input_autor.value  != "" && input_direccion.value != ""){
            let pedido = new Pedido(input_nombre.value,input_autor.value,input_direccion.value)
            pedidos.push(pedido)
        }
        else{
            alert("ERROR! Carge todos los campos.")
        }
    }
    else{
        alert("ERROR! Capacidad Maxima del Sistema Alcanzada.")
    }
})

btn_refrescar.addEventListener("click",_=>{
    ul_confirmaciones.innerHTML = ""
    pedidos = []
})