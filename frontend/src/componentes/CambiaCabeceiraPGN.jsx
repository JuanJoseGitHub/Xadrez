import React, { useState } from 'react'
import style from '../css/VerLibro.module.css'
import { useContext} from 'react'
import { Contexto } from "../App"

export default function CambiaCabeceiraPGN() {

    const [ partidas , setPartidas ] = useState ([])
    const [ elexido , setElexido ] = useState (false)
    const { stateWhite } = useContext (Contexto)
    const [ white , setWhite ] = stateWhite
    const { stateBlack } = useContext (Contexto)
    const [ black , setBlack ] = stateBlack
    const {stateEvento} = useContext (Contexto)
    const [evento , setEvento] = stateEvento
    const { stateSite } = useContext (Contexto)
    const [site , setSite] = stateSite
    const { stateData } = useContext (Contexto)
    const [data , setData] = stateData
    const { stateRound } = useContext (Contexto)
    const [round , setRound] = stateRound
    const {stateResult } = useContext (Contexto)
    const [result , setResult] = stateResult
    const { stateCodigoECO } = useContext (Contexto)
    const [ codigoECO , setCodigoECO ] = stateCodigoECO
    
    async function manexadorSelecciona(){
        const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida")
        const partidaObx=await resposta.json()
        setPartidas(partidaObx)
      }

      async function manexadorCambia (event) {
        const resposta2=await fetch ("http://localhost:8000/XadrezAPI/verpartida/?id="+event.target.id)
        const partidaObx=await resposta2.json()
        alert("Partida nº "+event.target.id+" cabeceira modificada correctamente")

        partidaObx.Event=evento
        partidaObx.Site=site
        partidaObx.Date=data
        partidaObx.Round=round
        partidaObx.Black=black
        partidaObx.White=white
        partidaObx.Result=result
        partidaObx.ECO=codigoECO

        const resposta = await fetch ("http://localhost:8000/XadrezAPI/cabeceira/", 
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
        <p className={style.centrado}>Brancas:{white}</p>
        <p className={style.centrado}>Negras:{black}</p>
        <p className={style.centrado}>Evento:{evento}</p>
        <p className={style.centrado}>Lugar:{site}</p>
        <p className={style.centrado}>Rolda:{round}</p>
        <p className={style.centrado}>Data:{data}</p>
        <p className={style.centrado}>Resultado:{result}</p>
        <p className={style.centrado}>ECO:{codigoECO}</p>
        <ol className={style.centro}>
         {partidas.map(partida=><li key={partida.id} id={partida.id} onClick={manexadorCambia}>{partida.PGNGame}</li>)}
        </ol>
    </>   
  )
}
