/******************************************************************************
 * Objetivo: desenvolver um sistema de entrada e saída de dados com o node.js
 * Data: 07/08/2024
 * Autor: Kevyn
 * Versão: 1.0
 ******************************************************************************/

var readline = require('readline')

//Cria uma interface para entrada de dados via teclado no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Permite retornar a entrada de dados fornecida pelo usuário no terminal. Isso acontece através de uma função de CallBack

entradaDeDados.question('Insira o capital inicial : ', function(cpinicio){
    var capitalInicial = cpinicio
    entradaDeDados.question('Insira a taxa de juros anual em percentual. : ', function(jurap){
        var jurosAnual = jurap
        entradaDeDados.question('Insira o número de vezes: ', function(n){
            var numeroVezes = n
            entradaDeDados.question('Insira o tempo: ', function(t){
                var tempo = t

                var montante = Number (capitalInicial) *(1 + Number (jurosAnual) /Number (numeroVezes)) ** Number (numeroVezes) * Number(t)
            console.log(`O montante e:   ${montante}`)
            entradaDeDados.close()
            })
        })
    })
})

