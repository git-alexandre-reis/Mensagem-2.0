const express = require('express')
const app = express()
const PORT = process.env.PORT || 8084
const mySql = require('./controll/dbConnection').POOL
const cors = require('cors')
//Importar as rotas de mensagens
    //const mensagens = require('./controll/routes/mensagens')
//Configurações
    //Configuração do Body Parser
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    //Cors
        app.use(cors({origin:"*"}))

//Rota Principal - Traz registros aleatórios da tabela de mensagens
    app.get('/', (req, res)=>{
        mySql.getConnection((error, conn)=>{
            if(error){return res.send({error:error})}
            conn.query(
                "SELECT descricao FROM tbMensagem ORDER BY RAND() LIMIT 1",
                (error, result)=>{
                    if(error){return res.send({error:error})}
                    conn.release()
                    return res.send(result)
                }
            )
        })
    })

//Rotas de Mensagens
    //app.use('/mensagem', mensagens)

//Servidor
    app.listen(PORT, ()=>{
        console.log('Servidor OnLine na porta: ' + PORT)
    })