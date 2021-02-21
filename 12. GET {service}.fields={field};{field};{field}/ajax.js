addEventListener('load',inicializarEventos, false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click', presionBoton, false);
}
function presionBoton(){
    alert("El resultado es mostrado en consola!")
    getAll();
}

function getAll(){
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all?fields=subregion;topLevelDomain;demonym",
        method: 'GET',
        dataType: 'json',
            headers: {
            'Accept': 'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',
            success: function (data) {
                console.log(JSON.stringify(data));
            },
            error: function (error) {
                console.log(error);
            }
    });
}