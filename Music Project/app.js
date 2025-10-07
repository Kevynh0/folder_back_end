/************************************************************************************************
* Objetivo: Criar uma API para realizar integração com Banco de dados
* Data: 11/02/2025
* Autor: Kevyn
* Versão: 1.0
* Observações:
*** Para criar a API precisa instalar:
*       express             npm install express --save
*       cors                npm install cors --save
*       body-parser         npm install body-parser --save
*** Para criar a conexão com banco de dados precisa instalar:
*       prisma              npm install prisma --save
*       @prisma/client      npm install @prisma/client --save
*
* Após a instalação do prisma e @prisma/client, devemos:
*       npx prisma init     Para inicializar o prisma no projeto
* Após esse comando você deverá configurar o .env e o schema.prisma, e rodar o comando:
*       npx prisma migrate dev
************************************************************************************************/

//Import das bibliotecas para criar a API
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Import da 
const controllerMusica = require('./controller/musica/controllerMusica')

//Cria um objeto para o body do tipo JSON
const bodyParserJSON = bodyParser.json()

//Cria um objeto do app para criar a API
const app = express()


//Configurações de permissões do CORS para a API
app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    app.use(cors())
    next()
})

//Endpoint para inserir uma música
app.post('/v1/controle-musicas/musica', cors(), bodyParserJSON, async function (request, response){

    //Recebe o content-type da requisição
    let contentType = request.headers['contentType']

    //Recebe os dados do body da requisição
    let dadosBody = request.body

    //Chama a função da controller para inserir os dados e aguarda o retorno da função
    let resultMusica = await controllerMusica.inserirMusica(dadosBody, contentType)

    response.status(resultMusica.status_code)
    response.json(resultMusica)

})

//Endpoint para buscar uma música pelo ID
app.get('/v1/controle-musicas/musica/:id', cors(), async function (request, response){

    //Recebe o ID
    let idMusica = request.params.id

    //Chama a função
    let resultMusica = await controllerMusica.buscarMusica(idMusica)

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})

//Endpoint para listar as músicas do BD
app.get('/v1/controle-musicas/musica', cors(), async function (request, response){

    let resultMusica = await controllerMusica.listarMusica()

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})

//Endpoint para excluir uma música do BD
app.delete('/v1/controle-musicas/musica/:id', cors(), async function(request, response){

    //Recebe o ID
    let idMusica = request.params.id

    //Chama a função
    let resultMusica = await controllerMusica.excluirMusica(idMusica)

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})

app.put('/v1/controle-musicas/musica/:id', cors(), bodyParserJSON, async function(request, response){

    //Recebe o contentType da requisição
    let contentType = request.headers['content-type']

    //Recebe o ID da música
    let idMusica = request.params.id

    //Recebe os dados do corpo da requisição
    let dadosBody = request.body

    //Chama a função e encaminha os argumentos de: ID, Body e Content-Type
    let = resultMusica = await controllerMusica.atualizarMusica(idMusica, dadosBody, contentType)

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})

app.listen(7070, function(){
    console.log('API aguardando requisições...')
})