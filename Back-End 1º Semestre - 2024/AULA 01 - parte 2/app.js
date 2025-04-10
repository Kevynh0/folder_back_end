/*************************************************************
 * Objetivo: Manipular entrada e saída de dados pelo node.js
 * Data: 31/07/2024
 * Autor: Kevyn
 * Versão: 1.0
 ************************************************************/

//Import da biblioteca readline que será resposável por manipular entrada de dados
    //via teclado, pelo terminal
var readline = require('readline')

//Cria uma interface para entrada de dados via teclado no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Permite retornar a entrada de dados fornecida pelo usuário no terminal. Isso acontece através de uma função de CallBack

entradaDeDados.question('Digite seu nome: ', function(nome){
    var nomeUsuario = nome
    //console.log('O nome do usuário é: ' + nomeUsuario)
    entradaDeDados.question('Digite seu email: ', function(email){
        var emailUsuario = email
        //console.log('O email do usuário ' + nomeUsuario + 'é' + emailUsuario)
        //console.log(`O email do usuário ${nomeUsuario} é ${emailUsuario}`)

        entradaDeDados.question('Digite o nome do curso: ', function(curso){
            var nomeCurso = curso
            console.log(`O email do usuário ${nomeUsuario} é ${emailUsuario} e o curso é de: ${nomeCurso}`)
            entradaDeDados.close()
        })
    })
})







/************************************ 
 * -> método (pode ser o .question)
 * -> método chama a função, e o resultado do método ele te devolve através de uma variável de argumento 
 * 
*/