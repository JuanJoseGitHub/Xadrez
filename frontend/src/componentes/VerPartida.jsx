import React, { useState , useContext  } from 'react'
import VisualizaPGN from './VisualizaPGN'
import { Contexto } from '../App'
import PartidaAuto from './PartidaAuto'


export default function VerPartida() {

  const  { statePartidaenPGN } = useContext (Contexto)
  const [ partidaenPGN , setPartidaenPGN ] = statePartidaenPGN
  let arrayCon=[]
  let arraySal=[]

  async function manexadorVer(){
    const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida?id=1")
    const partidaObx=await resposta.json()
    const partidaPGN=partidaObx.PGNGame
    arrayCon=partidaPGN.split(" ")
    
    for (let indice=0;indice<arrayCon.length;indice+=3) {    
      if (arrayCon[indice+1]) {arraySal.push(arrayCon[indice+1])}
      if (arrayCon[indice+2]) {arraySal.push(arrayCon[indice+2])}
      console.log(arraySal)
    }
    setPartidaenPGN(arraySal)    
  }

  return (
    <div>
      <button onClick={manexadorVer}>Ver Partida</button>
      {partidaenPGN && <PartidaAuto autoPartida={partidaenPGN}/>}
    </div>
  )
}
