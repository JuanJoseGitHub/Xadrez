import React, { useState } from 'react'
import style from '../css/VerLibro.module.css'

export default function CambiaCabeceiraPGN() {

    const [ partidas , setPartidas ] = useState ([])
    const [ elexido , setElexido ] = useState (false)
    
    async function manexadorSelecciona(){
        const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida")
        const partidaObx=await resposta.json()
        setPartidas(partidaObx)
      }

    
      async function manexadorCambia (event) {
        const reposta=await fetch ("http://localhost:8000/XadrezAPI/verpartida")
        const partidaObx=await resposta.json()
        console.log(partidaObx)
    

        const resposta = await fetch ("http://localhost:8000/XadrezAPI/cabeceira", 
          {
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify (
                {
                  id:event.target.id
                }
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
