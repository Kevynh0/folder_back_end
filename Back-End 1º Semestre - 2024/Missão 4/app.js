/************************************************************************************************
 * Objetivo: API para retornar dados de estados e cidades
 * Data: 30/10/2024
 * Autor: Kevyn
 * Versão: 1.0
 ************************************************************************************************/

/*
    Para criar uma API devemos instalar:
        express       npm install express --save       - Serve para criar uma API
        cors          npm install cors --save          - Serve para configurar as permissões do header
        body-parser   npm install body-parser --save   - Serve para manipular os dados de entrada na API pelo body
*/

const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Inicializando a utilização do express através da variavel app
const app = express()

//request     - significa a chegadad de dados da API
//response    - significa a saída de dados da API

app.use((request, response, next)=>{
    //Permissão de acesso para quem irá chamar a API
    response.header('Access-Control-Allow-Origin', '*')
    //Permissão de acesso para quais métodos a API irá responder
    response.header('Access-Control-Allow-methods', '')

    //Ativa as configurações do header para o cors()
    app.use(cors())

    next()
})

//Import do arquivo de funções
const estadosCidades = require('./modulo/funcoes.js')

//EndPoint para retornar todos os estados
app.get('/v1/estados-cidades/lista-estados-sigla', cors(), async function(request, response){


    //Chama a função que retorna todos os estados
    let dados = estadosCidades.getListaDeEstados()

    //Resposta da API com o JSON e o status code
    response.status(200)
    response.json(dados)
})

//EndPoint que retorna os dados de um estado, filtrando pela sigla
app.get('/v1/estados-cidades/estado/:sigla', cors(), async function (request, response){
    //Recebe o conteudo da variavel sigla que será enviada na URL da requisição
    let uf = request.params.sigla

    //Chama a função que irá receber a sigla e retornar os dados referente ao estado
    let dados = estadosCidades.getDadosEstado(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado nenhum estado para retorno'})
    }

})

//EndPoint
app.get('/v1/estados-cidades/capital/estado', cors(), async function (request, response){
    //Recebe a variável sigla via Query String
    let uf = request.query.sigla
    //let codigo = request.query.codigo

    //Chama a função que irá receber a sigla e retornar os dados referente ao estado
    let dados = estadosCidades.getCapitalEstado(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado nenhum estado para retorno'})
    }

    // console.log(uf)
    // console.log(codigo)
})

//EndPoint
app.get('/v1/estados-cidades/estado/regiao', cors(), async function (request, response){

    //
    let regiao = request.query.regiao

    let dados = estadosCidades.getEstadosRegiao(regiao)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado nenhum estado para retorno'})
    }
})

//EndPoint
app.get('/v1/estados-cidade/capitais-pais', cors(), async function (request, response){

    let dados = estadosCidades.getCapitalPais()

    response.status(200)
    response.json(dados)
    
})

//EndPoint
app.get('/v1/estados-cidades/estados/cidade', cors(), async function(request, response){
    let uf = request.query.sigla

    let dados = estadosCidades.getCidades(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado nenhum estado para retorno'})
    }

})

//Executa a API e faz com que fique aguardando novas requisições
app.listen('7070', function(){
    console.log('API funcionando e aguardando requisições...')
})


/*****************************************************************************************************************/
//                         Varia de EndPoint para EndPoint!
//http://localhost:7070    /v1/estados-cidades/estados/:sigla
//                 3030                               /...

//http://localhost:7070/v1/estados-cidades/lista-estados-sigla
//
/*****************************************************************************************************************/