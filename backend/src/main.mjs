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

const Game = sequelize.define('Game', {
    Event:{type: DataTypes.STRING},
    Site:{type: DataTypes.STRING},
    Date:{type: DataTypes.DATE},
    Round:{type: DataTypes.STRING},
    White:{type: DataTypes.STRING},
    Black:{type: DataTypes.STRING},
    Result:{type: DataTypes.STRING},

})
// var router = express.Router()

// router.get("/", function (req,res) {
//     res.send("Benvido á API de xadrez")
// })

app.get("/XadrezAPI/",(peticion,resposta)=>{
    resposta.status(200)
    resposta.send("Benvido á API de xadrez")
    // resposta.json({mensaje:'!Ola'})
})

app.get("/:nombre", function(peticion,resposta) {
 resposta.send('Ola '+peticion.params.nombre)
})

app.post("/XadrezAPI/partida/",(peticion,resposta)=>{
     console.log(peticion.body)
     resposta.status(200)
     resposta.send("Partida recibida POST OK")
})

app.delete("/XadrezAPI/borra/",function(peticion,resposta){
    console.log(peticion.params.Nome)
    resposta.status(200)
    resposta.send("Partida borrada")
    
})


app.listen(8000,()=>{console.log("[Escoitando]");})

// const resposta=await fetch("http://localhost:8000/XadrezAPI/partida/")
// const datos=await resposta.text()
// console.log(datos)

