'use strict'

//EndPoint para inserir um jogo no banco de dados
async function postJogo() {
    const url = `http://localhost:3030/v1/controle-jogos/jogo`

    const data = {

        "nome": "EA2024",
        "data_lancamento": "1986-06-03",
        "versao": "1.0",
        "tamanho": "500KB",
        "descricao": "Jogo bem legal para diversão",
        "foto_capa": "http://foto.jpg",
        "link": "http://downloadJogo.zip"
    
    }

    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url,options)
    if(response.status == 201){
        alert('POSTAGEM INSERIDA')
    }
    return response.ok

}

async function getJogos() {
    const url = `http://localhost:3030/v1/controle-jogos/jogo`

    const response = await fetch(url)

    const data = await response .json()
   console.log(data.games)

    return data
}

async function getJogo(id) {
    const url = `http://localhost:3030/v1/controle-jogos/jogo/${id}`

    const response = await fetch(url)
    

    const data = await response.json()

    console.log(data)
    return data
}

async function deleteJogo(id) {
    
    const url = `http://localhost:3030/v1/controle-jogos/jogo${id}`

    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url,options)
    return response.ok
}

//EndPoint para atualizar um jogo pelo ID
async function putJogos(id,jogo) {
    const url = `http://localhost:3030/v1/controle-jogos/jogo/:${id}`

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogo)
    }
    const response = await fetch(url,options)
    return response.ok

}



//postJogo()
//getJogos()
//getJogo('1')
deleteJogo('1')
