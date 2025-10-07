/************************************************************************************************
 * Objetivo: Arquivo responsável pela criação de funções e utilização de estruturas de repetição
 * Data: 04/09/2024
 * Autor: Kevyn
 * Versão: 1.0
 ************************************************************************************************/

//Função tradicional
function gerarNumerosSequenciais (numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let contador
    let status = false

    //Chama a função de validação de dados
    if(validarDados(numeroI, numeroF)){
        contador = parseInt(numeroI)

        //Estrutura de repetição:
        while(contador <= parseInt(numeroF)){
            status = true
            console.log(contador)
            //contador = contador + 1
            //contador ++
            contador +=1
        }
    }
    return status
}

//Arrow Function
const gerarNovosNumerosSequenciais = (numeroInicial, numeroFinal) =>{
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = false

    if(!validarDados(numeroI, numeroF)){
        for(let contador = parseInt(numeroI); contador <= parseInt(numeroF); contador ++){
            console.log(contador)
            status = true
        }
    }
    return status
}

//Função anonima
const validarDados = function(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = false

     //Validação de entrada de dados em branco:
    if(numeroI == '' || numeroF == ''){
        status = true
        console.log('ERRO: o preenchimento dos dados são obrigatórios!')
    //Validação de entrada de caracteres inválidos:
    }else if(isNaN(numeroI) || isNaN(numeroF)){
        status = true
        console.log('ERRO: não é permitido a entrada de letras!')
    }
    return status
}

module.exports = {
    gerarNumerosSequenciais,
    gerarNovosNumerosSequenciais
}

//console.log(gerarNovosNumerosSequenciais(5, 10))
//console.log(validarDados(2, 5))
//console.log(gerarNumerosSequenciais(2, 10))