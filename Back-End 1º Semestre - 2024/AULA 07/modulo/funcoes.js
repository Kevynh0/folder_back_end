/************************************************************************************************
 * Objetivo: Manipular dados utilizando ARRAY e JSON
 * Data: 25/09/2024
 * Autor: Kevyn
 * Versão: 1.0
 ************************************************************************************************/

/*************************************************************
*  Array -> [] É utilizado para manipular uma lista de dados
*  JSON  -> {} É utilizado para organizar os dados
*************************************************************/

const comandosBasicos = function(){
    //Primeira maneira de criar um array
    let listaDeNomes = ['Maria', 'José', 'João', 'André', 10, true, '']

    //Imprimindo os dados do objeto listaDeNomes (array)
    console.log(listaDeNomes)

    //Imprime os dados do objeto listaDeNomes (array) em formato de tabela
    console.table(listaDeNomes)

    //Imprime o conteúdo de um indice
    console.log(listaDeNomes[1])

    //Retorna o tipo de dados de um indice do array
    console.log(typeof(listaDeNomes[5]))

    //Segunda maneira de criar um array
    let listaDeClientes = []

    listaDeClientes[0] = 'Luiz da Silva'
    listaDeClientes[1] = 'André da Silva'
    listaDeClientes[2] = 'Carlos da Silva'

    console.table(listaDeClientes)

    listaDeClientes[1] = 'Antonio da Silva'
    console.table(listaDeClientes)

    listaDeClientes[8] = 'Hugo da Silva'
    console.log(listaDeClientes)

    listaDeClientes[5] = 'Ana da Silva'
    console.log(listaDeClientes)

    console.log(typeof(listaDeClientes[6]))

    //Terceira maneira de criar um array
    let listaDeProdutos = []

    //Adiciona elementos no array no final
    listaDeProdutos.push('Mouse')
    listaDeProdutos.push('Teclado')
    listaDeProdutos.push('Monitor')
    listaDeProdutos.push('Memória')
    listaDeProdutos.push('HD')
    listaDeProdutos.push('SSD','Caixa de Som', 'Impressora')
    listaDeProdutos.push('Processador')

    console.table(listaDeProdutos)

    //Adiciona elementos no array no inicio
    listaDeProdutos.unshift('Placa de Vídeo')
    console.table(listaDeProdutos)

    //Ordenação de forma crescente
    //listaDeProdutos.sort()

    console.table(listaDeProdutos)

    //Permite remover o ultimo elemento do array
    listaDeProdutos.pop()
    console.table(listaDeProdutos)

    //Permite remover o primeiro elemento do array
    listaDeProdutos.shift()
    console.table(listaDeProdutos)

    //Permite remover um elemento conforme respectivo item, também podemos indica a quantidade de elementos a serem removidos
    //Ex. Remove o indice 3 e a quantidade de 2 elementos

    listaDeProdutos.splice(3,2)
    console.table(listaDeProdutos)

}

const percorrerArray = function(){
    let listaDeDisciplinas = []
    listaDeDisciplinas.push('Banco de Dados', 'Linguagem de Marcação', 'Projetos', 'Programação Back-End', 'Programação Front-End', 'Programação Mobile', 'Projetos 2')






    //Exemplo utilizando po WHILE
    console.log('********** WHILE **********')
    let contador = 0
    while(contador < listaDeDisciplinas.length){
    console.log(listaDeDisciplinas[contador])
    contador +=1
    }

    //Exemplo utilizando o FOR
    console.log('********** FOR **********')
    for (let contador = 0; contador < listaDeDisciplinas.length; contador++){
        console.log(listaDeDisciplinas[contador])
    }

    //Exemplo utlizando o ForEach
    //ForEach é uma estrutura de repetição aplicada somente para objetos do tipo ARRAY, ele retorna cada item do array através de uma função de call back
    console.log('********** FOREACH **********')
    listaDeDisciplinas.forEach(function(item){
        console.log(item)
    })

}

const filtrarProduto = function(nomeProduto){
    let nome = String(nomeProduto).toUpperCase()
    let status = false

    let produtos = []
    produtos.push('Mouse', 'Teclado', 'Monitor', 'Gabinete', 'Caixa de som', 'Placa de Vídeo', 'Placa mãe')

    // produtos.forEach(function(item){
    //     if(String(item).toUpperCase() == nome){
    //         status = true
    //     }
    // })

    //includes() -> Permite localizar um elemento dentro do array e retorna (true ou false)
//     produtos.forEach(function(item){
//         if(String(item).toUpperCase().includes(nome)){
//             status = true
//         }
// })

    // indexOF() -> Permite localizar um elemento dentro do aray e retorna (0 ou -1)
    produtos.forEach(function(item){
        if(String(item).toUpperCase().indexOf(nome) == 0)
         status = true
    })


    return status
}

const conceitoJSON = function(){
    //Cria um JSON de atributo de clientes
    //Primeira forma de criar objetos JSON
    let cliente = {nome: 'José da Silva', telefone: '40028922',email: 'jose@gmail.com'}
    //Exibe o objeto JSON com os seus atributos
    console.log(cliente)
    console.table(cliente)

    //Exibe atributos individuais do objeto JSON
    console.log(cliente.nome)
    console.log(cliente.email)

    //Segunda forma de criar objetos JSON
    let cliente2 = {}
    cliente2.nome = 'Maria da Silva'
    cliente2.telefone = '40028922'
    cliente2.email = 'maria@gmail.com'

    console.log(cliente2)

    let listaDeClientes = []
    listaDeClientes.push(cliente, cliente2)

    console.log(listaDeClientes)
    console.table(listaDeClientes)

    console.log(listaDeClientes[1].nome)
    console.log(listaDeClientes[1].email)

    //Percorreu o array de clienres e exibiu apenas o atributo nome
    listaDeClientes.forEach(function(item){
        console.log(item.nome)
    })
}


