'use strict'


async function getEmpresa() {
    const url = `http://localhost:3030/v1/controle-jogos/empresa`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

async function getEmpresaPorId(id) {
    const url = `http://localhost:3030/v1/controle-jogos/empresa/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function postEmpresa() {
    const url = `http://localhost:3030/v1/controle-jogos/empresa`
    const data = {

        
        "nome": "SESI",
        "descricao": "A Sony é uma empresa de tecnologia",
        "tipo_de_empresa": "Criadora",
        "fundador": "Akio",
        "pais_origem": "Japão",
        "foto_capa_empresa": "http://foto.jpg"
        
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

async function putEmpresa(id,empresa) {
    const url = `http://localhost:3030/v1/controle-jogos/empresa/${id}`

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(empresa)
    }
    const response = await fetch(url,options)
    return response.ok
}

async function deleteEmpresa(id) {
    const url = `http://localhost:3030/v1/controle-jogos/empresa/${id}`

    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url,options)
    return response.ok
}

//getEmpresa()
//getEmpresaPorId('3')
//postEmpresa()
//putEmpresa('1')
//deleteEmpresa('3')