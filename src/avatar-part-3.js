function go_to_avatar_part_2()
{
    window.open("./avatar-part-2.html", "_self");
}

function go_to_main_screen()
{
    window.open("./menu-main.html", "_self");
}

function missionClicked(num){
    if (mission[num] == 0){
        mission[num] = 1;
        document.getElementById("mission" + num).style.backgroundColor = "#003A69";
        document.getElementById("mission" + num).style.color = "white";
        document.getElementById("missionb" + num).innerHTML = "x";
        document.getElementById("missionb" + num).style.backgroundColor = "red";
    } else {
        mission[num] = 0;
        document.getElementById("mission" + num).style.backgroundColor = "#00C4D9";
        document.getElementById("mission" + num).style.color = "black";
        document.getElementById("missionb" + num).innerHTML = "+";
        document.getElementById("missionb" + num).style.backgroundColor = "green";
    }
}

var mission = []
var i = 0;

while(i < 9)
    mission[i++] = 0;
