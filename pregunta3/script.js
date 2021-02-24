// Find a <table> element with id="myTable":
function add() {
    var table = document.getElementById("tbl");
    var row = table.insertRow(0);
    var fecha = document.getElementById("fecha").value;
    var bebida = document.getElementById("bebida").value;
    var cantidad = document.getElementById("cantidad").value;


    var fecha = row.insertCell(0);
    var bebida = row.insertCell(1);
    var cantidad = row.insertCell(2);


    fecha.innerHTML = document.getElementById("fecha").value;
    bebida.innerHTML = document.getElementById("bebida").value;
    cantidad.innerHTML = document.getElementById("cantidad").value;
}


