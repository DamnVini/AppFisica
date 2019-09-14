// Function que pega o campo selecionado e converte

function conversor(Input) {

    var fObj = document.convert.ftemp;
    var cObj = document.convert.ctemp;
    var kObj = document.convert.ktemp;

    if (Input == "fahrenheit") 
    {

        cObj.value = ((fObj.value - 32) * (5 / 9)).toFixed(2);
        kObj.value = (((fObj.value - 32) * (5 / 9)) + (273.15)).toFixed(2);

    }
    else if (Input == "kelvin") 
    {

        fObj.value = ((kObj.value - 273.15) * (9 / 5) + 32).toFixed(2); 
        cObj.value = ((fObj.value - 32) * (5 / 9)).toFixed(2);

    }
    else if (Input == "celsius")
    {

        fObj.value = ((parseInt(cObj.value) * (9 / 5)) + 32).toFixed(2);
        kObj.value = ((parseInt(cObj.value) + 273)).toFixed(2);

    }
}

// Limpa todos os campos
function clearAll() 
{
    document.convert.ftemp.value = "";
    document.convert.ctemp.value = "";
    document.convert.ktemp.value = "";
}


