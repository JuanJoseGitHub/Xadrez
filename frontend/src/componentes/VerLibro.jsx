import React, { useState , useContext } from 'react'
import style from '../css/VerLibro.module.css'
import { Contexto } from '../App'
import { Chess } from 'chess.js'

import VisualizaPGN from './VisualizaPGN'
import PartidaAuto from './PartidaAuto'

export default function VerLibro() {

  const chess=new Chess()

  const  { statePartidaenPGN } = useContext (Contexto)
  const [ partidaenPGN , setPartidaenPGN ] = statePartidaenPGN
  const [ partidas , setPartidas ] = useState ([])
  const [ elexido , setElexido ] = useState (false)
  let [ECO,setECO] = useState("")
  let [opName,setOpName] = useState("") 
  let [myGame,setMyGame] = useState ("")

    async function manexadorSelecciona(){
        const resposta =await fetch ("http://localhost:8000/XadrezAPI/verECO")
        const partidaObx=await resposta.json()
        setPartidas(partidaObx)
      }

    async function manexadorVer(event){
      const resposta =await fetch ("http://localhost:8000/XadrezAPI/verECO/?id="+event.target.id)
      const partidaObx=await resposta.json()
      const partidaenPGN=partidaObx.OpeningPlayed
      const ECO=partidaObx.ECOcode
      const OName=partidaObx.OpeningName
      setECO(ECO)
      setOpName(OName)
      setPartidaenPGN(partidaenPGN) 
      setElexido(true) 
      chess.loadPgn(partidaenPGN)
      setMyGame(chess.history())
      console.log(myGame)
      }

  return (
    <> 
    <button className={style.up} onClick={manexadorSelecciona}>Selecciona Partida</button>
    <ol className={style.centro}>
      {partidas.map(partida=><li key={partida.id} id={partida.id} onClick={manexadorVer}>{partida.ECOcode+" "+partida.OpeningName+" "+partida.OpeningPlayed}</li>)}
    </ol>
    <p className={style.dereita}></p>
    <div className={style.dereita}>
      <p>{ECO}</p>
      <p>{opName}</p>
      <br></br>
      <p>{partidaenPGN}</p>
    </div>
    
    {elexido && <PartidaAuto autoPartida={myGame}></PartidaAuto>}
    {/* {elexido && <VisualizaPGN partida={myGame}></VisualizaPGN>} */}
    </>
  )
}
