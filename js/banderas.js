var provincias = [
    [
      "Almería",
      "Cádiz",
      "Córdoba",
      "Granada",
      " Huelva",
      "Jaén",
      "Málaga",
      "Sevilla"
    ],
    ["Huesca", "Teruel", "Zaragoza"],
    [
      "El Hierro",
      "Fuerteventura",
      "Gran Canaria",
      "La Gomera",
      "La Palma",
      "Lanzarote",
      "Tenerife"
    ],
    ["Cantabria/Santander"],
    [
      "Avila",
      "Burgos",
      "León",
      "Palencia",
      "Salamanca",
      "Segovia",
      "Soria",
      "Valladolid",
      "Zamora"
    ],
    ["Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"],
    ["Barcelona", "Girona", "Lleida", "Tarragona"],
    ["Ceuta y Melilla"],
    ["Madrid"],
    ["Navarra/Pamplona"],
    ["Alicante", "Castellón", "Valencia"],
    ["Badajoz", "Cáceres"],
    ["La Coruña", "Lugo", "Orense", "Pontevedra"],
    ["Formentera", "Ibiza", "Mallorca", "Menorca"],
    ["La Rioja/Logroño"],
    ["Alava", "Guipúzcoa", "Vizcaya"],
    ["Asturias/Oviedo"],
    ["Murcia"]
  ];

  var autonomias = [
    "Andalucía",
    "Aragón",
    "Canarias",
    "Cantabria",
    "Castilla y León",
    "Castilla la Mancha",
    "Cataluña",
    "Ceuta",
    "Comunidad de Madrid",
    "Comunidad de Navarra",
    "Comunidad Valenciana",
    "Extremadura",
    "Galicia",
    "Islas Baleares",
    "La Rioja",
    "Pais Vasco",
    "Principado de Asturias",
    "Region de Murcia"
  ];
  
var activa= -1
/**********************************************************************************/
 window.addEventListener("load",cargar);
/************************************************************************************* */
function cargar(){
    var destino=document.getElementById("marco1990")
   autonomias.forEach((e,i)=>{
       ponerbandera( destino,e,i);
  
   })
  cambio(document.getElementById("c0"));
 }
  /**********************************************************************************/
function ponerbandera(donde,nombre,posicion){
var a=document.createElement("img");
a.setAttribute("width", "50")
a.setAttribute("heigth", "50")
a.setAttribute("src", "banderas/"+nombre+".gif");
a.setAttribute("id", "c"+posicion);
donde.appendChild(a);
var ori=document.getElementById("c"+posicion);
ori.addEventListener("click",()=>{
    cambio(ori);
})
}

  /**********************************************************************************/
function cambio(origen){
    var a;
var n=parseInt(origen.id.substring(1));
comunidad.innerHTML=autonomias[n];
sprovincias.length=(0);
provincias[n].forEach((e,i)=>{
a=document.createElement("option");
a.value=i;
a.text=e;
sprovincias.appendChild(a);
})
if (activa!=-1)
removeClass(document.getElementById("c"+activa),"poner");
addClass(origen, "poner");
activa=n;
}
  /**********************************************************************************/
  function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className;
  }
  /**********************************************************************************/
  function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else if (hasClass(el, className)) {
      var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
      el.className = el.className.replace(reg, " ");
    }
  }
   