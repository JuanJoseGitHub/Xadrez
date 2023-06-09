import express from 'express'
import cors from 'cors'

import { ECO, Game } from './db.mjs'

const part=[]

const app = express()
app.use(cors())
app.use(express.json())

app.post("/XadrezAPI/ECO/",async (peticion,resposta)=>{
    try {
        await ECO.create(peticion.body) 
        console.log(peticion.body)
        resposta.status(200)
        resposta.send("Apertura incorporada ao Libro")
        } catch (error) {
        resposta.status(500)
        resposta.send('Erro!')
        }
})

app.get("/XadrezAPI/ECO/busca/",async (peticion,resposta)=>{
    try {
        const ecoObx=await ECO.findAll({where:{Ascii:peticion.query.Ascii}})
        resposta.setHeader("Content-Type", "application/json")
        resposta.status(200)
        resposta.send(JSON.stringify(ecoObx))
        } catch (error) {
        resposta.status(500)
        resposta.send('Erro!')
        }
})

app.get("/XadrezAPI/ECO/",async (peticion,resposta)=>{
    try {
        const ecoObx=await ECO.findAll()
        resposta.setHeader("Content-Type", "application/json")
        resposta.status(200)
        resposta.send(JSON.stringify(ecoObx))
        } catch (error) {
        resposta.status(500)
        resposta.send('Erro!')
        }
})

app.get("/XadrezAPI/",(peticion,resposta)=>{
    try{
    resposta.status(200)
    resposta.send(`Benvido á API de xadrez
        <p>NODE_ENV: ${process.env.NODE_ENV}</p>
        <p>PORT: ${process.env.PORT}</p>`
        )
    
    } catch (error) {
        resposta.status(500)
        resposta.send('Erro!')
    }
})

app.get("/XadrezAPI/verECO/", async (peticion,resposta)=>{
    if (peticion.query.id) {
        try {
            const game=await ECO.findByPk(parseInt(peticion.query.id))
            resposta.setHeader("Content-Type", "application/json")
            resposta.status(200)
            resposta.send(game.toJSON())
            } catch (error) {
            resposta.status(500)
            resposta.send('Erro!')
            }
    } else {
        try {
            const totalgame=await ECO.findAll()
            resposta.setHeader("Content-Type", "application/json")
            resposta.status(200)
            resposta.send(JSON.stringify(totalgame))
        } catch (error) {
            resposta.status(500)
            resposta.send('Erro!')
        }
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

app.put("/XadrezAPI/cabeceira/",async (peticion,resposta)=>{
    try {
        const currentGame = await Game.findByPk(peticion.body.id)
        await currentGame.update(peticion.body)
        resposta.status(200)
        resposta.send("Cabeceira modificada en Base de Datos")
    }
    catch (error) {
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

app.listen(process.env.PORT ?? 8000, ()=>{
    console.log("[Escoitando]");
    console.log("NODE_ENV", process.env.NODE_ENV)
    console.log("PORT", process.env.PORT)
    }
)