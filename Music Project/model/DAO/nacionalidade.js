/************************************************************************************************
* Objetivo: Criar o CRUD de dados da tabela de nacionalidade no Banco de dados
* Data: 22/04/2025
* Autor: Kevyn
* Versão: 1.0
************************************************************************************************/

//Import da biblioteca do prisma client para realizar as ações no BD
const { PrismaClient } = require('@prisma/client')

//Instancia da classe do prisma client (criar um objeto)
const prisma = new PrismaClient()

//Função para inserir uma nacionalidade no BD
const insertNacionalidade = async function(item){
    try {
        let sql = `insert into tbl_nacionalidade (nacionalidade)
                                values ('${item.nacionalidade}')`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else 
            return false // BUG no BD

    } catch (error) {
        return false // BUG de programação         
    }
}

//Função para atualizar uma nacionalidade existente
const updateNacionalidade = async function(item) {
    try { 
        let sql = `update tbl_nacionalidade set nacionalidade = '${item.nacionalidade}'
                                        where id_nacionalidade =  ${item.id_nacionalidade}`
                                        
        let result = await prisma.$executeRawUnsafe(sql)
        
        if (result)
            return true
        else
            return false
                                                                    
    } catch (error) {
        return false
    }
}

//Função para excluir uma nacionalidade existente
const deleteNacionalidade = async function(number){
    try {
        let id = number 

        // Script SQL 
        let sql = `delete from tbl_nacionalidade where id_nacionalidade=${id}`

        let result = await prisma.$executeRawUnsafe(sql)
        
        if(result)
            return true
        else
            return false

    } catch (error) {
        return false
    }
}

//Função para listar/retornar todas as nacionalidades do BD
const selectAllNacionalidade = async function(){
    try {
        let sql = 'select * from tbl_nacionalidade'

        let result = await prisma.$queryRawUnsafe(sql)

        if(result)
            return result
        else
            return false

    } catch (error) {
        return false
    }
}

//Função para buscar uma nacionalidade pelo Id
const selectByIdNacionalidade = async function(number){
    try {
        let id = number 

        let sql = `select * from tbl_nacionalidade where id_nacionalidade=${id} `

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
    insertNacionalidade,

    //Update - Atualizar
    updateNacionalidade,

    //Delete - Deletar
    deleteNacionalidade,

    //List - Listar
    selectAllNacionalidade,

    //Search - Buscar
    selectByIdNacionalidade
}