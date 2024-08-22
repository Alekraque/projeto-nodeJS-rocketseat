
import http from 'node:http'

const users = []
const server = http.createServer((req, res)=>{
    const { method, url } = req

    if(method == 'GET' && url == '/users'){
        return res
        .setHeader('content-type', 'aplication/json')
        .end(JSON.stringify(users))
    }

    if(method == 'POST' && url == '/users'){
        users.push({
            id: 1,
            name: 'Alex',
            email: 'alexmaia@exemple.com',
            password: 'teclados223',
        })
        return res.writeHead(201).end('usuário criado')
    }

    return res.writeHead(402).end('error 402: Not found')
})
server.listen(3333)
 