//variables
let miColor = document.querySelector("#micolor");
let body = document.querySelector("body");
body.style.backgroundImage = "url('assets/img/fondo.jpeg')";
body.style.height = "100vh";
let container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
let card = document.querySelector(".card");
card.style.backgroundColor = "#2E4053";
card.style.padding = "2em";
let img = document.querySelector(".card-img-top");
img.style.borderRadius = "2px";
img.style.width = "100%";
let cardTitle = document.querySelector(".card-title");
cardTitle.style.color = "white";
cardTitle.style.fontFamily = "Lobster, cursive";
cardTitle.innerHTML = "MacBook Pro";
let resultado = document.querySelector(".resultado");
resultado.style.display = "flex";
resultado.style.flexDirection = "column";
resultado.style.justifyContent = "center";
let resultado2 = document.querySelector(".resultado2");
resultado2.style.backgroundColor = "aliceblue";
resultado2.style.borderRadius = "3px";
resultado2.style.padding = "2em";
resultado2.style.display = "flex";
resultado2.style.flexDirection = "column";
resultado2.style.justifyContent = "center";
miColor.style.width = "20px";
miColor.style.height = "20px";
miColor.style.borderRadius = "100%";
//Input colors
let coloresTxt = document.querySelector("#colores-txt")
let colors = document.querySelector("#colors");

colors.addEventListener("change", function () {
  coloresTxt.value = colors.value;
  
});

//funcion de impresion detalles
function miFunc() {
  let cantidad = document.querySelector("#cantidad").value;
  let precio = document.querySelector(".precio").innerHTML;
  let total = parseInt(cantidad) * parseInt(precio);
  let miTotal = document.querySelector("#mitotal");
  let miCantidad = document.querySelector("#micantidad");
  // let color = document.querySelector('#color').value;
  // // let color = document.querySelector("#color");
  // let nameColor =document.querySelector('#color')
  let miColor = document.querySelector("#micolor");
  // let selected = nameColor.options[nameColor.selectedIndex].text;
  // let finalSelected = document.querySelector("#finalselected");

  // color.addEventListener("change", function() {
  //   micolor.style.backgroundColor = nameColor;
  // })

  if (cantidad >= 1) {
    miTotal.innerHTML = "$" + parseInt(total);
    miCantidad.innerHTML = cantidad;
    miColor.style.backgroundColor = coloresTxt.value;

  //   if (color === "#D3D3D3") {
  //     miColor.style.backgroundColor = "#D3D3D3";
  //   } else {
  //     miColor.style.backgroundColor = "#b2b6b8";
  //   }

  //   let selected = nameColor.options[nameColor.selectedIndex].text;
  //   let finalSelected = document.querySelector("#finalselected");
  //   finalSelected.innerHTML = selected;
  } else {
    alert("Por favor ingresar cantidad requerida.");
  }
  console.log(cantidad, precio,coloresTxt);
 };