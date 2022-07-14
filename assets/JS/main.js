let body = document.querySelector('body')
body.style.backgroundImage = "url('assets/img/fondo.jpeg')"
body.style.height = "100vh";
let container = document.querySelector('.container')
container.style.display = 'flex';
container.style.flexDirection = "column";
container.style.justifyContent = "center";
let card = document.querySelector(".card")
card.style.backgroundColor = '#2E4053';
card.style.padding = '2em';
let img = document.querySelector('.card-img-top')
img.style.borderRadius = '2px';
img.style.width = '90%';
let cardTitle = document.querySelector('.card-title')
cardTitle.style.color = 'white';
cardTitle.style.fontFamily = 'Lobster, cursive';
cardTitle.innerHTML = 'MacBook Pro';
function miFunc() {
    let cantidad = document.querySelector('#cantidad').value
    let precio = 300000
    let total = parseInt(cantidad) * precio
    let miTotal = document.querySelector('#mitotal')
    
    if(cantidad >=1){
        miTotal.innerHTML = '$' + parseInt(total);
    }else{
        alert("Por favor ingresar cantidad requerida.")
    }
    console.log(cantidad,precio);
} 

