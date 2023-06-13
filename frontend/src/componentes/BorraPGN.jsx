import React, { useState } from 'react'
import style from '../css/VerLibro.module.css'

export default function BorraPGN() {

  const [ partidas , setPartidas ] = useState ([])
  const [ elexido , setElexido ] = useState (false)

  async function manexadorSelecciona(){
    const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida")
    const partidaObx=await resposta.json()
    setPartidas(partidaObx)
  }

    async function manexadorBorra (event) {
        const resposta = await fetch ("http://localhost:8000/XadrezAPI/borra", 
          {
            method:'DELETE',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify (
                {
                  id:event.target.id
                }
            )
          }
        )
        alert ("Partida nº "+event.target.id+" borrada OK")
      } 
    
      return (
        <>  
        <button className={style.up} onClick={manexadorSelecciona}>Selecciona para borrar</button>
        <ol className={style.centro}>
         {partidas.map(partida=><li key={partida.id} id={partida.id} onClick={manexadorBorra}>{partida.PGNGame}</li>)}
        </ol>
        </>
      )
    }
  