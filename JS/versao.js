'use strict'

async function getVersao() {
    const url = `http://localhost:8080/v1/controle-jogos/versao`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

async function getVersaoPorId(id) {
    const url = `http://localhost:8080/v1/controle-jogos/versao/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function postVersao() {
    const url = `http://localhost:8080/v1/controle-jogos/versao`
    const data = {

        "nome_versao": "Minecraft: Mundo Aberto",
        "numero_versao": "4.30.000",
        "data_versao": "2025-04-24",
        "tamanho": "150.0 GB"
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

async function putVersao(id, versao) {
    const url = `http://localhost:8080/v1/controle-jogos/versao/${id}`

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(versao)
    }
    const response = await fetch(url,options)
    return response.ok
}

async function deleteVersao(id) {
    const url = `http://localhost:8080/v1/controle-jogos/versao/${id}`

    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url,options)
    return response.ok
}

//getVersao()
//getVersaoPorId('3')
//postVersao()
//putVersao('1')
//deleteVersao('3')