import React, { useState } from 'react'
import style from '../css/VerLibro.module.css'

export default function CambiaCabeceiraPGN() {

    const [ partidas , setPartidas ] = useState ([])
        
    async function manexadorSelecciona(){
        const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida")
        const partidaObx=await resposta.json()
        setPartidas(partidaObx)
      }

      async function manexadorCambia (event) {
        const resposta2=await fetch ("http://localhost:8000/XadrezAPI/verpartida/?id="+event.target.id)
        const partidaObx=await resposta2.json()
        console.log(partidaObx)

        partidaObx.Event="www.xadrez.es"
        partidaObx.Site="Santiago de Compostela"
        partidaObx.Date="2023.06.07"
        partidaObx.Round="1ª"
        partidaObx.Black="Negro"
        partidaObx.White="Blanco"
        partidaObx.Result="1-0"

        const resposta3 = await fetch ("http://localhost:8000/XadrezAPI/cabeceira/", 
          {
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify (
                partidaObx
            )
          }
        )
      } 

  return (
    <>
        <button className={style.up} onClick={manexadorSelecciona}>Selecciona cabeceira</button>
        <ol className={style.centro}>
         {partidas.map(partida=><li key={partida.id} id={partida.id} onClick={manexadorCambia}>{partida.PGNGame}</li>)}
        </ol>
    </>   
  )
}
