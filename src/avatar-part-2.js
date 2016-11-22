function go_to_avatar_part_1()
{
    window.open("./avatar-part-1.html", "_self");
}

function go_to_avatar_part_3()
{
    window.open("./avatar-part-3.html", "_self");
}

var areas = []

areas[0] = ["Software livre", "#0099FF"]
areas[1] = ["Arte e Design", "#003A69"]
areas[2] = ["Empreendedorismo", "#2eb135"]
areas[3] = ["Entretenimento", "#73e000"]
areas[4] = ["Tecnologia", "#00C4D9"]

function getUpArea(num){
    var aux = areas[num];
    areas[num] = areas[num-1];
    areas[num-1] = aux;
    document.getElementById("item" + num).innerHTML = areas[num][0];
    document.getElementById("item" + (num-1)).innerHTML = areas[num-1][0];
    document.getElementById("item" + num).style.backgroundColor = areas[num][1];
    document.getElementById("item" + (num-1)).style.backgroundColor = areas[num-1][1];
    document.getElementById("btn" + num + "0").style.backgroundColor = areas[num][1];
    document.getElementById("btn" + num + "1").style.backgroundColor = areas[num][1];
    document.getElementById("btn" + (num-1) + "0").style.backgroundColor = areas[num-1][1];
    document.getElementById("btn" + (num-1) + "1").style.backgroundColor = areas[num-1][1];
}

function getDownArea(num){
    var aux = areas[num];
    areas[num] = areas[num+1];
    areas[num+1] = aux;
    document.getElementById("item" + num).innerHTML = areas[num][0];
    document.getElementById("item" + (num+1)).innerHTML = areas[num+1][0];
    document.getElementById("item" + num).style.backgroundColor = areas[num][1];
    document.getElementById("item" + (num+1)).style.backgroundColor = areas[num+1][1];
    document.getElementById("btn" + num + "0").style.backgroundColor = areas[num][1];
    document.getElementById("btn" + num + "1").style.backgroundColor = areas[num][1];
    document.getElementById("btn" + (num+1) + "0").style.backgroundColor = areas[num+1][1];
    document.getElementById("btn" + (num+1) + "1").style.backgroundColor = areas[num+1][1];
}
