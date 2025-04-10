/******************************************************************************
 * Objetivo: Arquivo responsável pelas funções de cálculos matemáticos
 * Data: 28/08/2024
 * Autor: Kevyn
 * Versão: 1.0
 ******************************************************************************/

function calculadora(valor1, valor2, operacao){
    //Recebendo os dados dos argumentos da função
    let numero1 = valor1
    let numero2 = valor2
    let tipoCalculo = operacao
    let resultado

    //toUpperCase() -> Converte uma String para MAIUSCULO
    //toLowerCase() -> Converte uma String para minusculo
    if(tipoCalculo.toUpperCase() == 'SOMAR'){
        resultado = Number(numero1) + Number(numero2)
    }else if(tipoCalculo.toUpperCase() == 'SUBTRAIR'){
        resultado = Number(numero1) - Number(numero2)
    }else if(tipoCalculo.toUpperCase() == 'MULTIPLICAR'){
        resultado = Number(numero1) * Number(numero2)
    }else if(tipoCalculo.toUpperCase() == 'DIVIDIR'){
        //Validação da divisão por 0
        if(numero2 == 0){
            console.log('ERRO: não é possível realizar divisão por 0!')
        }else{
            resultado = Number(numero1) / Number(numero2)
        }
    }else{
        console.log('ERRO: somente será realizado o calculo das operações identificadas!')
    }
    //Validação para verificar se o retorno da função será um número ou se será false (caso não consiga processar)
    if(resultado != undefind){
        return resultado
    }else{
        return false
    }
}

module.exports = {
    calculadora
}