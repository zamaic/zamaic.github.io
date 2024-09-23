var contador = 0;
var elementos = [];

function Capturar() {
    var input = document.getElementById("elementoInput");
    var valor = parseInt(input.value);

    if (!isNaN(valor)) {
        elementos.push(valor);
        
        agregarCelda("renglonIndice", `[${contador}]`);
        agregarCelda("renglonDato", valor);

        var tabla = document.getElementById("tablaVertical");
        var renglonVertical = tabla.insertRow(-1);
        renglonVertical.insertCell(0).innerHTML = `[${contador}]`;
        renglonVertical.insertCell(1).innerHTML = valor;

        contador++;
        input.value = "";

        if (contador >= 10) {
            document.getElementById("capturarBoton").disabled = true;
            document.getElementById("elementoInput").disabled = true;
            document.getElementById("generarBoton").disabled = false;
        } else {
            document.getElementById("contador").innerHTML = `Elemento [${contador}]:`;
            Aleatorio();
        }
    } else {
        alert("Por favor, ingresa un número entero válido.");
    }
}

function agregarCelda(id, contenido) {
    var renglon = document.getElementById(id);
    var celda = renglon.insertCell(-1);
    celda.innerHTML = contenido;
}

function Aleatorio() {
    document.getElementById("elementoInput").value = Math.floor(Math.random() * 1000);
}

function Reiniciar() {
  contador = 0;
  elementos = [];
  document.getElementById("capturarBoton").disabled = false;
  document.getElementById("elementoInput").disabled = false;
  document.getElementById("generarBoton").disabled = true;

  // Limpiar tablas
  limpiarTabla("renglonIndice");
  limpiarTabla("renglonDato");
  limpiarTabla("tablaVertical");
  limpiarTabla("tablaVertical2");
  limpiarTabla("tablaVertical3");
  limpiarTabla("renglonIndice2");
  limpiarTabla("renglonDato2");
  limpiarTabla("renglonIndice3");
  limpiarTabla("renglonDato3");

  document.getElementById("resultados").innerHTML = "";
  document.getElementById("contador").innerHTML = `Elemento [0]:`;
  Aleatorio();
}

function limpiarTabla(id) {
    document.getElementById(id).innerHTML = "";
}

function Calcular() {
    var menor = Math.min(...elementos);
    var mayor = Math.max(...elementos);
    var suma = elementos.reduce((acc, val) => acc + val, 0);
    var promedio = suma / elementos.length;

    // Ordenar y calcular mediana
    var ordenado = [...elementos].sort((a, b) => a - b);
    var mediana = (ordenado.length % 2 === 0)
        ? (ordenado[ordenado.length / 2 - 1] + ordenado[ordenado.length / 2]) / 2
        : ordenado[Math.floor(ordenado.length / 2)];

    // Calcular moda
    var frecuencias = {};
    var moda = [];
    var maxFrecuencia = 0;

    for (let num of ordenado) {
        frecuencias[num] = (frecuencias[num] || 0) + 1;
        if (frecuencias[num] > maxFrecuencia) {
            maxFrecuencia = frecuencias[num];
            moda = [num];
        } else if (frecuencias[num] === maxFrecuencia) {
            moda.push(num);
        }
    }

    mostrarResultados(menor, mayor, suma, promedio, mediana, moda);
}

function mostrarResultados(menor, mayor, suma, promedio, mediana, moda) {
    document.getElementById("resultados").innerHTML = `
        El menor es: ${menor} <br>
        El mayor es: ${mayor} <br>
        La suma es: ${suma} <br>
        El promedio es: ${promedio.toFixed(2)} <br>
        La mediana es: ${mediana} <br>
        La moda es: ${moda.join(', ')}`;  
    imprimirArreglosOrdenados();
}

function imprimirArreglosOrdenados() {
    var ordenadoAsc = [...elementos].sort((a, b) => a - b);
    var renglonDato2 = document.getElementById("renglonDato2");
    ordenadoAsc.forEach((valor, index) => {
        agregarCelda("renglonIndice2", `[${index}]`);
        agregarCelda("renglonDato2", valor);
    });
    var ordenadoDesc = [...elementos].sort((a, b) => b - a);
    var renglonDato3 = document.getElementById("renglonDato3");
    ordenadoDesc.forEach((valor, index) => {
        agregarCelda("renglonIndice3", `[${index}]`);
        agregarCelda("renglonDato3", valor);
    });
}
