function redirect (url)
{
    // build url
    url = "./" + url + ".html";

    // redirect to url
    window.open(url, "_self");
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


/* Help panels */
function _EH_HelpPanel1 ()
{    
    document.getElementById("help-panel-1").style.display="block";
    document.getElementById("fade").style.display="block";
}

function _EH_HelpPanel2 ()
{    
    document.getElementById("help-panel-2").style.display="block";
    document.getElementById("fade").style.display="block";
}