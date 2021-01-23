/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var imgObj = null;
/* Inicializa el calibrador en cero*/
function init() {
    imgObj = document.getElementById('RMovil');
    imgObj.style.position = 'absolute';
    imgObj.style.top = '0px';
    imgObj.style.left = '136px';
    //document.getElementById("Measure").innerHTML = 0.00;
}

window.onload = init;
            
    
    //--------------------------------------------------------------------------
     /* Realiza una medida aleatoria*/               
function Measure() {
    init();
    var MeasureVal = 0.0;
    MeasureVal = Math.floor(Math.random() * 500);
    imgObj.style.left = parseInt(imgObj.style.left) + ~~MeasureVal;
    +'px';
    var Answer = Number((MeasureVal * 0.05).toFixed(2));
    //document.getElementById("respos3").innerHTML = Answer;
    return Answer;
}
    //--------------------------------------------------------------------------

//-----------------Control de tiempo-------------------------------------------//
var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
  var l = document.getElementById("Tiempo");
  l.innerHTML = c;
  c = c + 1;
  t = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}

//function resettimer() {
//    clearInterval(t);
//    document.getElementById("Tiempo").innerHTML = 0;
//}

//------------------------------------------------------------------------------

function Inicio_Prog() {
    startCount();
    Ans_i = Measure();
    document.getElementById("Tiempo").value = c;
    //Desabilita el botón "INICIAR" despues del primer click.
    document.getElementById("button1").disabled = true;
}


//     var Rboton = document.getElementById('right');
//     var Wboton = document.getElementById('wrong');
//     Rboton.style.transform = "scale(1.5, 1.5)";
//     Wboton.style.transform = "scale(1.5, 1.5)";


//Evalua la respuesta ingresada
cr = 0;
cw = 0;
function Enviar_Dat() {
    var Rboton = document.getElementById('right');
    var Wboton = document.getElementById('wrong');
    
    //var maxtime = 60;
    //var timefact =1.2;
    
    var resp = document.getElementById("input").value;
    if (resp!=Ans_i){
        cw++;
        document.getElementById("respos2").innerHTML = cw;
        Ans_i = Measure();
        //resettimer();
        //ti = timer();
        Rboton.style.transform = "initial";
        Wboton.style.transform = "scale(1.5, 1.5)";    
    }else {
        //resettimer();
        //ti = timer();
        Ans_i = Measure();
        Wboton.style.transform = "initial";
        Rboton.style.transform = "scale(1.5, 1.5)"; 
        cr++;
        document.getElementById("respos1").innerHTML = cr;
    }

}


function Finalizar() {
    stopCount();
    var puntaje = cr/(c-1);
    
    if (puntaje >= 4.0/60.0){
        var cal = 5.0;}
        else {
            var val_full =75*puntaje; 
            var cal = val_full.toFixed(1); 
        } 
      
    document.getElementById("respos3").innerHTML = cal;
    alert("JUEGO FINALIZADO");
}
