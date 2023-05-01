import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get("/XadrezAPI/",(peticion,resposta)=>{
    resposta.status(200)
    resposta.send("Benvido á API de xadrez")
})

app.listen(3000,()=>{console.log("[Escoitando]");})
