function changeAbout(){
    var idet = document.getElementsByTagName("div")[2];
    document.getElementById("bodyabout").style.display = "block"
    document.getElementById("bodyculture").style.display = "none"
    document.getElementById("bodytradition").style.display = "none"
    document.getElementById("bodysights").style.display = "none"
}

function changeCulture(){
    var idet = document.getElementsByTagName("div")[2];
    document.getElementById("bodyabout").style.display = "none"
    document.getElementById("bodyculture").style.display = "block"
    document.getElementById("bodytradition").style.display = "none"
    document.getElementById("bodysights").style.display = "none"
}

function changeTradition(){
    var idet = document.getElementsByTagName("div")[2];
    document.getElementById("bodyabout").style.display = "none"
    document.getElementById("bodyculture").style.display = "none"
    document.getElementById("bodytradition").style.display = "block"
    document.getElementById("bodysights").style.display = "none"
}

function changeSights(){
    var idet = document.getElementsByTagName("div")[2];
    document.getElementById("bodyabout").style.display = "none"
    document.getElementById("bodyculture").style.display = "none"
    document.getElementById("bodytradition").style.display = "none"
    document.getElementById("bodysights").style.display = "block"
}