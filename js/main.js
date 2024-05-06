//Cambio de tema
document.getElementById('cambiarTema').addEventListener('click', function() {
  var contenedorGlobal = document.getElementById('global');
  
  if (contenedorGlobal.classList.contains('tema-claro')) {
      contenedorGlobal.classList.remove('tema-claro');
      contenedorGlobal.classList.add('tema-oscuro');
  } else {
      contenedorGlobal.classList.remove('tema-oscuro');
      contenedorGlobal.classList.add('tema-claro');
  }
});

if(window.location.href.indexOf("index") > -1) {
//Slider
$(".bxslider").bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 1200,
});
}

if(window.location.href.indexOf("index") > -1) {
//Post
let noticias = [
  {
    titulo: "Dos caballos sueltos revolucionan las calles de Londres",
    fecha: moment().format("MMMM Do YYYY"),
    contenido:
      "Las calles de Londres se vieron revolucionadas por la presencia de dos caballos sueltos. Según informa la agencia de noticias Reuters, al menos una persona resultó herida. Alejandra Oraa ofrece más información.",
  },
  {
    titulo: "Una banda de okupas le tomó un restaurante al reconocido chef Gordon Ramsay en Londres",
    fecha: moment().format("MMMM Do YYYY"),
    contenido:
      "Una banda de okupas se apoderó de uno de los restaurantes del chef británico y célebre presentador de televisión Gordon Ramsay. El cocinero devenido en estrella y empresario, que recibió más de una docena de estrellas Michelin por sus propuestas gastronómicas, se enfrenta desde hace días a este grupo que afirma que su objetivo es crear un “espacio comunitario” para todos en una de las zonas más ricas de la ciudad. “Tomen nota: ocupamos esta propiedad y en todo momento hay al menos una persona”, escribieron los delincuentes en la puerta.",
  },
  {
    titulo: "Gran Bretaña necesita urgentemente un plan de defensa coherente y bien financiado",
    fecha: moment().format("MMMM Do YYYY"),
    contenido:
      `"Hemos pasado de un mundo de posguerra a uno de preguerra”, según el secretario de Defensa, Grant Shapps, en un intento de despertar a los Estados miembros de la OTAN en mora para que reconozcan sus responsabilidades, en el 75º aniversario de la fundación de la alianza. Tales exhortaciones no son infructuosas: se estima que este año 18 miembros de la OTAN gastarán el 2 por ciento requerido del PIB en defensa, frente a sólo tres países hace 10 años. Este año, se espera que los miembros de la alianza gasten colectivamente un total de 380.000 millones de dólares en defensa.`,
  },
];

noticias.forEach((item, index) => {
  let noticia = `
    <article class="noticia">
    <h2>${item.titulo}</h2>
    <span class="fecha">${item.fecha}</span>
    <p>${item.contenido}</p>
    <a href="#" class="leerMas">Leer más</a>
</article>`;
$('#articulos').append(noticia)
});
}

//Scroll
$('.subir').click(function(e){
  e.preventDefault()
  $('html, body').animate({
    scrollTop: 0
  }, 500)
  return false
});

//Login Falso
$('#iniciarSeccion form').submit(function(){
  let nombre = $('#nombreForm').val();

  localStorage.setItem("nombreForm", nombre);
});

let nombre = localStorage.getItem("nombreForm");

if(nombre != null && nombre != "undefined") {
  let informacionParrafo = $("#informacion p")
  informacionParrafo.html(`<strong> Bienvenido ${nombre}</strong>`);
  informacionParrafo.append(`<a href="#" id="cerrarSeccion"> <br> Cerrar seccion</a>`)
  $("#iniciarSeccion").hide();
  $("#cerrarSeccion").click(function(){
    localStorage.clear();
    location.reload();
  })
}

//Reloj
if(window.location.href.indexOf("reloj") > -1) {
  setInterval(function(){
    let reloj = moment().format("hh:mm:ss");
    $("#reloj").html(reloj);
  }, 1000)

}

//Validacion 
$(document).ready(function() {
  $("#formContact").validate({
      rules: {
          name: "required",
          lastName: "required",
          email: {
              required: true,
              email: true
          },
          sex: "required",
          date: "required",
          year: {
              required: true,
              number: true
          }
      },
      messages: {
          name: "Por favor, introduce tu nombre",
          lastName: "Por favor, introduce tu apellido",
          email: {
              required: "Por favor, introduce tu correo electrónico",
              email: "Por favor, introduce un correo electrónico válido"
          },
          sex: "Por favor, selecciona tu sexo",
          date: "Por favor, introduce tu fecha de nacimiento",
          year: {
              required: "Por favor, introduce tu edad",
              number: "Por favor, introduce un número válido para la edad"
          }
      },
      submitHandler: function(form) {
          form.submit();
      }
  });
});