var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";
        licuadora.classList.add("active");
        licuarAlgo();
        /*console.log("me prendiste");*/
    }else{
        estadoLicuadora = "apagada";
        licuadora.classList.remove("active");
        licuarAlgo();
        /*console.log("me apagaste");*/
    }
    

}
function licuarAlgo(){
    if(sonidoLicuadora.paused ){
        botonLicuadora.play();
        sonidoLicuadora.play();
    }else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}