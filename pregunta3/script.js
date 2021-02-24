function add() {
    var fecha = document.getElementById("fecha").value;
    var bebida = document.getElementById("bebida").value;
    var cantidad = document.getElementById("cantidad").value;
    // if(fecha==''){
    //     alert("Ingrese fecha");
    // }
    // if(bebida==''){
    //     alert("Ingrese bebida");
    // }
    // if(cantidad==''){
    //     alert("Ingrese cantidad");
    //}

    var fila = "<t;><td>" + fecha + "</td><td>" + bebida + "</td><td>" + cantidad;

    document.getElementById("tbl").innerHTML = fila;
}


