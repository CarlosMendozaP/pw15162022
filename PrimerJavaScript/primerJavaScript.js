
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

async function traePersona(){
    const respuesta = await fetch("https://randomuser.me/api/");
    //console.log(respuesta);
    const datos = await respuesta.json();
    //console.log(datos);
    console.log(datos.results[0].name.last)
}

//alert("Alerta en archivo externo JavaScript");
/*
    Varias lineas de comentarios
*/