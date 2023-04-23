function preparar(){
    let sheet = window.document.styleSheets[0];
    sheet.insertRule('.tarjeta .tarjeta-contenido{transition: transform 0.6s;transform: rotateY(180deg);}', sheet.cssRules.length);
    let txtdestino = document.querySelector("#origen").value;

    if(txtdestino.length == 0){
        document.querySelector("#destino").value = "<h3>Ningún Mensaje fue encontrado</h3>";
        sheet.insertRule('#destino{background-image: url("/img/muneco.png");background-repeat:no-repeat; background-position:center;}', sheet.cssRules.length);
        sheet.insertRule('#copiar{visibility:hidden}', sheet.cssRules.length);       
    }
    else{
        sheet.insertRule('#destino{background-image: url("");}', sheet.cssRules.length);
        sheet.insertRule('#copiar{visibility:visible}', sheet.cssRules.length);   
    }

}

    let letra = document.getElementById("origen");
    
    letra.addEventListener("keyup", function(event) { 
    return letra.value = letra.value.toLowerCase();
});


function encriptar(){
    preparar();
    let texto = document.getElementById("origen").value.toLowerCase(); 
    //i es para que afecte tanto a minusculas como a mayusculas -- e_E
    //g es para toda la linea
    //m es para que afecte a multiples lineas u oraciones
    var msg = texto.replace(/e/gm,"enter");
    var msg = msg.replace(/o/gm,"ober");
    var msg = msg.replace(/i/gm,"imes");
    var msg = msg.replace(/a/gm,"ai");
    var msg = msg.replace(/u/gm,"ufat");
    document.querySelector("#destino").value = msg;

}

function desencriptar(){
    preparar();
    var texto = document.getElementById("origen").value.toLowerCase(); 
    var msg = texto.replace(/enter/gm,"e");
    var msg = msg.replace(/ober/gm,"o");
    var msg = msg.replace(/imes/gm,"i");
    var msg = msg.replace(/ai/gm,"a");
    var msg = msg.replace(/ufat/gm,"u");

    document.querySelector("#destino").value = msg;

}

function regresar(){
    let sheet = window.document.styleSheets[0];
    sheet.insertRule('.tarjeta .tarjeta-contenido{transition: transform 0.6s;transform: rotateY(360deg);}', sheet.cssRules.length);

}

function copiar(){
    let sheet = window.document.styleSheets[0];
    sheet.insertRule('.tarjeta .tarjeta-contenido{transition: transform 0.6s;transform: rotateY(360deg);}', sheet.cssRules.length);

    let portapapeles = document.querySelector("#destino").value;

    navigator.clipboard.writeText(portapapeles)
  .then(() => { 
    
    console.log('Msg copiado al portapapeles')
  })
  


}