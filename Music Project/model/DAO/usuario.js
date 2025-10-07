/************************************************************************************************
* Objetivo: Criar o CRUD de dados da tabela de música no Banco de dados
* Data: 22/04/2025
* Autor: Kevyn
* Versão: 1.0
************************************************************************************************/

//Import da biblioteca do prisma client para realizar as ações no BD
const { PrismaClient } = require('@prisma/client')

//Instancia da classe do prisma client (criar um objeto)
const prisma = new PrismaClient()

//Função para inserir um novo usuário
const insertUser = async function(user){
    try {
        let sql = `insert into tbl_usuario (username,
                                            email,
                                            senha,
                                            foto)
                                values  ('${user.username}',
                                         '${user.email}',
                                         '${user.senha}',
                                         '${user.foto}')`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else
            return false //BUG no BD

    } catch (error) {
       return false //BUG de programação 
    }
}

//Função para atualizar um usuário existente
const updateUser = async function(user){
    try {
        let sql = `update tbl_usuario set username = '${user.username}'
                                        email      = '${user.email}'
                                        senha      = '${user.senha}'
                                        foto       = '${user.foto}'
                                where id_usuario   =  ${user.id_usuario}`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else
            return false

    } catch (error) {
        return false
    }    
}

//Função para excluir um usuário existente
const deleteUser = async function(number){
    try {
        let id = number

        let sql = `delete from tbl_usuario where id_usuario=${id}`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else
            return false

    } catch (error) {
        return false
    }
}

//Função para retornar todos os usuários existentes no BD
const selectAllUser = async function(){
    try {
        let sql = 'select * from tbl_usuario'

        let result = await prisma.$queryRawUnsafe(sql)

        if(result)
            return true
        else
            return false

    } catch (error) {
        return false
    }    
}

//Função para buscar um usuário pelo ID
const selectByIdUser = async function(number){
    try {
        let id = number

        let sql = `select * from tbl_usuario where id_usuario=${id}`

        let result = await prisma.$queryRawUnsafe(sql)

        if(result)
            return result
        else
            return false

    } catch (error) {
        return false
    }
}

module.exports = {
    
    //Insert - Inserir
    insertUser,

    //Update - Atualizar
    updateUser,

    //Delete - Deletar
    deleteUser,

    //List - Listar
    selectAllUser,

    //Search - Buscar
    selectByIdUser
}