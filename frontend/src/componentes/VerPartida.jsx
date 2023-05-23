import React, { useState , useContext  } from 'react'
import VisualizaPGN from './VisualizaPGN'
import { Contexto } from '../App'


export default function VerPartida() {

  const  { statePartidaenPGN } = useContext (Contexto)
  const [ partidaenPGN , setPartidaenPGN ] = statePartidaenPGN
  const arrayCon=[]

  async function manexadorVer(){
    const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida?id=1")
    const partidaObx=await resposta.json()
    const partidaPGN=partidaObx.PGNGame
    setPartidaenPGN(partidaPGN)
    autoArray()
  }

  function autoArray() {
    arrayCon=partidaenPGN.split(" ")
    console.log (arrayCon)
  }

  return (
    <div>
      <button onClick={manexadorVer}>Ver Partida</button>
      {partidaenPGN && <VisualizaPGN partida={partidaenPGN}/>}
    </div>
  )
}
