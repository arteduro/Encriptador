const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const paragraphOne = document.querySelector(".firstMessageNotFound");
const paragraphTwo = document.querySelector(".secondMessageNotFound");
const toggleButton = document.querySelector("#language");
const encriptarBtn = document.querySelector(".btn-encriptar");
const desencriptarBtn = document.querySelector(".btn-desencriptar");
const copiarBtn = document.querySelector(".copiar");
const footerParagraph = document.querySelector(".doneBy");



function changeLanguage() {
    if(toggleButton.checked) {
        textArea.placeholder = "Write your text here";
        paragraphOne.innerHTML = "No message found";
        paragraphTwo.innerHTML = "Please enter the text for encrypting or decrypting";
        encriptarBtn.innerHTML = "Encrypt";
        desencriptarBtn.innerHTML = "Decrypt";
        copiarBtn.innerHTML = "Copy";
        footerParagraph. innerHTML = "Done by: David Castro";
    } else {
        textArea.placeholder = "Ingrese el texto aquí";
        paragraphOne.innerHTML = "Ningún mensaje fue encontrado";
        paragraphTwo.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
        encriptarBtn.innerHTML = "Encriptar";
        desencriptarBtn.innerHTML = "Desencriptar";
        copiarBtn.innerHTML = "Copiar";
        footerParagraph. innerHTML = "Hecho por: David Castro";
    }
    
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    paragraphOne.innerHTML = "";
    paragraphTwo.innerHTML = "";
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    paragraphOne.innerHTML = "";
    paragraphTwo.innerHTML = "";
   
}


function btnCopiar() {
    copiar();
    textArea.value = "";
    mensaje.value = "";
}

function copiar() {
    const copyText = document.querySelector(".mensaje");
    copyText.select();
    copyText.setSelectionRange(0,999999);
    navigator.clipboard.writeText(copyText.value);

 }

function encriptar(frase) {
    let matrizCodigo = [["e", "enter"], ["é", "rtr"], ["i", "imes"],  ["í", "xxx"], ["a", "ai"], ["á", "jgg"], ["o", "ober"],  ["ó", "vxv"], ["u", "ufat"], ["¿", "csc"], ["?", "frf"],  ["¡", "nn"], ["!", "zzz"]];
    frase = frase.toLowerCase();
    for(let i= 0; i<matrizCodigo.length; i++){
        if(frase.includes(matrizCodigo[i][0])) {
            frase = frase.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return frase 
}


function desencriptar(fraseDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["é", "rtr"], ["i", "imes"],  ["í", "xxx"], ["a", "ai"], ["á", "jgg"], ["o", "ober"],  ["ó", "vxv"], ["u", "ufat"], ["¿", "csc"], ["?", "frf"],  ["¡", "nn"], ["!", "zzz"]];
    fraseDesencriptada = fraseDesencriptada.toLowerCase();
    for(let i= 0; i<matrizCodigo.length; i++){
        if(fraseDesencriptada.includes(matrizCodigo[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0] );
        }
    }
    return fraseDesencriptada 
}


