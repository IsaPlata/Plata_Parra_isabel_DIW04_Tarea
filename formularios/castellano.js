 

//función para escribir lo introducido

function escribir(){
  //variable que toma el valor del texto introducido del imput con id insertaNombre 
   let loIntroducido = document.getElementById('insertaNombre').value;
  // imprime en documento en el div con id respuesta1 el valor de loIntroducido
  let sinEspacios = loIntroducido.replace(/\s+/g, '')  // tomo lo introducido y elimino espacios
  let cuentaCaracter = sinEspacios.length; //variable con el numero de caracteres de sinEspacios
  let arrayLoIntroducido = loIntroducido.split(" ");//crea un aarry con las palabras introducidas cada palabra es un elemento de éste
//tomando como referencia el documento invocamos el elemento por el id con nombre respuesta1 para introducir la respuesta obtenida
  document.getElementById('respuesta1').innerHTML='El número de carácteres de su nombre sin espacios es: '+ "   "   +  cuentaCaracter + " <br/> "+  
  "NOMBRE : " +  arrayLoIntroducido[0] + " <br/> "+  " Apellido1:  " + arrayLoIntroducido[1] + " <br/> "+  "Apellido2:  " +  arrayLoIntroducido[2]   ;

}


//función  para  calcular edad

function calcularEdad(){
let dia = document.getElementById('insertaDia').value;//variable que toma el valor  introducido en el imput con el id correspondiente
let mes = document.getElementById('insertaMes').value;//variable que toma el valor  introducido en el imput con el id correspondiente
let año = document.getElementById('insertaAño').value;//variable que toma el valor  introducido en el imput con el id correspondiente

let fechaActual = new Date();//variable que crea la fecha actual
let añoActual= fechaActual.getFullYear();//variable que toma el año de la fecha actual
let edad = añoActual - año;// variable que calcula la edad
document.getElementById('edad').innerHTML="Su edad es de   " + edad + "  años" ;//imprime en el documento en el div con id edad el resultado
}

//función para calular el número más alto
function calcularMasAlto(){
let numero1= document.getElementById('numero1').value;//variable que toma el valor  introducido en el imput con el id correspondiente
let numero2= document.getElementById('numero2').value;//variable que toma el valor  introducido en el imput con el id correspondiente
let numero3= document.getElementById('numero3').value;//variable que toma el valor  introducido en el imput con el id correspondiente
let numero4= document.getElementById('numero4').value;//variable que toma el valor  introducido en el imput con el id correspondiente
let numero5= document.getElementById('numero5').value;//variable que toma el valor  introducido en el imput con el id correspondiente
let mayor = Math.max(numero1, numero2, numero3, numero4, numero5);//variable  con resultado más alto de los números introducidos en al variables
alert("el número mayor es  el   " +  mayor);// crea una ventana de alerta con el contenido de la variable mayor
}
let subVentana
//función que abre una nueva ventana con contenido de la pçagina leaflet.html, como nombre mapa Estella y con medida 800 x 600
function abrirVentana(){
   subVentana = window.open("leaflet.html", "mapa Estella", "height=800, width=600");//variable que contiene a el html
}
//función que oculta la nueva venta abierta
function cerrarVentana(){
  subVentana.close(); 
}


