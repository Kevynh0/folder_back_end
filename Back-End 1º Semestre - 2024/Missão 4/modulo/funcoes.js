/************************************************************************************************
 * Objetivo: Realizar lista de exercícos de Outubro de 2024
 * Data: 16/10/2024
 * Autor: Kevyn
 * Versão: 1.0
 ************************************************************************************************/

/*************************************************************
*  Array -> [] É utilizado para manipular uma lista de dados
*  JSON  -> {} É utilizado para organizar os dados
*************************************************************/

var listaDeEstados = require('./estados_cidades')

const getListaDeEstados = function(){
    let siglas = []     //Array
    let listauf = {}    //JSON
    let estadosBrasil = listaDeEstados

    estadosBrasil.listaDeEstados.estados.forEach(function(item){
        siglas.push(item.sigla)
    })

    listauf.uf = siglas
    listauf.quantidade = siglas.length

    // console.log(listauf) 
    return listauf
}

const getDadosEstado = function(ufsigla){
    let uf = String(ufsigla).toUpperCase()
    let listaSiglas = {}
    let listauf = listaDeEstados.listaDeEstados.estados
    let status = false

    listauf.forEach(function(item){
        if(String(item.sigla).toUpperCase() == uf){
            status = true
            listaSiglas.uf = item.sigla
            listaSiglas.descricao = item.nome
            listaSiglas.capital = item.capital
            listaSiglas.regiao = item.regiao
        }
    })

    if(status == true){
        return listaSiglas
    }else{
        return status
    }

    // console.log(listaSiglas)
}

const getCapitalEstado = function(ufcapital){
    let capitais = {}
    let capital = String(ufcapital).toUpperCase()
    let listasuf = listaDeEstados.listaDeEstados.estados
    let status = false

    listasuf.forEach(function(item){
        if(String(item.sigla).toUpperCase() == capital){
            status = true
            capitais.uf = item.sigla
            capitais.descricao = item.nome
            capitais.capital = item.capital
        }
    })

    if(status == true){
        return capitais
    }else{
        return status
    }

    // console.log(capitais)
    return capitais

}

const getEstadosRegiao = function(regiaoestado){
    //String: recebe o que a pessoa digitar e transforma na var "regiao" e deixa ela maiúscula
    let regiao = String(regiaoestado).toUpperCase()
    let regiaoEstado = {} //JSON
    let estados = [] //Array
    let listaestados = listaDeEstados.listaDeEstados.estados //Import document (complet)
    let status = false

    //JSON.texto = Import document
    regiaoEstado.regiao = regiao
    //JSON.texto = Import document
    regiaoEstado.estados = estados

    //forEach & if: conferindo dados do document
    listaestados.forEach(function(item){
        if(String(item.regiao).toUpperCase() == regiao){
            //Criando o JSON dos dados
            status = true
            let linha = {}
            linha.uf = item.sigla //item."dado do documento importado"
            linha.descricao = item.nome
            estados.push(linha)
        }
    })

    if(status = true){
        return linha
    }else{
        return status
    }

    // console.log(regiaoEstado)
    // return regiaoEstado
}

const getCapitalPais = function(){
    let capitais = {}
    let informacoes = []
    let listaestados = listaDeEstados.listaDeEstados.estados //Import document (complet)
    let status = false

    listaestados.forEach(function(item){
        if(item.capital_pais != undefined){
            //Criando e definindo o JSON de dados
            status = true
            let dados = {}
            dados.capital_atual = item.capital_pais
            dados.uf = item.sigla //dados."atributo" = item."valor"
            dados.descricao = item.nome
            dados.capital = item.capital
            dados.regiao = item.regiao
            dados.capital_pais_ano_inicio = item.capital_pais.ano_inicio
            dados.capital_pais_ano_termino = item.capital_pais.ano_fim

            informacoes.push(dados)
        }
    })

    if(status = true){
        return dados
    }else{
        return status
    }

    capitais.capitais = informacoes

    // console.log(capitais)
    // return capitais

}

const getCidades = function(estadosUf){
    let listaCidades = String(estadosUf).toUpperCase()
    let listaUf = listaDeEstados.listaDeEstados.estados
    let cidadesEstados = {}
    let cidades = []
    let status

    listaUf.forEach(function(item){

        if(String(item.sigla).toUpperCase() == listaCidades){
            status = true
            cidadesEstados.uf = item.sigla
            cidadesEstados.descricao = item.nome
            cidadesEstados.quantidade = item.cidades.length

            item.cidades.forEach(function(itemCidades){
                cidades.push(itemCidades.nome)
            })

        }
    })
    cidadesEstados.cidades = cidades

    if(status = true){
        return cidadesEstados
    }else{
        return (status)
    }

    // console.log(cidadesEstados)
}

module.exports = {
/*****************************************************************************************************************/

//function 1
getListaDeEstados, //()

/*****************************************************************************************************************/

//function 2
//Colocar o estado desejado para executar o filtro e aparecer o uf, a descrição, a capital e a região no terminal
getDadosEstado, //('SE')

/*****************************************************************************************************************/

//function 3
//Colocar a sigla (UF) no console.log para executar o filtro e exibir o uf, a descrição e a capital
getCapitalEstado, //('SP')

/*****************************************************************************************************************/

//function 4
//Inserir a região desejada no getEstadosRegiao para obter o UF e a DESCRIÇÃO (nome da cidade)
getEstadosRegiao, //('Sudeste')

/*****************************************************************************************************************/

//function 5
getCapitalPais, //()

/*****************************************************************************************************************/

//function 6
getCidades
// getCidades('sp')

/*****************************************************************************************************************/
}