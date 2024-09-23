var elemento = 0;

function Capturar() {
    document.getElementById("error").innerHTML=``; 
    var inputElement = document.getElementById("datos");
    var inputValue = inputElement.value;

    var row = document.getElementById("renglon");
    var valor = row.insertCell(-1);
    valor.innerHTML = `[${elemento}]`;

    var row2 = document.getElementById("renglon2");
    var valor2 = row2.insertCell(-1);
    valor2.innerHTML = inputValue;

    var columna = document.getElementById("tablaV");
    var renglonV = columna.insertRow(-1);
    var valorV2 = renglonV.insertCell(0);
    valorV2.innerHTML = `[ ${elemento} ]`;

    var valorV = renglonV.insertCell(1);
    valorV.innerHTML = inputValue;

    inputElement.value = "";
    inputElement.focus();
    inputElement.value = Math.floor(Math.random() * 1000);

    elemento++;
    document.getElementById("arreglo").innerHTML = `Capture el elemento [${elemento}]`;

    if (elemento >= 10) {
        inputElement.disabled = true;
        document.getElementById("botoncapturar").disabled = true;
    }
}

function Reiniciar() {
    document.getElementById("renglon").innerHTML = "";
    document.getElementById("renglon2").innerHTML = "";
    document.getElementById("tablaV").innerHTML = "";
    document.getElementById("datos").disabled = false;
    document.getElementById("botoncapturar").disabled = false;
    document.getElementById("arreglo").innerHTML = `Capture el elemento [0]`;
    elemento = 0;
}