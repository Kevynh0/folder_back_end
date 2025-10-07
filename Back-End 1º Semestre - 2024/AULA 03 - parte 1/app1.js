/******************************************************************************
 * Objetivo: Manipular tratamento de entrada de dados, conversão
                de tipo de dados através de um exercício para 
                calcular  médias escolares e utilizar estruturas condicionais
 * Data: 07/08/2024
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

entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //Cria uma variável local dentro da função
    let nomeAluno = nome

    entradaDeDados.question('Digite o nome do curso: ', function(curso){
        //Cria uma variável local dentro da função
        let cursoAluno = curso

        entradaDeDados.question('Digite a note 1: ', function(valor1){
            //Cria uma variável local dentro da função
            let nota1 = valor1

            entradaDeDados.question('Digite a nota 2: ', function(valor2){
                //Cria uma variável local dentro da função
                let nota2 = valor2

                entradaDeDados.question('Digite a nota 3: ', function(valor3){
                    //Cria uma variável local dentro da função
                    let nota3 = valor3

                    entradaDeDados.question('Digite a nota 4: ', function(valor4){
                        //Cria uma variável local dentro da função
                        let nota4 = valor4
                        let resultado

                        /*
                            Operadores de comparação
                            == Verifica a igualdade entre dois conteúdos
                            != Verifica a diferença entre dois conteúdos
                            <  Verifica se o valor é menor
                            >  Verifica se o valor é maior
                            <= Verifica se o valor é menor ou se é igual
                            >= Verifica se o valor é maior ou se é igual
                            === Verifica a igualdade entre conteúdos e igualdade 
                                de tipos de dados
                            ==! Verifica a igualdade entre dois conteúdos e a 
                                diferença entre tipos de dados
                            !== Verifica a diferença entre dois conteúdos e a
                                igualdade entre tipos de dados
                            !=! Verifica a diferença entre dois conteúdos e a
                                diferença entre os tipos de dados

                        */

                        /* Operadores lógicos

                            E   &&          AND
                            OU  || (pipe)   OR
                            Não !           NOT
                        */

                        //Validação de entrda de dados vazio
                        if(nomeAluno == '' || cursoAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                            console.log('ERRO: É obrigatório preencher todas as entradas.')
                        }else{
                            //Validação de entrada de caractéres inválidos
                            if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ){
                                console.log('ERRO: é obrigatório a entrada de notas apenas com números.')
                            }else{
                                //Validação de entrada de valores somente de 0 à 10
                                if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10){
                                    console.log('ERRO:Não é permitido a entrada de valores maior que 10 e menor que 0.')
                                }else{
                                    resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
                                    console.log(`A média do aluno ${nomeAluno}, matriculado no curso de ${cursoAluno} foi de ${resultado}!`)

                                    if(resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4 <=10 && >= 7){
                                        console.log('APROVADO!')
                                    }      
                                    if(resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4 <=6.9 && >= 5){
                                        console.log('RECUPERAÇÃO!')
                                    }     
                                    if(resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4 <=0  && >= 4.9){
                                        console.log('REPROVADO!')
                                    }    
                                } //Fecha a validação de 0 à 10
                            } //Fecha a validação de caracter inválido
                        } //Fecha a validação de entrada vazia
                    }) //Nota4
                }) //Nota3
            }) //Nota2
        }) //Nota01
    })
})

//Missão: criar um filtro que diz: Quando a nota estiver entre: 
//          7 e 10: APROVADO!
//          5 e 6.9: RECUPERAÇÃO!
//          Abaixo de 5: REPROVADO!

//  Como pensei em fazer:

//      resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
//console.log('APROVADO!')

//resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4 <=10 || => 7      console.log('APROVADO!')
//resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4 <=6.9|| => 5      console.log('RECUPERAÇÃO!')
//resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4 <=0  || => 4.9    console.log('REPROVADO!')