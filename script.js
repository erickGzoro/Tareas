function imprimir(){
    var emisor=null;
    var receptor=null;
    var mensaje=null;

    emisor=document.getElementById("emisor").value;
    receptor=document.getElementById("receptorId").value;
    mensaje=document.getElementById("msg").value;
    document.getElementById("botton");

    document.getElementById('emi').innerHTML = emisor;
    document.getElementById('recep').innerHTML = receptor;
    document.getElementById('mjs').innerHTML = mensaje;

    
    //alert("¡Hiciste clic en el botón!");
}
//alert("hola mundo");