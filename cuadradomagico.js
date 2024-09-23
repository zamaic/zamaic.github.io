function Generar() {
    document.getElementById("cuadrado").innerHTML = "";

    var tabla = document.getElementById("cuadrado");
    var lado = parseInt(document.getElementById("lados").value);
    var nuevaFila = "", celda = "", r = 0, c = 0;

    for (r = 0; r < lado; r++) {
        nuevaFila = tabla.insertRow(-1);
        for (c = 0; c < lado; c++) {
            celda = nuevaFila.insertCell(-1);
            var entrada = document.createElement("input");
            entrada.setAttribute("type", "number");
            entrada.setAttribute("value", Aleatorio());
            entrada.setAttribute("required", "required");
            entrada.setAttribute("style", "width:50px; color:blue; font-weight: bold;");
            celda.appendChild(entrada);
        }
        celda = nuevaFila.insertCell(-1);
        celda.innerHTML = "0";
    }

    nuevaFila = tabla.insertRow(-1);
    for (c = 0; c < lado + 1; c++) {
        celda = nuevaFila.insertCell(-1);
        celda.innerHTML = "0";
    }

    celda = nuevaFila.insertCell(-1);
    celda.innerHTML = "diagonal1";
    tabla.rows[lado].cells[0].innerHTML = "diagonal2";
}

function Aleatorio() {
    return Math.floor(Math.random() * 100);
}

function Calcular() {
    var tabla = document.getElementById("cuadrado");
    var lado = parseInt(document.getElementById("lados").value);
    var sumaFila = 0, sumaColumna = 0, sumaDiagonal1 = 0, sumaDiagonal2 = 0;
    var esMagico = true;

    for (let r = 0; r < lado; r++) {
        sumaFila = 0;
        for (let c = 0; c < lado; c++) {
            sumaFila += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
        }
        tabla.rows[r].cells[lado].innerHTML = sumaFila;
    }

    for (let c = 0; c < lado; c++) {
        sumaColumna = 0;
        for (let r = 0; r < lado; r++) {
            sumaColumna += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
        }
        tabla.rows[lado].cells[c].innerHTML = sumaColumna;
    }

    for (let i = 0; i < lado; i++) {
        sumaDiagonal1 += parseInt(tabla.rows[i].cells[i].querySelector('input').value);
        sumaDiagonal2 += parseInt(tabla.rows[i].cells[lado - i - 1].querySelector('input').value);
    }
    tabla.rows[lado].cells[lado + 1].innerHTML = sumaDiagonal1; 
    tabla.rows[lado].cells[0].innerHTML = sumaDiagonal2;        

    var constanteMagica = tabla.rows[0].cells[lado].innerHTML; 
    for (let r = 0; r < lado; r++) {
        if (tabla.rows[r].cells[lado].innerHTML != constanteMagica) {
            esMagico = false;
        }
    }
    for (let c = 0; c < lado; c++) {
        if (tabla.rows[lado].cells[c].innerHTML != constanteMagica) {
            esMagico = false;
        }
    }
    if (sumaDiagonal1 != constanteMagica || sumaDiagonal2 != constanteMagica) {
        esMagico = false;
    }

    if (esMagico) {
        document.getElementById("verificar").innerHTML = "¡Es cuadrado mágico!";
        document.getElementById("verificar").style = "color: blue;";
    } else {
        document.getElementById("verificar").innerHTML = "No es cuadrado mágico";
        document.getElementById("verificar").style = "color: crimson;";
    }
}
function EjemploCuadrado() {
    const tabla = document.getElementById("cuadrado");
    const lado = parseInt(document.getElementById("lados").value);

    let num = 1;
    for (let r = 0; r < lado; r++) {
        for (let c = 0; c < lado; c++) {
            tabla.rows[r].cells[c].querySelector('input').value = num++;
        }
    }
    document.getElementById("verificar").innerHTML = "Este es un ejemplo de cuadrado.";
    document.getElementById("verificar").style.color = "crimson";
}

function EjemploMagico() {
    const tabla = document.getElementById("cuadrado");
    const n = parseInt(document.getElementById("lados").value);
    
    // Generar un número aleatorio entre 1 y 9
    const magicNumber = Math.floor(Math.random() * 9) + 1;

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            tabla.rows[r].cells[c].querySelector('input').value = magicNumber;
        }
    }
    document.getElementById("verificar").innerHTML = "¡Es un cuadrado mágico!";
    document.getElementById("verificar").style.color = "blue";
}
