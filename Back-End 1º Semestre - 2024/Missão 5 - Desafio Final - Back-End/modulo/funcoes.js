/************************************************************************************************
 * Objetivo: Desafio final Back-End: Lion School
 * Data: 27/11/2024
 * Autor: Kevyn
 * Versão: 1.0
 ************************************************************************************************/

var alunos = require('./alunos')
var cursos = require('./cursos')

const getListaDeCursos = function(){
    let listaCurso = cursos
    let curso = []
    let lista = {}

    listaCurso.cursos.forEach(function(item){
        let status = false

        if(item.nome){
            status = true
            let dadosCurso = {}
            dadosCurso.nome = item.nome
            dadosCurso.sigla = item.sigla
            dadosCurso.icone = item.icone
            dadosCurso.carga = item.carga

            curso.push(dadosCurso)
        }
        if(status == false){
            lista = false
        }
    })
    lista.cursos = curso
    

    return lista
}

const getListaDeAlunos = function(){
    listaAluno = alunos
    lista = {}
    lista.aluno = []

    listaAluno.alunos.forEach(function(item){
        let status = false

        if(item.nome){
            status = true
        }

        if(status == true){
            lista.aluno.push(item)
        }
    })
    
    return lista
}

function getMatriculaAlunos (matricula){
    let status = false
    listaAluno = alunos

    lista = {}

    listaAluno.alunos.forEach(function(item){
        if(matricula == item.matricula){
            status = true
            lista.Foto = item.foto
            lista.Nome = item.nome
            lista.Matricula = item.matricula
            lista.Sexo = item.sexo
            lista.Curso = item.curso
        }

    })

    if(status == false){
        lista = false
    }

    return lista
}

function getListaCursoEspecifico (siglaCurso){
    let sigla = String(siglaCurso).toUpperCase()
    let listaAll = alunos.alunos
    let nomeCurso = []
    let status = false
    let siglasCurso = {}

    listaAll.forEach(function(itemCurso){
        listaAll = itemCurso.curso
        itemCurso.curso.forEach(function(item){
            if(String(item.sigla).toUpperCase() == sigla){
                status = true
                let listaAlunos = {}
                listaAlunos.foto = itemCurso.foto
                listaAlunos.nome = itemCurso.nome
                listaAlunos.matricula = itemCurso.matricula
                listaAlunos.sexo = itemCurso.sexo
                listaAlunos.curso = itemCurso.curso
                listaAlunos.status = itemCurso.status
                nomeCurso.push(listaAlunos)
             }
        })
        
    })
    siglasCurso.curso = sigla
    siglasCurso.aluno = nomeCurso


    if(status == true){
        return siglasCurso
    }else{
        status = false
    }
}

function getStatusAluno (statusAl){

    let lista  = {}
    let status = String(statusAl).toUpperCase()
    let listaAlunos = []
    let status_boolean = false

    alunos.alunos.forEach(function(item){
        if(String(item.status).toUpperCase() == status){
            status_boolean = true
            let dadosListaStatus = {}

            dadosListaStatus.Foto = item.foto
            dadosListaStatus.Nome = item.nome
            dadosListaStatus.Matricula = item.matricula
            dadosListaStatus.Sexo = item.sexo
            dadosListaStatus.Curso = item.curso
            dadosListaStatus.Status = item.status
            
            listaAlunos.push(dadosListaStatus)
        }
    })

    // resultado.status = statusA
    lista.situacao = listaAlunos

    
    if(status_boolean == true){
      return lista.situacao
    }else{
        return status
    }
   
    // return { situacao: listaAlunos }
}

function getAlunoStatusDisciplina (siglaCurso, statusDisciplina){
    let listaAlunos = alunos
    let sigla = String(siglaCurso).toUpperCase()
    let disciplina = String(statusDisciplina).toUpperCase()
    let dados = []
    let resultado = {}
    let status_boolean = false

    listaAlunos.alunos.forEach(function(itemCurso){
        listaAlunos = itemCurso.curso
        itemCurso.curso.forEach(function(item){
            if(String(item.sigla).toUpperCase() == sigla){
                status_boolean = true
                let alunos = {}
                        alunos.foto = itemCurso.foto
                        alunos.nome = itemCurso.nome
                        alunos.matricula = itemCurso.matricula
                        alunos.curso = itemCurso.curso
                        alunos.sexo = itemCurso.sexo
                        item.disciplinas.forEach(function(itemD){
                    if(String(itemD.status).toUpperCase() == disciplina){
                        alunos.status = itemD.status

                        dados.push(alunos)
                    }
                })
            }
        })
    })

    resultado.curso = sigla
    resultado.status = disciplina
    resultado.alunos = dados

    if(status_boolean = true){
        return resultado
    }else{
        return status_boolean
    }
}

// function getMatricula


/*****************************************************************************************************************/
// Function 1 - FUNCIONANDO
    // console.log(getListaDeCursos())
/*****************************************************************************************************************/
// Function 2 - FUNCIONANDO
    // console.log(getListaDeAlunos())
/*****************************************************************************************************************/
// Function 3 - FUNCIONANDO
    // console.log(getMatriculaAlunos('20151001001'))
/*****************************************************************************************************************/
// Function 4 - FUNCIONANDO
    // console.log(getListaCursoEspecifico('ds')) // -> Ds ou Rds
/*****************************************************************************************************************/
// Function 5 - FUNCIONANDO
    // console.log(getStatusAluno('finalizado')) //-> Finalizado ou Cursando
/*****************************************************************************************************************/
// Function 6 - FUNCIONANDO (Obs: verificar se à algum erro...)
    console.log(getAlunoStatusDisciplina('ds', 'aprovado'))
/*****************************************************************************************************************/
// Function 7 - fazer
    // ...
/*****************************************************************************************************************/






