let abilities = new Set()
let colors = ['green', 'black', 'red', 'blue', 'grey', 'orange'];

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

        tag_area.appendChild(tag);
    }

    field.value = '';
}

function go_to_avatar_part_2()
{
    window.open("./avatar-part-2.html", "_self");
}
