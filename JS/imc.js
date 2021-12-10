/*Botões*/
let btnCalc = document.querySelector("#btnCalcular")
let btnRei = document.querySelector("#btnReiniciar")

/*Imprimir resultado*/
let noResultado = document.querySelector("#numImc")
let naFaixa = document.querySelector("#saudeP")

/*Função imc*/
btnCalc.addEventListener("click", ()=>{

    //Aqui pego a altura em centímetros, pois caso o usuário se esquecer de
    //Colocar o ponto para separar o metro assim fica mais fácil
    var alturaC = parseInt(document.getElementById("altura").value)

    //Transformo os Cm em M
    var alturaM = alturaC / 100

    //Pega o peso da pesoa direto em kilos
    var pesoK = parseInt(document.getElementById("peso").value)
      
    var imc = (pesoK / (alturaM * alturaM))

    var saude = ""

    ///Aqui separa os sexos
    var sexo = []
    if (f.checked){
        sexo.push("f");
    }else if (m.checked){
        sexo.push("m");
    }
    if (sexo == "f"){
     
        
    if (parseFloat(imc) < 19.1) {

        saude = "Abaixo do peso"

    }
    
    else if (parseFloat(imc) >= 19.1 && parseFloat(imc) < 25.8) {

        saude = "Normal"

    }

    else if(parseFloat(imc) >= 25.8 && parseFloat(imc) < 27.3){

        saude = "Na margem acima do peso"

    }

    else if(parseFloat(imc) >= 27.3 && parseFloat(imc) < 32.3){

        saude = "Acima do peso"

    }
    
    else {

        saude = "Obeso"

    }
        
        
    }
    
///////////////////////////////////////////////////////////////////////////////
    else if (sexo == "m"){
    if (parseFloat(imc) < 20.7) {

        saude = "Abaixo do peso"

    }
    
    else if (parseFloat(imc) >= 20.7 && parseFloat(imc) < 26.4) {

        saude = "Normal"

    }

    else if(parseFloat(imc) >= 26.4 && parseFloat(imc) < 27.8){

        saude = "Na margem acima do peso"

    }

    else if(parseFloat(imc) >= 27.8 && parseFloat(imc) < 31.1){

        saude = "Acima do peso"

    }
    
    else {

        saude = "Obeso"

    }}

    noResultado.innerHTML = "Resultado: " + imc
    naFaixa.innerHTML = "Faixa de peso: " + saude

})
