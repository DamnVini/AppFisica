// Function que pega o campo selecionado e converte

function conversor(Input) {

    var fObj = document.convert.ftemp;
    var cObj = document.convert.ctemp;
    var kObj = document.convert.ktemp;

    if (Input == "fahrenheit") 
    {

        cObj.value = Math.round((fObj.value - 32) * (5 / 9));
        kObj.value = Math.round(((fObj.value - 32) * (5 / 9)) + (273.15));

    }
    else if (Input == "kelvin") 
    {

        fObj.value = Math.round((kObj.value - 273.15) * (9 / 5)) + 32; 
        cObj.value = Math.round((fObj.value - 32) * (5 / 9));

    }
    else if (Input == "celsius")
    {

        fObj.value = Math.round((parseInt(cObj.value) * (9 / 5)) + 32);
        kObj.value = Math.round((parseInt(cObj.value) + 273));

    }
}

// Limpa todos os campos
function clearAll() 
{
    document.convert.ftemp.value = "";
    document.convert.ctemp.value = "";
    document.convert.ktemp.value = "";
}


