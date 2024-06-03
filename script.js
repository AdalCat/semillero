document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var mensaje = '¡Hola, ' + nombre + '! Gracias por visitar mi página web.';
    document.getElementById('mensaje').textContent = mensaje;
});

function calcular() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    var resultado = 'Suma: ' + suma + ', Resta: ' + resta + ', Multiplicación: ' + multiplicacion + ', División: ' + division;
    document.getElementById('resultado').textContent = resultado;
}

function calcular_rectagulo() {
    var altura = parseInt(document.getElementById('altura').value);
    var base = parseInt(document.getElementById('base').value);
    var area = base * altura;
    document.getElementById('resultado_area').textContent = area;
    console.log(area);
}