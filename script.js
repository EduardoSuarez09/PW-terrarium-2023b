// tomando control de objeto
dragElement(document.getElementById("plant1"));

// Implementando la funcion drag element 
function dragElement(terrariumElement){
    //Creando variables que en las posiciones
    // Iniciales y finales
    let pos1 = 0,
    pos2 = 0,
    pos3= 0,
    pos4 =0
    //Registrar un evento 
    terrariumElement.onpointerdown = pointerDrag

    function pointerDrag( event ){
        //Previene todo compaortamiento
        //que tenga por defecto
        //el evento en cuestion en 
        //mi documento
        event.preventDefault();
        console.log("+ On pointer down");
    }
}