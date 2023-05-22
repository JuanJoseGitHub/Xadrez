import React, { useState , useContext  } from 'react'
import VisualizaPGNMover from './VisualizaPGNMover'
import { Contexto } from '../App'


export default function VerPartida() {

  const  [ partidaenPGN, setPartidaenPGN ] = useContext (Contexto)
  // const  { statePartidaenPGN } = useContext (Contexto)
  // const [ partidaenPGN, setPartidaenPGN ] = statePartidaenPGN

  async function manexadorVer(){
    const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida?id=1")
    const partidaObx=await resposta.json()
    const partidaPGN=partidaObx.PGNGame
    setPartidaenPGN(partidaPGN)
  }

  return (
    <div>
      <button onClick={manexadorVer}>Ver Partida</button>
      {partidaenPGN && <VisualizaPGNMover partida={partidaenPGN}/>}
    </div>
  )
}
