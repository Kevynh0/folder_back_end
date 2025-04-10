/************************************************************************************************
 * Objetivo: Arquivo responsável pela criação de funções do calculo de IMC 
 * Data: 11/09/2024
 * Autor: Kevyn
 * Versão: 1.0
 ************************************************************************************************/

function validarDados(valorPeso, valorAltura){
    // fazer validacao negativo, 0 e vazio
    let peso = valorPeso
    let altura = valorAltura
    let status = false

    if(peso == "" || altura == ""){
        status = true
        console.log('ERRO: é obrigatório o preenchimento de todos os dados!')
    }else if (isNaN(peso) || isNaN(altura)){
        status = true
        console.log('ERRO: não é permitido a entrada de letras!')
    }else if(peso == 0 || altura == 0){
        status = true
        console.log('ERRO: não é possivel calcular com o 0! ')
    }
    return status
}

function calcularIMC(valor_peso, valor_altura){
    let peso = valor_peso
    let altura = valor_altura
    let resultado = false

    if(!validarDados(peso, altura)){
        resultado = peso / (altura * altura)
        resultado = resultado.toFixed(2)
    }else{
        console.log('ERRO! Tente novamente a conta')
    }
    return resultado
}


function statusIMC(total){
    // fazer validacao negativo, 0 e vazio
    let resultado = total
    let status

    if(resultado < 18.5){
        status = ("Abaixo do peso")
    }else if(resultado >= 18.5 && resultado <= 24.9 ){
        status = ('Status: Peso normal')
    }else if (resultado >= 25 && resultado <= 29.9){
        status = ('Status: Acima do peso (sobrepeso)')
    }else if (resultado >= 30 && resultado <= 34.9){
        status = ('Status: Obesidade I')
    }else if (resultado >= 35 && resultado <= 39.9){
        status = ('Status: Obesidade II')
    }else if (resultado >= 40){
        status = ('Status: Obesidade III')
    }
    return status
}

console.log(calcularIMC(67, 1.76))
//     //Inserir o peso e a altura (xxx, x.xx)

// console.log(statusIMC(21.62))
//     //Inserir o que apareceu no terminal para obter o status


/*module.exports = {
    statusIMC,
    calcularIMC,
    validarDados
}

*/