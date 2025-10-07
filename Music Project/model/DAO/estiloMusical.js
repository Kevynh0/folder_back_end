/************************************************************************************************
* Objetivo: Criar o CRUD de dados da tabela de estilo musical no Banco de dados
* Data: 22/04/2025
* Autor: Kevyn
* Versão: 1.0
************************************************************************************************/

//Import da biblioteca do prisma client para realizar as ações no BD
const { PrismaClient } = require('@prisma/client')

//Instancia da classe do prisma client (criar um objeto)
const prisma = new PrismaClient()

//Função para inserir uma nacionalidade no BD
const insertEstiloMusical = async function(item){
    try {
        let sql = `insert into tbl_estiloMusical (estiloMusical)
                                values           ('${item.estiloMusical}'
                                                  )`

        //Executa o script SQL no banco de dados e aguarda o resultado (true or false)
        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else
            return false //BUG no BD

    } catch (error) {
       return false //BUG de programação 
    }
}

//Função para atualizar um estilo musical existente
const updateEstiloMusical = async function(item){
    try {
        let sql = `update tbl_estiloMusical set estiloMusical = '${item.estiloMusical}'
                                                where id_estiloMusical = ${item.id_estiloMusical}`
        
        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else
            return false
    } catch (error) {
        return false
    }    
}

//Função para excluir um estilo musical existente
const deleteEstiloMusical = async function(number){
    try {
        let id = number

        let sql = `delete from tbl_estiloMusical where id_estiloMusical=${id}`
        
        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else
            return false

    } catch (error) {
        return false
    }
}

//Função para retornar todos os estilos musicais do BD
const selectAllEstiloMusical = async function(){
    try {
        let sql = 'select * from tbl_estiloMusical'

        let result = await prisma.$queryRawUnsafe(sql)

        if(result)
            return result
        else
            return false

    } catch (error) {
        return false
    }    
}

//Função para buscar um estilo musical pelo ID
const selectByIdEstiloMusical = async function(number){
    try {
        let id = number

        let sql = `select * from tbl_estiloMusical where id id_estiloMusical=${id}`

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
    insertEstiloMusical,

    //Update - Atualizar
    updateEstiloMusical,

    //Delete - Deletar
    deleteEstiloMusical,

    //List - Listar
    selectAllEstiloMusical,

    //Search - Buscar
    selectByIdEstiloMusical
}