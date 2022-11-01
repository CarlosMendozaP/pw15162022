
function quitarSITEC(){
    // let pregunta = confirm("¿Seguro que quieres quitar SITEC?")
    if(confirm("¿Seguro que quieres quitar SITEC?")){
        alert("SITEC ha sido borrado...");
        let chi = document.getElementById("sitec");
        chi.innerHTML = "Chale"
    }
}

function funcionAlerta(){
    alert("Di clic al botón");
}

//alert("Alerta en archivo externo JavaScript");
/*
    Varias lineas de comentarios
*/