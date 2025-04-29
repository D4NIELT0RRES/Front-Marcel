'use strict'

async function getGenero() {
    const url = `http://localhost:3030/v1/controle-jogos/genero`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data

}

async function getGeneroPorId(id) {
    const url = `http://localhost:3030/v1/controle-jogos/genero/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function postGenero() {
    const url = `http://localhost:3030/v1/controle-jogos/genero`

    const data = {
        "tipo_de_categoria": "Aventura"
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

async function putGenero(id,genero) {
    const url = `http://localhost:3030/v1/controle-jogos/genero/${id}`

    const options = {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(genero)
    }
    const response = await fetch(url,options)
    return response.ok
}

async function deleteGenero(id) {
    const url = `http://localhost:3030/v1/controle-jogos/genero/${id}`

    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url,options)
    return response.ok
}

//getGenero()
//getGeneroPorId('2')
//postGenero()
//putGenero('1')
//deleteGenero('3')