/******************************************************************************
 * Objetivo: Realizar calculos matemáticos das quatro operações básicas
 * Data: 28/08/2024
 * Autor: Kevyn
 * Versão: 1.0
 ******************************************************************************/

//Import do arquivo de funções (arquivo criado pelo programador)
var calculos = require('./modulo/calculos.js')

//Import da biblioteca para realizar entrada de dados pelo terminal
var readline = require('readline')

//Cria um objeto para realizar a entrada de dados
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados para o valor 1
entradaDeDados.question('Digite o valor 1: ', function(valor1){
    //String() -> converte uma variável para o tipo de dados String
    //replace() -> permite localizar um carácter e substituir por outro
    let numero1 = String(valor1).replace(',', '.')

    //Entrada de dados para o valor 2
    entradaDeDados.question('Digite o valor 2: ', function(valor2){
        let numero2 = String(valor2).replace(',', '.')

        //Entrada de dados para o tipo de operação
        entradaDeDados.question('Digite a operação de calculo [SOMAR, SUBTRAIR, MULTIPLICAR ou DIVIDIR]: ', function(operacao){
            let tipoCalculo = operacao
            let resultado

            //Validação para verificar a entrada de dados em branco
            if(numero1 == '' || numero2 == '' || tipoCalculo == ''){
                console.log('ERRO: é obrigatório a entrada de todos os dados ')
            }else if(isNaN(numero1) || isNaN(numero2)){
                console.log('ERRO: é obrigatório a entrada de dados apenas com valores numéricos!')
            }else{

                //Processamento dos calculos
                resultado = calculos.calculadora(numero1, numero2, tipoCalculo)
                
                //Validação para tratar o erro d variável indefinida
                if(resultado){
                    console.log(resultado)
                }
            }

        })
    })
})