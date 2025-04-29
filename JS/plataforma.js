'use strict'

async function getPlataforma() {
    const url = `http://localhost:3030/v1/controle-jogos/plataforma`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function getPlataformaPorId(id) {
    const url = `http://localhost:3030/v1/controle-jogos/plataforma/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function postPlataforma() {
    const url = `http://localhost:3030/v1/controle-jogos/plataforma`

    const data = {
        "nome": "Nintendo"
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

async function putPlataforma(id,plataforma) {
    const url = `http://localhost:3030/v1/controle-jogos/plataforma/${id}`

    const options = {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(plataforma)
    }
    const response = await fetch(url,options)
    return response.ok
}

async function deletePlataforma(id) {
    const url = `http://localhost:3030/v1/controle-jogos/plataforma/${id}` 

    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url,options)
    return response.ok
}

//getPlataforma()
//getPlataformaPorId('1')
//postPlataforma()
//putPlataforma('1')
//deleteGenero('3')