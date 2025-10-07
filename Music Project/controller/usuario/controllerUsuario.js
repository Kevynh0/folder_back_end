/*******************************************************************************************************
* Objetivo: Controller responsável pela integração entre o APP e a Model (CRUD de dados)
*       validações, tratamento de dados e etc... Controller referente as ações de CRUD de usuários
* Data: 22/04/2025
* Autor: Kevyn
* Versão: 1.0
*******************************************************************************************************/

//Import do arquivo de mensagens e status code
const message = require('../../modulo/config.js')

//Import do DAO para realizar o CRUD no Banco de Dados
const usuarioDAO = require('../../model/DAO/usuario.js')

//Função para inserir um novo usuário
const inserirUsuario = async function(user, contentType){
    try {
        if(String(contentType).toLowerCase() == 'application/json'){

            if( user.username       == ''        || user.username      == null || user.username    == undefined || user.username.length    > 100 ||
                user.email          == ''        || user.email         == null || user.email       == undefined || user.email.length       > 100 ||
                user.senha          == ''        || user.senha         == null || user.senha       == undefined || user.senha.length       > 100 ||
                user.foto           == undefined || user.foto.length    > 200
            ){
                return message.ERROR_REQUIRED_FIELDS //400
            }else{

                let resultUser = await usuarioDAO.insertUser(user)

                if(resultUser)
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

const atualizarUsuario = async function(numero, user, contentType){
    try {
        let id = numero

        if(String(contentType).toLowerCase() == 'application/json'){

            if( user.username       == ''        || user.username      == null || user.username     == undefined || user.username.length    > 100 ||
                user.email          == ''        || user.email         == null || user.email        == undefined || user.email.length       > 100 ||
                user.senha          == ''        || user.senha         == null || user.senha        == undefined || user.senha.length       > 100 ||
                user.foto           == undefined || user.foto.length    > 200
            ){
                return message.ERROR_REQUIRED_FIELDS //400
            }else{

                let result = await usuarioDAO.selectByIdUser(id)

                if(result != false || typeof(result) == 'object'){

                    if(result.length > 0){

                        user.id_usuario = id
                        let resultUsuario = await usuarioDAO.updateUser(user)

                        if(resultUsuario){
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

//Função para excluir um usuário
const excluirUsuario = async function(numero){
    try {
        let id = numero

        if( id == '' || id == null || id == undefined || isNaN(id)){

            return message.ERROR_REQUIRED_FIELDS //400

        }else{

            let resultUsuario = await usuarioDAO.selectByIdUser(id)

            if(resultUsuario != false || typeof(resultUsuario) == 'object'){

                if(resultUsuario.length > 0){

                    let result = await usuarioDAO.deleteUser(id)

                    if(result)
                        return message.SUCCESS_DELETE_ITEM //200
                    else
                        return message.ERROR_INTERNAL_SERVER_MODEL //500

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

//Função para listar todos os usuários do BD
const listarUsuario = async function(){
    try {

        //Cria um objeto JSON
        let dadosUsuario = {}

        //Importa a função da model DAO
        let resultUsuario = await usuarioDAO.selectAllUser()

        if(resultUsuario != false || typeof(resultUsuario) == 'object'){

            if(resultUsuario.length > 0){

                //Adiciona os dados no objeto JSON, e realizar o return
                dadosUsuario.status = true
                dadosUsuario.status_code = 200
                dadosUsuario.items = resultUsuario.length
                dadosUsuario.users = resultUsuario

                return dadosUsuario

            }else{
                return message.ERROR_NOT_FOUND //404
            }

        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL //500
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //
    }
}

//Função para buscar um usuário pelo ID
const buscarUsuario = async function(numero){
    try {
        let id = numero

        //Cria um objeto JSON
        let dadosUsuario = {}

        //Validando se o Id não está vazio, e se é um número
        if( id == '' || id == null || id == undefined || isNaN(id)){

            return message.ERROR_REQUIRED_FIELDS //400

        }else{

            let resultUsuario = await usuarioDAO.selectByIdUser(id)

            if(resultUsuario != false || typeof(resultUsuario) == 'object'){
                
                if(resultUsuario.length > 0){

                    //Cria um JSON para colocar o Array de músicas
                    //Adiciona os dados no objeto JSON, e realizar o return
                    dadosUsuario.status = true
                    dadosUsuario.status_code = 200,
                    dadosUsuario.user = resultUsuario

                    return dadosUsuario

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

    //Inserir - Insert
    inserirUsuario,

    //Atualizar - Update
    atualizarUsuario,

    //Excluir - Delete
    excluirUsuario,

    //Listar - List
    listarUsuario,

    //Buscar - Search
    buscarUsuario
}