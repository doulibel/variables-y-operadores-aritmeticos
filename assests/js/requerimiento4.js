console.log("mensaje de prueba4")

function suma () {
    var numero1 = parseInt ( document .getElementById( "numero1" ).value);
    var numero2 = parseInt ( document .getElementById( "numero1" ).value);
    var numero3 = parseInt ( document .getElementById( "numero3" ).value);
    var numero4 = parseInt ( document .getElementById( "numero4" ).value);
    var numero5 = parseInt ( document .getElementById( "numero5" ).value);
    var resultadosuma = numero1 + numero2 + numero3 + numero4 + numero5;
    return resultadosuma;
}
function promedio() {
    var numero1 = parseInt ( document .getElementById( "numero1" ).value);
    var numero2 = parseInt ( document .getElementById( "numero1" ).value);
    var numero3 = parseInt ( document .getElementById( "numero3" ).value);
    var numero4 = parseInt ( document .getElementById( "numero4" ).value);
    var numero5 = parseInt ( document .getElementById( "numero5" ).value);
    var resultadopromedio = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;
    return resultadopromedio;
}