const $contenedor = document.getElementById("contenedor-principal")


function cursos(){
    $contenedor.innerHTML = ``;
    
    const container = document.createElement("div")
    container.classList.add("container")
    //+++++++++++++++++++++++
    let button = [
    {titulo: "SANACIÓN CRÍSTICA TALLER", href: "#SANACIÓN CRÍSTICA TALLER"},
    {titulo: "Munay-ki", href: "#Munay-ki"},
    {titulo: "REGISTROS AKASHICOS", href: "#REGISTROS AKASHICOS"},
    {titulo: "Segundo Nivel Registros Akashicos", href: "#Segundo Nivel Registros Akashicos"},
    {titulo: "MAESTRÍA EN LECTURAS AKASHICAS", href: "#MAESTRÍA EN LECTURAS AKASHICAS"},
    {titulo: "TAROT", href: "#TAROT"},
    {titulo: "TAMEANA HEALING", href: "#TAMEANA HEALING"},
    {titulo: "SANACIÓN DEL ÚTERO", href: "#SANACIÓN-DEL-ÚTERO"},
    {titulo: "PÉNDULO HEBREO", href: "#PÉNDULO HEBREO"},
    {titulo: "AMADEUS", href: "#AMADEUS"},
    {titulo: "SANACIÓN BENEDICTINA", href: "#SANACIÓN BENEDICTINA"},
    {titulo: "FORMACIÓN EN TERAPIA DE VIDAS PASADAS", href: "#FORMACIÓN EN TERAPIA DE VIDAS PASADAS"},
    {titulo: "SÍMBOLOS ARCANGELICOS", href: "#ÍMBOLOS ARCANGELICOS"},
    {titulo: "TALLER DE SAHUMO", href: "#TALLER DE SAHUMO"},
    {titulo: "TALLER DE BRUMAS", href: "#TALLER DE BRUMAS"},
    {titulo: "INSTRUCTOR EN MEDITACIÓN", href: "#INSTRUCTOR EN MEDITACIÓN"},
    {titulo: "TALLER DE MESA CUÁNTICA", href: "#TALLER DE MESA CUÁNTICA"},
];

const $divDropdown = document.createElement("div")
    
$divDropdown.classList.add("d-flex")
$divDropdown.classList.add("justify-content-center")
$divDropdown.classList.add("my-3")
      

    $btnDropdown = document.createElement("button"),
    $ul = document.createElement("ul")
    let   namebtn = document.createTextNode("/cursos")
//+++++++++++++++++
$divDropdown.classList.add("dropdown")
    //+++++++++++++++++btn++++++++++++++++++++++
    $btnDropdown.classList.add("btn")
    $btnDropdown.classList.add("btn-primary")
    $btnDropdown.classList.add("dropdown-toggle")
    $btnDropdown.setAttribute("type", "button")
    $btnDropdown.setAttribute("id", "ropdownMenuButton1")
    $btnDropdown.setAttribute("data-bs-toggle", "dropdown")
    $btnDropdown.setAttribute("aria-expanded", "false")
    $btnDropdown.appendChild(namebtn)

    $ul.classList.add("dropdown-menu")
    $ul.setAttribute("aria-labelledby", "dropdownMenuButton1" )

    $divDropdown.appendChild($btnDropdown)
   $divDropdown.appendChild($ul)
  container.appendChild($divDropdown)
   $contenedor.appendChild(container)
button.forEach((element)=>{
  const  $li = document.createElement("li"),
    $a = document.createElement("a")
//+++++++++++++++++++++++++++++++++++
let titulo = document.createTextNode(element.titulo)
//++++++++++++++++++++++++++++++++
    $a.setAttribute("href" ,element.href)
    $a.classList.add("dropdown-item")
    $a.appendChild(titulo)
    $li.appendChild($a)
    $ul.appendChild($li)
})





  const cursos = [
    {titulo: "SANACIÓN CRÍSTICA TALLER", 
    img: "./img-proyectoRo/sanacion cristica .jpg", 
    description: "Iniciación y utilización de símbolos crísticos para la autosanación y a otros seres que así lo dispongan.", 
    subTitulo : "objetivo", 
    objetivo: "Formar sanadores que co-creen con su cristo desarrollando consciencia amorosa. Programa:", 
    subTitulo2: "introduccion", 
    introduccion: "El cristo y la energía Crística. 5 niveles de símbolos. Resumen de la era de acuario. Meditación. Iniciación. ",
    duracion: "Dos encuentros de 3hs cada uno.",
    id:"SANACIÓN CRÍSTICA TALLER",
     BTN: "Los precios se consultan via whatsapp."},
     //munay-ki
    {titulo: "MUNAY KI", 
    img: "./img-proyectoRo/munay-ki.jpg",
     description: "Basado en las prácticas iniciáticas de los chamanes de los Andes y el Amazonas, los Munay-Ki son nueve ritos de iniciación para convertirse en una persona de sabiduría y , Son transmisiones energéticas que curan las heridas del pasado: la herencia genética y kármica con la que nacemos. Transforman y mejoran el campo de energía luminosa y vuelven a informar nuestro ADN.", 
     subTitulo : "beneficios", 
     objetivo: "Comenzarás a sentir la plentid interior, la sensación de haber trascendido miles de vidas para por fin poder disfrutar el presente. Los ritos se encargarán de encender tu propia luz interior para que puedas ver con luz propia a través de unos renovados ojos.", 
     subTitulo2: "niveles", 
     introduccion: `Ritos de Munay ki (level-1)
Ritos de Munay ki (level-2)
Ritos de Munay ki (level-3)`,
     duracion: "Se entregan los 9 ritos en 3 encuentros intensivos.", 
     id:"Munay-ki",
     BTN: "Los precios se consultan via whatsapp."},
    //first level
    {titulo: "REGISTROS AKASHICOS", 
    img: "./img-proyectoRo/ragistorsss.jpg", 
    description: "Los registros akashicos son un espacio multidimensional donde se hallan todas las experiencias del alma, una biblioteca cósmica llena de información y un espacio de sanación", 
    subTitulo : "primer nivel", 
    objetivo: "en el primer nivel aprenderás a abrir tus propios registros akáshicos habilitando la conexión tus guías y sus mensajes. Duración 4 hs, luego de esa formación puedes participar de una practica.", 
    subTitulo2: "introduccion", 
    introduccion: "Significado de registros akáshicos. Planos y campos vibratorios. Flor de la vida. Utilización de los chakras. Diferencia entre registros y regresiones a vidas pasadas. Maestros ascendidos. Ejercicios de limpieza y purificación. Protocolo para abrir los registros akáshicos. Guia para la consulta. Guia de preguntas para la práctica Descubrir información en los órganos, seres vivos y lugares físicos. Diario de registros. Oraciones.",
    duracion: "",
    id:"REGISTROS AKASHICOS", 
    BTN: "Los precios se consultan via whatsapp."},
   //segundo akashicos
    {titulo: "Segundo Nivel Registros Akashicos", 
    img:"./img-proyectoRo/blog-registros-akashicos.png", 
    description: "En este nivel aprenderemos a abrir registros de otros y cómo llevar a cabo una sesión de lectura a terceros. Considero que es necesario entre un nivel y otro tener práctica antes de iniciar a terceros. Se realizarán encuentros para practicar lecturas. Encuentro de 4 hs.", 
    subTitulo : "", 
    objetivo: "", 
    subTitulo2: "contenido", 
    introduccion: "Introducción al 2a nivel. Preguntas y respuestas. 7 cuerpos. Jerarquías divinas. Karma dharma. Junta kármica. Liberación con puntos de gracia. Co-creación. Sesión de lectura como es su desarrollo.Guia de lectura. Consultas. Protección. Oraciones. Protocolo para la apertura. Fórmulas. Sanación del clan decretos. Ho'oponopono. Meditaciones.",
    duracion: "",
    id:"Segundo Nivel Registros Akashicos", 
    BTN: "Los precios se consultan via whatsapp."},
    //maetria akashicos
    {titulo: "MAESTRÍA EN LECTURAS AKASHICAS", 
    img:"./img-proyectoRo/Maestria-akashicos.jpg", 
    description: "", 
    subTitulo : "objetivos", 
    objetivo: "La formación de seres humanos amorosos que se comprometan a cuidar y continuar respetuosamente con el encuentro angélico, y la recepción del conocimiento akáshico para transmitir a otros seres en continua evolución. Este nivel está destinado a personas que han cursado los 2 anteriores niveles de lecturas akashicas y deseen formar a otros seres en este camino.", 
    subTitulo2: "contenido", 
    introduccion: "Linaje ancestral y sanación del ADN (con memoria celular). Activación de la glándula pineal. Rol del terapeuta. Pautas de atención. 7 leyes espirituales. Jerarquías. Llama violeta. Sanación del útero y memorias femeninas. Remoción de implantes. Votos karmicos. Liberación del clan. Herramientas de protección. Oraciones y novenas.Sanación angélica con símbolos de Miguel Arcangel. Merkaba. Sólidos platónicos. Plus: Material audiovisual y de lectura recomendado.",
    duracion: "Prácticas akáshicas en cada encuentro. Meditaciones de activación. Duración: 6 meses, clase mensual de 3 hs.", 
    id:"MAESTRÍA EN LECTURAS AKASHICAS",
    BTN: "Los precios se consultan via whatsapp."},
    //aqualed
    {titulo: "AQUALEAD",
     img:"./img-proyectoRo/Aqualed.jpg", 
     description: "Es una energía relacionada con los seres elementales y de la naturaleza (Elfos, hadas, etc..). Trabaja sobre el agua y su propósito es de sanar y limpiar, asi se puede sanar la Tierra y todos los seres vivos. La energía Aqualead trabaja de manera muy poderosa en el cuerpo humano.", 
     subTitulo : "objetivos", 
     objetivo: "En este taller aprenderás a usar sus símbolos para tu sanación y la de otros. El intercambio es a voluntad ya que esta técnica no se cobra.", 
     subTitulo2: "Niveles", 
     introduccion: `AQUALEAD (level-1)
AQUALEAD (level-2)
AQUALEAD (Maestria)`,
     duracion: "",
     id:"AQUALEAD", 
     BTN: "Los precios se consultan via whatsapp."},
   //tarot
    {titulo: "TAROT", 
    img: "./img-proyectoRo/tarot-2.jpg", 
    description: "Estudiaremos los Arcanos Mayores, Arcanos menores (78 cartas en total) e iremos descubriendo sus misterios y significados, diversos esquemas de lecturas, prácticas todas las clases e interpretación, meditaciones, compartiremos información y vídeos, formas de llevar una consulta, mirada evolutiva versus predictiva, preparación del espacio y de nosotros, acompañamiento mediante el grupo.", 
    subTitulo : "", 
    objetivo: "", 
    subTitulo2: "", 
    introduccion: "",
    duracion: `* Duración: 6 meses.
                * Clases semanales.`,
                id:"TAROT", 
    BTN: "Los precios se consultan via whatsapp."},
    //teamana
    {titulo: "TAMEANA HEALING", 
    img: "./img-proyectoRo/teamana.jpg", 
    description: "La sanación energética con tameana es realizada con símbolos de luz pleyadianos y cristales de cuarzo, eleva la frecuencia vibratoria limpiando desbloqueos y patrones cristalizados, ayuda a armonizar. Aprenderemos esta técnica, su origen, símbolos y practicaremos con ellos.", 
    subTitulo : "", 
    objetivo: "", 
    subTitulo2: "", 
    introduccion: "veremos diferentes practicas.",
    duracion: "* 3 encuentros",
    id:"SANACIÓN-DEL-ÚTERO", 
    BTN: "Los precios se consultan via whatsapp."},
    //sanacion de utero
    {titulo: "SANACIÓN DEL ÚTERO", 
    img: "./img-proyectoRo/sanaccion de utero.jpg", 
    description: "La sanación del útero es una ceremonia ancestral para limpiar energéticamente las memorias del linaje femenino. Ayuda a conectar con el linaje y su poder. En este taller veremos sanación con símbolos pleyadianos y el rito del útero de de forma práctica.", 
    subTitulo : "", 
    objetivo: "", 
    subTitulo2: "", 
    introduccion: "",
    duracion: "* 1 encuentro de 3hs.",
    id:"SANACIÓN DEL ÚTERO", 
    BTN: "Los precios se consultan via whatsapp."},
    //pendulo hebreo
    {titulo: "PÉNDULO HEBREO", 
    img: "./img-proyectoRo/pendulo hebreo.jpg", 
    description: "En este taller aprenderás a utilizar el péndulo hebreo para diagnosticar, limpiar las energías negativas en el campo electromagnético e irradiar las energías que necesitamos sanando y armonizando nuestro ser.", 
    subTitulo : "¿Qué es el péndulo hebreo?", 
    objetivo: "Para qué sirve. Uso de etiquetas, diagnóstico y emisión de energía. Limpieza con muerdago. Procedimiento de la sesión. Tratamiento presencial y a distancia. Autotratamiento. Ayuda de esencias florales post-sesión. Protección personal y ambiental. Oraciones y bendiciones. Medición de larvas, miasmas, magias, chakras y energía. purificación.", 
    subTitulo2: "introduccion", 
    introduccion: " Se entrega manual y péndulo.",
    duracion: "",
    id:"PÉNDULO HEBREO", 
    BTN: "Los precios se consultan via whatsapp."},
    //amadeus
    {titulo: "AMADEUS", 
    img: "./img-proyectoRo/metodo-sanacion-amadeus.jpg", 
    description: "Es una sanación mediante símbolos entregada a un curandero por aborígenes del Amazonas, sabiduría que data de hace 6.000 años.", 
    subTitulo : "¿Para que sirve?", 
    objetivo: "Sirve para mejorar estados de salud, limpiar y sanar personas, animales y la madre tierra.", 
    subTitulo2: "objetivos", 
    introduccion: "Se enseña su historia, símbolos y su utilización y se hace la iniciación correspondiente.", 
    duracion: "* 2 encuentros intensivos.",
    id:"AMADEUS",
    BTN: "Los precios se consultan via whatsapp."},
    //benedictiana
    {titulo: "SANACIÓN BENEDICTINA", 
    img: "./img-proyectoRo/sanacion benedictiana.jpg", 
    description: "Sagrada herramienta de Protección y Limpieza energética en el hogar, sanación a otras personas y autosanación. Se basa en la imposición de manos, el poder de la oración y la energía santa. Curación indicada para enfermedades y disturbios de todo tipo.", 
    subTitulo : "", 
    objetivo: "", 
    subTitulo2: "", 
    introduccion: "", 
    duracion: "* 1 encuentros intensivos.",
    id:"SANACIÓN BENEDICTINA",
    BTN: "Los precios se consultan via whatsapp."},
    //vidas pasadas
    {titulo: "FORMACIÓN EN TERAPIA DE VIDAS PASADAS", 
    img: "./img-proyectoRo/vidad pasadas.jpg", 
    description: `Camino de sanación donde vamos al origen del bloqueo actual, desanudando la memoria del dolor y trauma en la infancia o en vidas pasadas que bloquean el fluir de nuestra vida. "Aprendemos con el método de Dr.Cabouli" .`, 
    subTitulo : "", 
    objetivo: "", 
    subTitulo2: "", 
    introduccion: "", 
    duracion:"* 13 meses",
    id:"FORMACIÓN EN TERAPIA DE VIDAS PASADAS",
    BTN: "Los precios se consultan via whatsapp."},
    //Simbolos arcangelicos
    {titulo: "SÍMBOLOS ARCANGELICOS",
     img: "./img-proyectoRo/sibolos ar.jpg",
      description: "Sistema de sanación fuerte, para armonizar personas y lugares. Símbolos sagrados de Miguel y Rafael, usos, mantras, limpieza.", 
      subTitulo : "", 
      objetivo: "", 
      subTitulo2: "", 
      introduccion: "", 
      duracion: "* 1 encuentro",
      id:"SÍMBOLOS ARCANGELICOS",
      BTN: "Los precios se consultan via whatsapp."},
    //taller se sahumo
    {titulo: "TALLER DE SAHUMO", 
    img: "./img-proyectoRo/sahuomo.jpg", 
    description: `Es un taller de limpieza y protección , donde se brindará distintas técnicas que sirven para la limpieza del campo energético y limpieza física de lugares y casas, ámbito de trabajo.`,
    subTitulo : "objetivos", 
    objetivo: `La intención es lograr en la persona una gran armonía y equilibrio, logrando así que la persona, se sienta liberada de cargas, ataduras , que no enferme y que su salud sea óptima, vivenciando una gran armonía en su universo personal.`, 
    subTitulo2: "contenido",
    introduccion: "Vemos qué es sahumar, cómo utilizar esta herramienta, significado de cada planta y resina, preparación de agua florida. ",
    duracion: "*1 encuentro",
    id:"TALLER DE SAHUMO",
    BTN: "Los precios se consultan via whatsapp."},
   //brumas
    {titulo: "TALLER DE BRUMAS", 
    img: "./img-proyectoRo/auricos.jpg",
     description: "En este taller aprenderás a crear tus propias brumas para el aura, usando la creatividad y varias opciones de fórmulas.", 
     subTitulo : "objetivos",
      objetivo: `Te permitira introducirte en el mundo de la aromaterapia y plantas. Ideal para emprendedoras y amantes de los saberes mágicos.`, 
       
      subTitulo2: "introduccion", 
      introduccion: "Crearemos tinturas madres para las brumas de limpieza, protección, abundancia, amor y más, aprendiendo los usos energéticos de cada planta, aceites esenciales recomendados, también recomendaciones de terapia floral y que materiales necesitamos.", 
      duracion: "*1 encuentro",
      id:"",
      BTN: "Los precios se consultan via whatsapp."},
    //meditaccion
    {titulo: "INSTRUCTOR EN MEDITACIÓN", 
    img: "./img-proyectoRo/111.JPG", 
    description: `Se recorren herramientas de meditación para sostener un estado de armonía interior y exterior.`,             
    subTitulo : "objetivos", 
    objetivo: "", 
     subTitulo2: "introduccion", 
    introduccion: `1- Introducción .2- Significado .3-Diferencias entre visualizar y meditar.4-Formas de respiración5- 7 chakras. 6- 7 cuerpos.7- Protecciones.8 -Decreto y mantras.9-Irradiación uso de energía.10-Clases`, 
    duracion: "*1 encuentro",
    id:"INSTRUCTOR EN MEDITACIÓN",
    BTN: "Los precios se consultan via whatsapp."},
    //mesa cuantica            
    {titulo: "TALLER DE MESA CUÁNTICA", 
    img: "./img-proyectoRo/mesa cuantica.jpg", 
    description: `Es un tablero que reúne los símbolos de las energías del hombre, la tierra y el
                            cosmos. Se crea conexión con la supraconciencia y desde allí se activan
                            comandos nuevos para nuestra realidad. Utilizando técnicas de  metafísica, limpieza
                            energética, conocimiento, saltos cuánticos, programación de cristales, enviar
                            oraciones, usar los 12 rayos sutiles, conciencia colectiva y más. Llegando esta
                            energía a influir en cada cuerpo (físico, mental, emocional y espiritual) ayudando
                            a modificar patrones negativos en proyectos, personas y más.`, 
    subTitulo : "objetivos", 
    objetivo: "", 
    subTitulo2: "", 
    introduccion: "* 1 encuentro intensivo.", 
    id:"TALLER DE MESA CUÁNTICA",
    BTN: "Los precios se consultan via whatsapp."},
    
    

  ];

 
  let $divImportant = document.createElement("div"),
        $h3Important = document.createElement("h3"),
        $pImportant = document.createElement("p")
  
        $divImportant.classList.add("container")
        $divImportant.classList.add("my-2")
        $divImportant.classList.add("shadow")
        $divImportant.classList.add("rounded")
        $divImportant.classList.add("bg-body")
        $divImportant.classList.add("mx-auto")
        $divImportant.classList.add("border")
        $divImportant.classList.add("border-danger")
  
        $h3Important.classList.add("text-center")
  
        $pImportant.classList.add("text-center")
        let texth3 = document.createTextNode("¡importante!")
        let parrafoImportant = document.createTextNode(`Todos los cursos y talleres se dictan de forma online e incluyen material teórico en pdf. 
        Los talleres se abona una seña del 50% para confirmar el cupo, sin excepciones.
        En caso de no poder asistir ese día se reprogramara. Las formaciones se abonan mensualmente.`)
    $h3Important.appendChild(texth3)
        $pImportant.appendChild(parrafoImportant)
  
        $divImportant.appendChild($h3Important)
        $divImportant.appendChild($pImportant)
  
        $contenedor.appendChild($divImportant)
 
 
  cursos.forEach((element)=>{
    let time = setTimeout(()=>{
    let $divCardPrincipal = document.createElement("div"),
    $divRow = document.createElement("div"),
    imgCard = document.createElement("img"),
    $divCold = document.createElement("div"),
    $divCardBody = document.createElement("div"),
    $divbody = document.createElement("div"),
    $h4 = document.createElement("h4"),
    $h4SubTitulo = document.createElement("h4"),
    $h4Subtitulo2 = document.createElement("h4"),
    $p1 = document.createElement("p"),
    $p2 = document.createElement("p"),
    $p3 = document.createElement("p")

    $divCardPrincipal.classList.add("card")
    $divCardPrincipal.classList.add("mb-3")
    $divRow.classList.add("row")
    $divRow.classList.add("g-0")
    imgCard.classList.add("img-fluid")
    imgCard.classList.add("heiImg")
    imgCard.classList.add("rounded-start")
    $divCold.classList.add("col-md-4")
    $divCardBody.classList.add("col-md-8")
    $divbody.classList.add("card-body")
    $divbody.classList.add("justify-content-center")
    $h4.classList.add("card-title")
    $p1.classList.add("card-text")
    $p2.classList.add("card-text")
    $h4.classList.add("text-center")
    $h4SubTitulo.classList.add("text-center")
    $h4Subtitulo2.classList.add("text-center")
    $h4.classList.add("my-2")
    $h4SubTitulo.classList.add("my-2")
    $h4Subtitulo2.classList.add("my-2")
//setAttribute
    $divCardPrincipal.setAttribute("id", element.id)
    imgCard.setAttribute("src", element.img)

    let title = document.createTextNode(element.titulo)
    let descrip = document.createTextNode(element.description)
    let subTitulo = document.createTextNode(element.subTitulo)
    let subtitulo2 = document.createTextNode(element.subTitulo2)
    let p1 = document.createTextNode(element.objetivo)
    let p2 = document.createTextNode(element.introduccion)

    $h4.appendChild(title)
    $h4SubTitulo.appendChild(subTitulo)
    $h4Subtitulo2.appendChild(subtitulo2)
    $p1.appendChild(p1)
    $p2.appendChild(p2)
    $p3.appendChild(descrip)

//primera parte
    $divbody.appendChild($h4)
    $divbody.appendChild($p3)
    //objetivo
    $divbody.appendChild($h4SubTitulo)
    $divbody.appendChild(p1)
    //descripccion
    $divbody.appendChild($h4Subtitulo2)
    $divbody.appendChild(p2)
    $divCardBody.appendChild($divbody)
//segunda parte
    $divCold.appendChild(imgCard)
    
    $divRow.appendChild($divCold)
    $divRow.appendChild($divCardBody)
//tercera parte principal container

$divCardPrincipal.appendChild($divRow)
//$divCardPrincipal.appendChild($divCardBody)
container.appendChild($divCardPrincipal)

  
  $contenedor.appendChild(container)
},500)
})

    
}
function Inicio(){
    $contenedor.innerHTML = ``;

    let carga = setTimeout(()=>{

      $contenedor.innerHTML = `
      <div class="container-md justify-content-evenly shadow rounded bg-body mt-2">
      <div class="row">
        <div class="col-12 col-md-4">
          <img src="./img/RO.jpg" class="my-1 img-fluid rounded" alt="">
        </div>
        <div class="col-12 col-md-7 mt-5 ">
          <h3 class="text-center">BIO</h3>
          <div class="d-flex align-items-center position-bio p-2 ">
            
            <p class="text-center ">Roxana inicia el camino espiritual interesándose desde jovén, 
              desde el año 88’ en temáticas esotéricas, metafísica, control mental, filosofías budistas,
               libros de desarrollo personal y seminarios.  En 2010 comienza a estudiar “formalmente” se
                 sumerge en formaciones de meditación, registros akashicos, chamanismo, constelaciones familiares, 
                 terapia de vidas pasadas sanación energética, tarot rider y egipcio, tinturas madre, 
                 terapia floral y más, abarcando los intereses que resonaban en su transitar. Desde entonces
                  se dedica a transmitir constantemente sus experiencias, la sanación del ser,
                   acompañando a otros a desarrollarse y recordar su conexión con lo divino. </p>
          </div>
        </div>
      </div>
    </div>
   <div class=" container-md-8  justify-content-evenly mb-4 " id="Cursos">
    <h1 class="text-center m-3">/CURSOS</h1>
      <div class="row">
        <div class="row justify-content-evenly">
          <div class="col-10 col-md-5 p-1 mx-1 ">
            <div class="row shadow  bg-body rounded ">
              <div class="col-12 col-md-4">
                <img src="./img-proyectoRo/munay-ki.jpg" class=" mt-1 my-1 rounded d-block w-100" height="200px" alt="">
              </div>
            <div class="col-12 col-md-8  shadow  bg-body rounded ">
              <h5 class="text-center mb-2">MUNAY KI 
                </h5>
              <p class="text-center">CENTRO HOLÍSTICO 
                Munay Ki en idioma quechua significa “ser tú mismo” o “ser amor” fue elegido
                por ser un sistema desarrollado por los Incas de autoconocimiento y
                transformación.</p>
              
              <div class="row d-flex  align-items-end">
                <div class="col-7">
                  
                </div>
                <div class="col-5 justify-content-end align-items-end">
                 <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
  info
  </button>

<!-- Modal -->
<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">cursos</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        para saber mas, contactenos via whatsapp
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
                </div>
             </div>
              </div>
            </div>
          </div>
          
          <div class="col-10 col-md-5 mx-1 p-1 ">
            <div class="row shadow  bg-body rounded ">
              <div class="col-12 col-md-4">
                <img src="./img-proyectoRo/Maestria-akashicos.jpg" class=" mt-1 my-1 rounded d-block w-100" height="200px" alt="">
              </div>
            <div class="col-12 col-md-8  shadow  bg-body rounded ">
              <h5 class="text-center">REGISTROS AKASHICOS</h5>
              <p class="text-center ">Los registros akashicos son un espacio multidimensional donde se hallan todas
                las experiencias del alma, una biblioteca cósmica llena de información y un
                espacio de sanación
                </p> 
              <div class="row d-flex  align-items-end">
                <div class="col-7">
                 
                </div>
                <div class="col-5">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    info
                    </button>
                  
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">cursos</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          para saber mas, contactenos via whatsapp
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
              </div>
            </div>
          </div>
        
      </div>
      
      <div class="row justify-content-evenly">
        <div class="col-10 col-md-5 p-1 mx-1 ">
          <div class="row shadow  bg-body rounded ">
            <div class="col-12 col-md-4">
              <img src="./img-proyectoRo/sibolos ar.jpg" class=" mt-1 my-1 rounded d-block w-100" height="200px" alt="">
            </div>
          <div class="col-12 col-md-8  shadow  bg-body rounded ">
            <h5 class="text-center  ">SÍMBOLOS ARCANGELICOS</h5>
            <p class="text-center  ">
                Sistema de sanación fuerte, para armonizar personas y lugares. Símbolos
                sagrados de Miguel y Rafael, usos, mantras, limpieza.

              </p>
            
            <div class="row justify-content-evenly mt-2">
              <div class="col-12 col-md-7">
              
              </div>
              <div class="col-5">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  info
                  </button>
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">cursos</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        para saber mas, contactenos via whatsapp
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
            </div>
          </div>
        </div>
        
        <div class="col-10 col-md-5  p-1 ">
          <div class="row shadow  bg-body rounded ">
            <div class="col-12 col-md-4">
              <img src="./img-proyectoRo/tarot-2.jpg" class=" mt-1 my-1 rounded d-block w-100" height="200px" alt="">
            </div>
          <div class="col-12 col-md-8 shadow  bg-body rounded ">
            <h5 class="text-center">TAROT </h5>
            <p>Estudiaremos los Arcanos Mayores, Arcanos menores (78 cartas en total) e
              iremos descubriendo sus misterios y significados</p>
            <div class="row justify-content-evenly">
              <div class="col-12 col-md-7">
                
              </div>
              <div class="col-5">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  info
                  </button>
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">cursos</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        para saber mas, contactenos via whatsapp
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
            </div>
          </div>
        </div>
      
    </div>
    <!---->
  </div>
   </div>
   <!--termina el container-->
  </div>`;
    },500)
    

    
}

