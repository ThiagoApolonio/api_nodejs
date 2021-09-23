const express = require('express')
const routes = express.Router()

/** dados ficticio de BD============================================================ 
Selecionar dados : GET,
Inserir dados : POST,
Modificar dados : PUSH,
Deletar dados :DELETE
*/
let db = [
    { "1": { Nome: "Pessoa 1", Idade: "21" } },
    { "2": { Nome: "Pessoa 2", Idade: "22" } },
    { "3": { Nome: "Pessoa 3", Idade: "23" } },
]
/** Requisiçoes ===================================================================*/

/**Buscar Dados */
routes.get('/', (req, res) => {
    return res.json(db)
})

/**Inserir Dados */
routes.post('/postRequest',(req, res) => {
    const body = req.body
    if(!body) return res.status(404).end()
    db.push(body)
    return res.json(body)
})

/**Deleta Dados */
routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
if(item[id])
return item
    })
    db = newDB
return res.send(newDB)
})


module.exports = routes
