/******************************************************************************
 * Objetivo: Caluculadora que realiza as principais operações matemáticas.
 *              Atividade 03 – Exercício prático 02 - Programação Back-End.
 * Data: 21/08/2024
 * Autor: Kevyn
 * Versão: 1.0
 ******************************************************************************/

//import da biblioteca para entrada de dados
var readline = require('readline')

//Cria um objeto para receber a entrada de dados do usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira o 1º número: ', function(valor1){
     //Cria uma variável local dentro da função
     let primValor = (valor1.replace(',' , '.'))
     entradaDeDados.question('Insira o 2º número: ', function(valor2){
         //Cria uma variável local dentro da função
         let segValor = (valor2.replace(',' , '.'))
 
         let soma
         let subtracao
         let multiplicacao
         let divisao
 
         if(primValor == '' || segValor == '' ){
             console.log('ERRO: é obrigatório preencher todas as entradas!')
 
             }else{
                 //Validação de entrada de caractéres inválidos
                 if(isNaN(valor1) || isNaN(valor2)){
                 console.log('ERRO: é obrigatório preencher apenas com números!')
                 }
             }
 
             entradaDeDados.question('Qual operação matemática deseja realizar: SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO ou DIVISÃO? ', function(operation){
             //Cria uma variável local dentro da função
                let opMat = operation
                if(opMat !== '+' && opMat !== '-' && opMat !== '*' && opMat !== '/'){
                    console.log('ERRO: escolha uma opção de operação para prosseguir!')
                }else{
                    if(opMat === '+'){
                    soma = Number(valor1) + Number(valor2)
                    console.log(`O resultado da operação solicitada é ${soma.toFixed(2)}`)
                 }else{
                     if(opMat === '-'){
                        subtracao = Number(valor1) - Number(valor2)
                        console.log(`O resultado da operação solicitada é ${subtracao.toFixed(2)}`)
                     }else{
                         if(opMat === '*'){
                             multiplicacao = Number(valor1) * Number(valor2)
                             console.log(`O resultado da operação solicitada é ${multiplicacao.toFixed(2)}`)
                     }else{
                         if(opMat === '/'){
                             if(Number(valor1) == 0 || Number(valor2) == 0){
                                 console.log('ERRO: NÃO é possível realizar divisão por 0!')
 
                             }else{
                                 divisao = Number(valor1) / Number(valor2)
                             console.log(`O resultado da operação solicitada é ${divisao.toFixed(2)}`)
                                         //Validação de entrda de dados vazio
                                 
                             }
                         }
                     }
                 }entradaDeDados.close()
             }
         }
     })
})
})