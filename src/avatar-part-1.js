abilities = new Set()
let colors = ['green', 'black', 'red', 'blue', 'grey', 'orange'];

function load_abilities()
{
    let k = localStorage.getItem('abilities');
    if (k === '{}') abilities = new Set();
    else abilities = new Set(JSON.parse(k));

    for (let ability of abilities)
    {
        console.log(ability);

        let tag_area = document.getElementById('abilities-tag-area');

        let tag = document.createElement("Label");
        tag.innerHTML = ability;
        tag.className = 'abilities-tag';
        let color = colors[Math.floor(Math.random()*colors.length)];
        tag.style.backgroundColor = color;
        tag.style.color = 'white';

        let close_button = document.createElement("Button");
        close_button.textContent = 'x';
        close_button.className = 'abilities-tag-close-button';
        close_button.onclick = function () {
            tag_area.removeChild(tag);
            abilities.delete(ability);
        }
        tag.appendChild(close_button);

        tag_area.appendChild(tag);
    }
}

function add_ability()
{
    let field = document.getElementById('ability-field');
    let ability = field.value;

    if (ability === "") return;

    if (abilities.has(ability) === false)
    {
        abilities.add(ability);

        let tag_area = document.getElementById('abilities-tag-area');

        let tag = document.createElement("Label");
        tag.innerHTML = ability;
        tag.className = 'abilities-tag';
        let color = colors[Math.floor(Math.random()*colors.length)];
        tag.style.backgroundColor = color;
        tag.style.color = 'white';

        let close_button = document.createElement("Button");
        close_button.textContent = 'x';
        close_button.className = 'abilities-tag-close-button';
        close_button.onclick = function () {
            tag_area.removeChild(tag);
            abilities.delete(ability);
        }
        tag.appendChild(close_button);

        tag_area.appendChild(tag);
    }

    field.value = '';
}

function go_to_avatar_part_2()
{
    localStorage.setItem('abilities', JSON.stringify([...abilities]));
    console.log(localStorage.abilities);
    window.open("./avatar-part-2.html", "_self");
}

window.onload = function ()
{
    load_abilities();
}