const cadastroProdutos = function(){
    let cores = []
    cores.push(
        {nome: 'Preto', hexadecimal: '#000000'},
        {nome: 'Branco', hexadecimal: '#ffffff'},
        {nome: 'Azul', hexadecimal: '#04398f'},
        {nome: 'Cinza', hexadecimal: '#686869'},
        {nome: 'Rosa', hexadecimal: '#ca07db'}
    )
    let categoria = []
    categoria.push(
        {nome: 'Hardware'},
        {nome: 'Periféricos'},
        {nome: 'Computadores'},
        {nome: 'Games'},
        {nome: 'Acessórios'},
        {nome: 'Escritório'}
    )
    let marcas = []
    marcas.push(
        {nome: 'Dell Computadores LTDA', nomeFantasia: 'Dell', telefone: '1140028922', email: 'compras@dell.com.br'},
        {nome: 'Microsoft Tecnologias SA', nomeFantasia: 'Microsoft', telefone: '1740028922', email: 'microsoft@microsoft.com.br'},
        {nome: 'Positivo SA', nomeFantasia: 'Positivo', telefone: '6940028922', email: 'pedidos@positivos.com.br'},
        {nome: 'Apple Corporation BIA', nomeFantasia: 'Apple', telefone: '7740028922', email: 'apple@apple.com.br'}
    )
    let produtos = []
    produtos.push(
        {nome: 'Mouse', descricao: 'Mouse com fio', preço: '80.50', quantidade: 50, cor: cores, 
        categorias: [
            categoria[1], 
            categoria[2], 
            categoria[3], 
            categoria[4], 
            categoria[5]
        ],
            marca: [
                {
                    nome: marcas[0].nomeFantasia,
                    nomeCompleto: marcas[0].nome
                }
            ]
        },
    /*****************************************************************************************************************************************/
        {nome: 'Teclado', descricao: 'Teclsdo com fio', preco: '120.00', quantidade: 35, 
        cor: [
            cores[0], cores[1], cores[3]
        ], 
        categorias: [
            categoria[1], 
            categoria[2], 
            categoria[3], 
            categoria[4], 
            categoria[5]
        ],
        marca: [
            {
                nome: marcas[1].nomeFantasia,
                nomeCompleto: marcas[1].nome
            }
        ]
        },
    /*****************************************************************************************************************************************/
        {nome: 'Placa de vídeo', descricao: 'Placa de vídeo com RGB', preco: '999.90', quantidade: 20, 
        cor: [
            cores[0], cores[1], cores[2]
        ],
        categorias: [
            categoria[0],
            categoria[2],
            categoria[3]
        ],
        marca: [
            {
                    nome: marcas[2].nomeFantasia,
                    nomeCompleto: marcas[2].nome
            }
        ]
        },
    /*****************************************************************************************************************************************/
        {nome: 'Caixa de som', descricao: 'Caixa de som com 50 watts RMS!', preco: '559.90', quantidade: 70, 
        cor: [
            cores[0], cores[1]
        ],
        categorias: [
            categoria[1],
            categoria[4]
        ],
        marca: [
            {
                    nome: marcas[3].nomeFantasia,
                    nomeCompleto: marcas[3].nome
            }
        ]
        },
    /*****************************************************************************************************************************************/
        {nome: 'SSD', descricao: 'SSD com 1TB de armazenamento!', preco: '229.90', quantidade: 150, 
            cor: [
                cores[0]
            ],
            categorias: [
                categoria[0]
            ],
            marca: [
                {
                        nome: marcas[3].nomeFantasia,
                        nomeCompleto: marcas[3].nome
                }
            ]
            }
    )
    return produtos
}

const pesquisarProduto = function(nome){
    let nomeProduto = String(nome).toUpperCase()
    let listaDeProdutos = cadastroProdutos()
    let produtosEncontrados = []

    listaDeProdutos.forEach(function(item){
        if(String(item.nome). toUpperCase() == nomeProduto){
            produtosEncontrados.push(item)
        }
    })

    if(produtosEncontrados.length > 0){
        return produtosEncontrados
    }else{
        return false
    }
    return produtosEncontrados
}

const listarProdutos = function(nome){
    let resultadoPesquisa = pesquisarProduto(nome)

    if(resultadoPesquisa != false){
        resultadoPesquisa.forEach(function(item){
            console.log(`Nome do produto: ${item.nome}`)
            console.log(`Detalhes do produto: ${item.descricao}`)
            console.log(`Preço do produto: ${item.preco}`)
            console.log(`Quantidade em estoque: ${item.quantidade}`)

            //Percorre as cores para colocar na tela
            item.cor.forEach(function(itemCor){
                console.log(`-- Cor: ${itemCor.nome}`)
            })

            //Percorre as categorias para colocar na tela
            item.categorias.forEach(function(itemCategorias){
                console.log(`-- Categoria: ${itemCategorias.nome}`)
            })

            //Percorre as marcas para colocar na tela
            item.marca.forEach(function(itemMarca){
                console.log(`-- Marca: ${itemMarca.nome}`)
            })
        })
    }
}

// comandosBasicos()
// percorrerArray()
// console.log(filtrarProduto('ssd'))
// conceitoJSON()
// cadastroProdutos()
listarProdutos('mouse')


//sort() é um método
