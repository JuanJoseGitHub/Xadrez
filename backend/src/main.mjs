import express from 'express'
import cors from 'cors'
import { Sequelize, DataTypes } from 'sequelize'

const part=[]

const app = express()
app.use(cors())
app.use(express.json())

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/partidas.sqlite'
})

//Comprobar conexión
try{
    await sequelize.authenticate()
    console.warn("[ Conexión coa Base de Datos partidas.sqlite ]");
}   catch (error) {
    console.error("[ Non podo conectar con partidas.sqlite ]");
}

const Game = sequelize.define('Game', {
    Event:{type: DataTypes.STRING},
    Site:{type: DataTypes.STRING},
    Date:{type: DataTypes.STRING},
    Round:{type: DataTypes.STRING},
    White:{type: DataTypes.STRING},
    Black:{type: DataTypes.STRING},
    Result:{type: DataTypes.STRING},
    PGNGame:{type:DataTypes.STRING}
})
await sequelize.sync({ alter:true })

app.get("/XadrezAPI/",(peticion,resposta)=>{
    try{
    resposta.status(200)
    resposta.send("Benvido á API de xadrez")
    } catch (error) {
        resposta.status(500)
        resposta.send('Erro!')
    }
})

app.get("/XadrezAPI/verpartida/", async (peticion,resposta)=>{
    if (peticion.query.id) {
        try {
            const game=await Game.findByPk(peticion.query.id)
            resposta.setHeader("Content-Type", "application/json")
            resposta.status(200)
            resposta.send(game.toJSON())
            } catch (error) {
            resposta.status(500)
            resposta.send('Erro!')
            }
    } else {
        try {
            const totalgame=await Game.findAll()
            resposta.setHeader("Content-Type", "application/json")
            resposta.status(200)
            resposta.send(JSON.stringify(totalgame))
        } catch (error) {
            resposta.status(500)
            resposta.send('Erro!')
        }
    }
})

app.post("/XadrezAPI/partida/",async (peticion,resposta)=>{
    try {
        await Game.create(peticion.body) 
        console.log(peticion.body)
        resposta.status(200)
        resposta.send("Partida incorporada á Base de Datos")
        } catch (error) {
        resposta.status(500)
        resposta.send('Erro!')
        }
})

app.delete("/XadrezAPI/borra/", async (peticion,resposta)=>{
    try {
        const game = await Game.findByPk(peticion.body.id)
        await game.destroy()
        console.log("Borrando:"+peticion.body.id)
        resposta.status(200)
        resposta.send("Partida borrada")
        } catch (error) {
        resposta.status(500)
        resposta.send('Erro!')
        }
})

app.listen(8000,()=>{console.log("[Escoitando]");})