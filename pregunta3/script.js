// Find a <table> element with id="myTable":
function add() {
    var fecha = document.getElementById("fecha").value;
    var bebida = document.getElementById("bebida").value;
    var cantidad = document.getElementById("cantidad").value;
    // if(_nom.trim()==''){
    //     alert("Ingrese nombre del producto");
    // }
    // if(_cat.trim()==''){
    //     alert("Ingrese categoria del producto");

    // }
    // if(_precio.trim()==''){
    //     alert("Ingrese precio del producto");

    // }
    // if(_stock.trim()==''){
    //     alert("Ingrese stock del producto");

    // }

    var fila = "<tr><td>" + _nom + "</td><td>" + _cat + "</td><td>" + _precio + "</td><td>" + _stock + "</td></tr>";

    document.getElementById("tbl").innerHTML = fila;
}


