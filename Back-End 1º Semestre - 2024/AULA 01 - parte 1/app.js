/***************************************************************
 Objetivo: Conhecer os primeiros comandos do JS dentro do NODE
* Data: 31/07/2024
* Autor: Kevyn
* Versão: 1.0
***************************************************************/

//Permite exibir uma mensagem no terminal
console.log('Exercício 01 com node.JS')

var nome = 'José'
var valor1 = '10'
var valor2 = '20'

/*
    Criação de variáveis em JS
    var -> permite criar uma variável (espaço na memória) no escopo global da programação
    let -> permite criar uma variável (espaço na memória) no escopo local da programação
        (Bloco de programação), essa variável nasce e deixa de existir dentro do bloco
    const -> permite criar uma constante (espaço em memória que não sofre mudanças)
        tanto no escopo local como global da programação

*/
//Concatenar -> é juntar conteúdos distintos em um mesmo lugar
console.log('O nome do usuário é: ' + nome) //Tradicional
console.log(`O nome do usuário é: ${nome}`) //Forma reduzida

//Permite identificar o tipo de dados de uma variável
console.log(typeof(nome))

var resultado = Number(valor1) + Number(valor2)

/*
    Convensão de tipos de dados de String para número
    parseInt() -> permite converter uma String para número inteiro
    parseFloat() -> permite converter uma String para número inteiro ou real conforme a necessidade
    Number() -> permite converter uma string para número inteiro ou número real conforme a necessidade (Mais utilizado após a nova versão do JS)


*/

/**********************************************
 * Tipos de dados de variáveis:
 *  -> string
 *  -> number
 *      Inteiro (Int)
 *      Real (Float)
 *  -> boolean
 *      Verdadeiro (true)
 *      Falso (false)
 *  -> object
 *      array (representado pelos cochetes ([]))
 *      json (representado pelas chaves ({}))
 * 
 * 
 * **************************************************************/

/* parseInt: trabalha com números POSITIVOS, NEGATIVOS e INTEIROS; parseFloat: trabalha com números POSITIVOS, NEGATIVOS, INTEIROS e QUEBRADOS */
/* Number é número (o N tem que ser MAIÚSCULO!) */