function contacto(){
    $contenedor.innerHTML = ``;
    $contenedor.innerHTML = `
    
    <div class="container shadow  bg-white rounded  my-5 p-5">
    <h1 class="text-center mb-5">/Contactos</h1>
    <div class="row shadow  bg-white rounded p-2 border border-success">
        <div class="ccol-12 col-md-6 ">
           <h1 class="text-center text-success">Whatsapp</h1>
        </div>
        <div class="col-12 col-md-6  my-auto">
            <h5 class="text-center">11-57530374 o 11-38302746</h5>
            
        </div>
    </div>
    <div class="row mt-5  shadow  bg-white rounded p-2 border border-danger">
        <div class="col-12 col-md-6  ">
            <h1 class="text-center text-danger ">Gmail</h1>
        </div>
        <div class="col-12 col-md-6  my-auto">
            <h5 class="text-center">aalquimiapura@gmail.com</h5>
        </div>
    </div>
</div>`;
}

function catalogo(){
  $contenedor.innerHTML = ``;
  
  let productos = [
    {producto: "botella", precio: "2.800", descriptions : "la bottle is very bog and confortable" ,img : "./img-proyectoRo/Maestria-akashicos.jpg" , alert1 : "prueba"},
    {producto: "termo", precio: "6.700", descriptions : "la bottle is very bog and confortable",img : "./img-proyectoRo/munay-ki.jpg"},
    {producto: "mate", precio: "1.200", descriptions : "la bottle is very bog and confortable",img : "./img-proyectoRo/sibolos ar.jpg"},
    {producto: "cama", precio: "20.350", descriptions : "la bottle is very bog and confortable",img : "./img-proyectoRo/tarot-2.jpg"},
    {producto: "puerta", precio: "35.000", descriptions : "la bottle is very bog and confortable",img : "./img-proyectoRo/sibolos ar.jpg"},
    {producto: "ventana", precio: "15.000", descriptions : "la bottle is very bog and confortable",img : "./img-proyectoRo/Maestria-akashicos.jpg"},
    {producto: "botella", precio: "2.800", descriptions : "la bottle is very bog and confortable" ,img : "./img-proyectoRo/Maestria-akashicos.jpg"},
    {producto: "termo", precio: "6.700", descriptions : "la bottle is very bog and confortable",img : "./img-proyectoRo/munay-ki.jpg"},
    {producto: "mate", precio: "1.200", descriptions : "la bottle is very bog and confortable",img : "./img-proyectoRo/sibolos ar.jpg"},
    {producto: "cama", precio: "20.350", descriptions : "la bottle is very bog and confortable",img : "./img-proyectoRo/tarot-2.jpg"},
    {producto: "puerta", precio: "35.000", descriptions : "la bottle is very bog and confortable",img : "./img-proyectoRo/sibolos ar.jpg"},
    {producto: "ventana", precio: "15.000", descriptions : "la bottle is very bog and confortable",img : "./img-proyectoRo/Maestria-akashicos.jpg"}
] 
const div = document.createElement("div")
productos.forEach((element)=>{

const $div = document.createElement("div"),
 $img = document.createElement("img"),
 $div2 = document.createElement("div"),
 $h5 = document.createElement("h5"),
 $p = document.createElement("p")
 //$a = document.createElement("a")

div.classList.add("d-flex")
div.classList.add("row")
div.classList.add("justify-content-evenly")
$div.classList.add("card")
$div.classList.add("medida")
$div.classList.add("my-3")
$img.setAttribute("src", element.img)
$div2.classList.add("card-body")
$h5.classList.add("card-title")
$p.classList.add("card-text")
//$a.classList.add("btn")
//$a.classList.add("btn-primary")
    
//$a.setAttribute("href", "#")

let title = document.createTextNode(element.producto);
let parrafo = document.createTextNode(element.descriptions);
let link = document.createTextNode(element.precio);

$h5.appendChild(title);
$p.appendChild(parrafo);
//$a.appendChild(link);

$div2.appendChild($h5)
$div2.appendChild($p)
//$div2.appendChild($a)

$div.appendChild($img)
$div.appendChild($div2)

div.appendChild($div)
})
let $divImportant = document.createElement("div"),
$h3Important = document.createElement("h3"),
$pImportant = document.createElement("p")

$divImportant.classList.add("container")
$divImportant.classList.add("my-2")
$divImportant.classList.add("shadow")
$divImportant.classList.add("rounded")
$divImportant.classList.add("bg-body")
$divImportant.classList.add("mx-auto")
$divImportant.classList.add("border")
$divImportant.classList.add("border-success")

$h3Important.classList.add("text-center")

$pImportant.classList.add("text-center")
let texth3 = document.createTextNode("¡importante!")
let parrafoImportant = document.createTextNode(`todas las compras y el envio se realizan via whatsapp`)
$h3Important.appendChild(texth3)
$pImportant.appendChild(parrafoImportant)

$divImportant.appendChild($h3Important)
$divImportant.appendChild($pImportant)

$contenedor.appendChild($divImportant)
//carga la tarjeta
$contenedor.appendChild(div) 
}