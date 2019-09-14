    
    var div = document.getElementById('alert');
    var HTMLDivId = "\"animated-example\"";
    var HTMLDivClass =  "\"w3-display-bottommiddle w3-panel w3-red animated fadeOut\"";
    var HTMLshake = "\"shake\"";

// Function que pega o campo selecionado e converte
function conversor(Input) {

    var fObj = document.convert.ftemp;
    var cObj = document.convert.ctemp;
    var kObj = document.convert.ktemp;

    if (Input == "fahrenheit") 
    {

        cObj.value = ((fObj.value - 32) * (5 / 9)).toFixed(2);
        kObj.value = (((fObj.value - 32) * (5 / 9)) + (273.15)).toFixed(2);
        Verificar();

    }
    else if (Input == "kelvin") 
    {

        fObj.value = ((kObj.value - 273.15) * (9 / 5) + 32).toFixed(2); 
        cObj.value = ((fObj.value - 32) * (5 / 9)).toFixed(2);
        Verificar();

    }
    else if (Input == "celsius")
    {

        fObj.value = ((cObj.value * (9 / 5)) + 32).toFixed(2);
        kObj.value = ((parseInt(cObj.value) + 273.15)).toFixed(2);
        Verificar();

    }

}

// Limpa todos os campos
function Limpar() 
{
    
    document.convert.ftemp.value = "";
    document.convert.ctemp.value = "";
    document.convert.ktemp.value = "";
}

function KelvinNegativo() 
{
    var OnScreen;
    document.getElementById("alert").innerHTML += 
    "<div id=" + HTMLDivId + " class=" + HTMLDivClass + "> <h3 class=" + HTMLshake + ">ERRO!</h3> <p class=" + HTMLshake + ">Kelvin NÃO pode ser negativo!</p></div>";
}

function Verificar() 
{
    if(document.convert.ktemp.value < 0)
    {
        KelvinNegativo();
        Limpar();
    }
}











