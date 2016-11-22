'use strict';

var areas = []

areas[0] = "Software livre"
areas[1] = "Arte e Design"
areas[2] = "Empreendedorismo"
areas[3] = "Entretenimento"
areas[4] = "Tecnologia"

function getUpArea(num){
    var aux = areas[num];
    areas[num] = areas[num-1];
    areas[num-1] = aux;
    document.getElementById("item" + num).innerHTML = areas[num];
    document.getElementById("item" + (num-1)).innerHTML = areas[num-1];
}

function getDownArea(num){
    var aux = areas[num];
    areas[num] = areas[num+1];
    areas[num+1] = aux;
    document.getElementById("item" + num).innerHTML = areas[num];
    document.getElementById("item" + (num+1)).innerHTML = areas[num+1];
}
