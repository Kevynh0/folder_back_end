/************************************************************************************************
* Objetivo: Criar o CRUD de dados da tabela de música no Banco de dados
* Data: 11/02/2025
* Autor: Kevyn
* Versão: 1.0
************************************************************************************************/

//Import da biblioteca do prisma client para realizar as ações no BD
const { PrismaClient } = require('@prisma/client')

//Instancia da classe do prisma client (criar um objeto)
const prisma = new PrismaClient()

//Função para inserir uma nova música
const insertMusica = async function(musica){

    try {

        let sql = `insert into tbl_musica ( nome,
                                            duracao,
                                            data_lancamento,
                                            letra,
                                            link)
                                values     ( '${musica.nome}',
                                            '${musica.duracao}',
                                            '${musica.data_lancamento}',
                                            '${musica.letra}',
                                            '${musica.link}'
                                            )`

        //Executa o script SQL no banco de dados e aguarda o resultado (true or false)
        let result = await prisma.$executeRawUnsafe(sql)
                        // o await só funciona com o async

        if(result)
            return true
        else
            return false //BUG no BD

    } catch (error) {
        return false //BUG de programação
    }
}

//Função para atualizar uma música existente
const updateMusica = async function(musica){
    try {
        let sql = `update tbl_musica set nome               = '${musica.nome}',
                                            duracao         = '${musica.duracao}',
                                            data_lancamento = '${musica.data_lancamento}',
                                            letra           = '${musica.letra}',
                                            link            = '${musica.link}'
                                    where id = ${musica.id}`
        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else
            return false
        
    } catch (error) {
        return false
    }
}

//Função para excluir uma música existente
const deleteMusica = async function(id){
    try {
        let sql = `delete from tbl_musica where id = ${id}`

        let resultMusica = await prisma.$executeRawUnsafe(sql)

        if(resultMusica)
            return true //Retorna um Boolean true indicando a exclusão da música
        else
            return false

    } catch (error) {
        return false
    }
}

//Função para retornar todas as músicas do BD
const selectAllMusica = async function(){
    try {
        //Script SQL
        let sql = 'select * from tbl_musica order by id desc'

        //Encaminha o script SQL para o BD
        let result = await prisma.$queryRawUnsafe(sql)

        if(result)
            return result //retorna io dados do banco
        else
            return false 

    } catch (error) {
        
    }
}

//Função para buscar uma música pelo ID
const selectByIdMusica = async function(id){
    try {
        let sql = `select * from tbl_musica where id = ${id}`

        let result = await prisma.$queryRawUnsafe(sql)

        if(result)
            return result //Retorna os dados do Banco
        else
            return false

    } catch (error) {
        return false
    }
}

module.exports = {
    insertMusica,
    updateMusica,
    deleteMusica,
    selectAllMusica,
    selectByIdMusica
}