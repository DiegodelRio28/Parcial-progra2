function añadirFila() {
    if (Pregunta3.getElementById("fecha").value !== "" &&
        Pregunta3.getElementById("bebida").value !== "" &&
        Pregunta3.getElementById("cantidad").value !== "") {
        var table = document.getElementById("tabProd");
        var row = table.insertRow(0);
        var celda1 = row.insertCell(0);
        var celda2 = row.insertCell(1);

        celda1.innerHTML = document.getElementById("prod_cod").value;
        celda2.innerHTML = document.getElementById("prod_nom").value;
        $.ajax({
            url: 'SrvBuscaProductoUnidad',
            data: { codProdBusca: document.getElementById("prod_cod").value },
            type: 'POST',
            dataType: 'json',
            success: function (data, textStatus, jqXHR) {
                if (data.length > 0) {
                    var filasJson = data.length;
                    var objeto = eval(data);
                    var selectUnidades;
                    for (var i = 0; i < filasJson; i++) {
                        selectUnidades += "<option  value=" + objeto[i].uni_nombre + ">" + objeto[i].uni_nombre + "</option>";
                    }
                    $("<td />").html('<select onchange=\"datoCelda()\" class="form-control" ">' + selectUnidades + '</select>').appendTo(row);
                }
                else {
                    $('#resConsultaCodigo').append("Busqueda sin resultados");
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error al consultar en la base de datos:' + textStatus);
            }
        });

        var celda3 = row.insertCell(2);
        var celda4 = row.insertCell(3);
        var celda5 = row.insertCell(4);
        celda3.innerHTML = document.getElementById("cant").value;
        celda4.innerHTML = document.getElementById("precUni").value;

        var valunit = document.getElementById("precUni").value * document.getElementById("cant").value;
        valorTotal = valorTotal + valunit;
        var valunitdecimal = valunit.toFixed(2);
        celda5.innerHTML = valunitdecimal;



        var celdaProducto = document.createElement('input');
        var celdaProductoNombre = document.createElement('input');
        var celdaCantidad = document.createElement('input');
        var celdaPrecUnitario = document.createElement('input');
    }
    else {
        alert('Ingrese los campos de Cantidad, precio y producto');
    }
}