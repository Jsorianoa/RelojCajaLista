//Funciones para hacer el reloj
const updateClock = () => {
  let dt = new Date();
  let dia = dt.getDay(),
    mes = dt.getMonth(),
    dnum = dt.getDate(),
    año = dt.getFullYear(),
    hor = dt.getHours(),
    min = dt.getMinutes(),
    seg = dt.getSeconds(),
    ap = "AM";
    console.log(dia);
  if (hor == 0) {
    hor = 12;
  }
  if (hor > 12) {
    hor = hor - 12;
    ap = "pm";
  }
  if (dnum < 10) {
    dnum = "0" + dnum;
  }
  if (hor < 10) {
    hor = "0" + hor;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (seg < 10) {
    seg = "0" + seg;
  }
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let diasSem = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  let ids = [
    "dia",
    "mes",
    "dianum",
    "año",
    "hora",
    "minuto",
    "segundo",
    "ampm",
  ];
  let valores = [diasSem[dia-1], meses[mes], dnum, año, hor, min, seg, ap];

  for (let j = 0; j < ids.length; j++)
    document.getElementById(ids[j]).firstChild.nodeValue = valores[j];
};
const initClock = () => {
  updateClock();
  window.setInterval("updateClock()", 1);
};

//Funciones para la caja de texto

let caract = document.getElementById("areatexto");
let cont = document.getElementById("numCaract");
let contadores = document.querySelector("p");

caract.oninput = () => {
  let cantidad = caract.value.length;
  cantidad = 30 - cantidad;
  cont.innerHTML = cantidad;
  if (cantidad >= 15 && cantidad <= 30) {
    contadores.className = "contadorPer";
  } else if (cantidad <= 15 && cantidad >= 1) {
    contadores.className = "contadorLim";
  } else if (cantidad <= 0) {
    contadores.className = "contadorReb";
  }
};


//Funciones para lista y select

const cambioPantalla = window.matchMedia("(max-width: 768px)");
const seleccion = document.getElementById('select');

const seleccionUn = () => {
    console.log(cambioPantalla);
    if(cambioPantalla.matches==false){
        seleccion.innerHTML=`
    <h3>Lista de Autos</h3>
    <ul class="cars">
        <li>Ferrari</li>
        <li>Lamborghini</li>
        <li>Porsche</li>
        <li>BMW</li>
    </ul>`
    }else if(cambioPantalla.matches==true){
        seleccion.innerHTML=`
        <h3>Lista de Autos</h3>
        <select id="cars" name="autos">
            <option value="">Selecciona un Auto</option>
            <option value="ferrari">Ferrari</option>
            <option value="lamborghini">Lamborghini</option>
            <option value="porsche">Porsche</option>
            <option value="bmw">BMW</option>
        </select>
        `
    }
}

