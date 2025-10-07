/************************************************************************************************
* Objetivo: Controller responsável pela integração entre o APP e a Model (CRUD de dados)
*       validações, tratamento de dados e etc... Controller referente as ações de CRUD de Música
* Data: 22/04/2025
* Autor: Kevyn
* Versão: 1.0
************************************************************************************************/

//Import do arquivo de mensagens e status code
const message = require('../../modulo/config.js')

//Import do DAO para realizar o CRUD no Banco de Dados
const estiloMusicalDAO = require('../../model/DAO/estiloMusical.js')

//Função para inserir um novo estilo musical
const inserirEstiloMusical = async function(item, contentType){
    try {
        if(String(contentType).toLowerCase() == 'application/json'){
            if( item.estiloMusical == '' || item.estiloMusical == null || item.estiloMusical == undefined || item.genero.lenght > 100){
                
                return message.ERROR_REQUIRED_FIELDS //400

            }else{
                let resultEstiloMusical = await estiloMusical.inserirEstiloMusical(item)

                if(resultEstiloMusical)
                    return message.SUCCESS_CREATED_ITEM //201
                else
                    return message.ERROR_INTERNAL_SERVER_MODEL //500
            }
        }else{
            return message.ERROR_CONTENT_TYPE //415
        }
        
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

//Função para atualizar um estilo musical
const atualizarEstiloMusical = async function(numero, item, contentType){
    try {
        let id = numero

        if(String(contentType).toLowerCase() == 'application.json'){
            if( item.estiloMusical == '' || item.estiloMusical == null || item.estiloMusical == undefined || item.estiloMusical.lenght > 100 ||
                id                 == '' || id                 == null || id                 == undefined || isNaN(id)
            ){
                return message.ERROR_REQUIRED_FIELDS //400
            }else{
                let result = await estiloMusicalDAO.selectByIdEstiloMusical(id)

                if(result != false || typeof(result) == 'object'){

                    if(result.lenght > 0){

                        //Adiciona o ID no JSON
                        item.id_estiloMusical = id
                        let resultEstiloMusical = await estiloMusicalDAO.updateEstiloMusical(item)

                        if(resultEstiloMusical){
                            return message.SUCCESS_UPDATE_ITEM //200
                        }else{
                            return message.ERROR_INTERNAL_SERVER_MODEL //500
                        }

                    }else{
                        return message.ERROR_NOT_FOUND //404
                    }
                }
            }

        }else{
            return message.ERROR_CONTENT_TYPE //415
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }    
}

//Função para excluir um estilo musical
const excluirEstiloMusical = async function(numero){
    try {
        let id = numero

        if( id == '' || id == null || id == undefined || isNaN(id)){
            return message.ERROR_REQUIRED_FIELDS //400
        }else{

            //Verificar se existe determidado Id, antes de remove-lo
            let resultEstiloMusical = await estiloMusicalDAO.selectByIdEstiloMusical(id)

            if(resultEstiloMusical != false || typeof(resultEstiloMusical) == 'object'){

                if(resultEstiloMusical.lenght > 0){

                    let result = await estiloMusicalDAO.deleteEstiloMusical(id)

                    if(result)
                        return message.SUCCESS_DELETE_ITEM //200

                    else
                        return message.ERROR_INTERNAL_SERVER_MODEL //500

                }else{
                    return message.ERROR_NOT_FOUND // 404
                }

            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500
            }
        }
    } catch (error) {
      return message.ERROR_INTERNAL_SERVER_CONTROLLER //500  
    }  
}

//Função para retornar uma lista de estilos musicais
const listarEstiloMusical = async function(){
    try {
        let dadosEstiloMusical = {}

        let resultEstiloMusical = await estiloMusicalDAO.selectAllEstiloMusical()

        if(resultEstiloMusical != false || typeof(resultEstiloMusical) == 'object'){
            if(resultEstiloMusical.lenght > 0){

                dadosEstiloMusical.status = true
                dadosEstiloMusical.status_code = 200,
                dadosEstiloMusical.items = resultEstiloMusical.lenght
                dadosEstiloMusical.estilosMusicais = resultEstiloMusical

                return dadosEstiloMusical
            }else{
                return message.ERROR_NOT_FOUND //404
            }

        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL //500
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

//Função para buscar um estilo musical pelo ID
const buscarEstiloMusical = async function(numero){
    try {
        let id = numero

        let dadosEstiloMusical = {}

        if( id == '' || id == null || id == undefined || isNaN(id)){
            
            return message.ERROR_REQUIRED_FIELDS //400

        }else{
            let resultEstiloMusical = await estiloMusicalDAO.selectByIdEstiloMusical(id)

            if(resultEstiloMusical != false || typeof(resultEstiloMusical) == 'object'){

                if(resultEstiloMusical.lenght > 0){
                    dadosEstiloMusical.status = true
                    dadosEstiloMusical.status_code = 200,
                    dadosEstiloMusical.musics = resultEstiloMusical

                    return dadosEstiloMusical
                }else{
                    return message.ERROR_NOT_FOUND //404
                }

            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500
            }
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

module.exports = {

    //Insert - Inserir
    inserirEstiloMusical,

    //Update - Atualizar
    atualizarEstiloMusical,

    //Delete - Deletar
    excluirEstiloMusical,

    //List - Listar
    listarEstiloMusical,

    //Search - Buscar
    buscarEstiloMusical
}