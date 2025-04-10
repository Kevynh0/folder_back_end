/************************************************************************************************
 * Objetivo: Criar uma API para o projeto Whatsapp, que futuramente se integrará com Front-End!
 * Data: 28/01/2025
 * Autor: Kevyn
 * Versão: 1.0
 ************************************************************************************************/

var contatos = require('./contatos')

// 1ª function de 6 (na teoria)
const getDadosPessoaisUser = function(number){
    let telefone = Number(number)
    let listaContatos = contatos.contatos
    let savephone
    let infpessoais = {}

    listaContatos['whats-users'].forEach(function(item){
        savephone = item.number
        if(Number (savephone) == telefone){
            infpessoais.Conta = item.account
            infpessoais.Telefone = item.number
            infpessoais.tempoConta = item ['created-since']
        }
    })
    // console.log(listaContatos)
    console.log(infpessoais)
}

// 2ª function de 6 (na teoria)
const getDadosProfileUser = function(number){
    let telefone = Number(number)
    let listaContatos = contatos.contatos
    let savephone
    let infProfile = {}

    listaContatos['whats-users'].forEach(function(item){
        savephone = item.number
        if(Number (savephone) == telefone){
            infProfile.Nick = item.nickname
            infProfile.Foto_Perfil = item['profile-image']
            infProfile.Background = item.background
        }
    })
    console.log(infProfile)
}

// 3ª function de 6 (na teoria)
const getDadosPessoaisContactUser = function(number){
    let telefone = Number(number)
    let listaContatos = contatos.contatos
    let savephone
    let informacoes = []

    listaContatos['whats-users'].forEach(function(dados){
        savephone = dados.number
        if(Number(savephone) == telefone){
            dados.contacts.forEach(function(item){
                let infContactUser = {}
                infContactUser.User = dados.account
                infContactUser.Nome_Contato = item.name
                infContactUser.Foto_Contato = item.image
                infContactUser.Descricao_Contato = item.description

                informacoes.push(infContactUser)
            })
        }
    })
    console.log(informacoes)
}

// 4ª function de 6 (na teoria)
const getConversasUser = function(number){
    let telefone = Number(number)
    let listaContatos = contatos.contatos
    let savephone
    let conversas = []

    listaContatos['whats-users'].forEach(function(dados){
        savephone = dados.number
        if(Number(savephone) == telefone){
            dados.contacts.forEach(function(item){
                let conversasUser = {}
                conversasUser.User = dados.account
                conversasUser.Contato = item.name
                conversasUser.Descricao = item.description
                conversasUser.Foto_Perfil = item.image
                conversasUser.Mensagens = item.messages
                
                conversas.push(conversasUser)
            })
        }
    })
    console.log(conversas)
}

const getUserContato = function(number, name){
    let telefone = Number(number)
    let nomeUser = String(name)
}

/***********************************************************************************************/
// 1ª Function
// getDadosPessoaisUser('11987876567')

// 2ª Function
// getDadosProfileUser('11987876567')

// 3ª Function
// getDadosPessoaisContactUser('11987876567')

// 4ª Function
getConversasUser('11987876567')