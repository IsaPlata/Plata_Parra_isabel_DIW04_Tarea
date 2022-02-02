debugger // punto desde donde inicio la depuración de código
let idioma1="castellano";//variable global 
let idioma2="euskera";//variable global
var idiomaElegido =leerCookie(); //variable global con valor de la función leerCookie

sabersihaycookie();//llamo a la función sabersihaycookie

//función para crear cookie  introduciendo  parámetro  con valor  idioma elegido
function crearCookie(idiomaElegido) {
    let fechaExpiracion = new Date(2023,0,0,25,00).toUTCString() ;// variable local para fecha d caducidad
    //variable local para albergar las cookies del docuento
  miCookie= document.cookie="idioma=" + encodeURIComponent(idiomaElegido) + "; expires=" + fechaExpiracion + ";path=/"
 //si idiomaElegido es vacio, no hacer nada
   if (idiomaElegido==""){
      }else{//por el contrario 
     alert("has elejido " + idiomaElegido);//ventana de alerta con mensaje de idioma elegido
     location.assign(idiomaElegido + ".html"); //redireccion al documento html de idioma elegido
   return miCookie ; //retorna las cookies que tiene el documento
}
}
//funcion que lee las cookies del documento y retorna el valor de la primera cookie 

    function leerCookie() {
      
        var lista = document.cookie.split(";"); //crea una lista con las cookies separadas por ;
        for (i in lista) { //bucle for en busca de  dato de variable idiomaElegido
            var busca = lista[i].search(idiomaElegido);
            if (busca > -1) {idiomaElegido=lista[i]}
            }
        var igual = idiomaElegido.indexOf("=");/*variable  con dato  primer índice en el que se puede encontrar
         un elemento dado en el array, ó retorna -1 si el elemento no esta presente.*/
        var valor1 = idiomaElegido.substring(igual+1); //variable con dato del lugar de idiomaelegido en  variable anterior mas 1
        return valor1; 
        }


/*función que verifica si existe la cookie o no */
function sabersihaycookie(){
let micookies=document.cookie;//variable que guarda las cookies existentes
//si el valor de las cookies es ""
   if (micookies == ""){
        alert( "elije idioma"); // sale una ventana de alerta para pedir que elija un idioma
       crearCookie(idiomaElegido) ; // llamo a la función crearkooki con parámetro idiomaElegido
       return leerCookie(); /*retorna el return de la función leerCookie que es valor1
       el cual toma el valor de la cookie idioma */
       
    }else { //por el contrario si mi cookie no es vacía
        if (idiomaElegido==idioma1){ // si idiomaElegido es igual a idioma1
           location.assign("castellano.html"); // redirige a la página castellano.html
            return leerCookie(); // retorna el valor de leerCookie
            }else{ //por el contrario

                if (idiomaElegido==idioma2){ // si idiomaElegido es igual a idioma2
                  location.assign("euskera.html");// redirige a la página euskera.html
                return leerCookie(); // retorna el valor de la función leerCookie

                                           } 
                 }
          }
                         }


