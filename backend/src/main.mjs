import express from 'express'
import cors from 'cors'

const part=[]
const app = express()

app.use(cors())
app.use(express.json())

app.get("/XadrezAPI/",(peticion,resposta)=>{
    resposta.status(200)
    resposta.send("Benvido á API de xadrez")
})

app.post("/XadrezAPI/partida/",(peticion,resposta)=>{
     console.log(peticion.body)
     resposta.status(200)
     resposta.send("Partida recibida OK")
})

app.listen(8000,()=>{console.log("[Escoitando]");})

// const resposta=await fetch("http://localhost:8000/XadrezAPI/partida/")
// const datos=await resposta.text()
// console.log(datos)

