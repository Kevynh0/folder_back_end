//Import do arquivo de funções
var gerarNumeros = require('./modulo/funcoes.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDeDados.question('Digite o número inicial: ', function(numeroI){
    let valor1 = numeroI

    entradaDeDados.question('Digite o número final: ', function(numero2){
        let valor2 = numero2

            if(!gerarNumeros.gerarNovosNumerosSequenciais(valor1, valor2)){
                console.log('Não foi possível processar a requisição!')
            }

    })
})