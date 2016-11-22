function redirect (url)
{
    // build url
    url = "./" + url + ".html";

    // redirect to url
    window.open(url, "_self");
}

function _EH_Character ()
{
    redirect("menu-character");
}

function _EH_Friends ()
{
    redirect("menu-friends");
}

function _EH_Help ()
{
    redirect("menu-help");
}

function _EH_Inventory ()
{
    redirect("menu-inventory");
}

function _EH_Main ()
{
    redirect("menu-main");
}

function _EH_Map ()
{
    redirect("menu-map");
}

function _EH_Settings ()
{
    redirect("menu-settings");
}