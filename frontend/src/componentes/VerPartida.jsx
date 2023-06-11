import React, { useState , useContext  } from 'react'
import { Contexto } from '../App'
import style from '../css/VerLibro.module.css'
import PartidaAuto from './PartidaAuto'
import VisualizaPGN from './VisualizaPGN'

export default function VerPartida() {

  const  { statePartidaenPGN } = useContext (Contexto)
  const [ partidaenPGN , setPartidaenPGN ] = statePartidaenPGN
  const [ auto, setAuto ] = useState(true)
  const [elexido,setElexido] = useState(false)
  let arrayCon=[]
  let arraySal=[]

  async function manexadorVerAuto(){
    const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida?id=1")
    const partidaObx=await resposta.json()
    const partidaPGN=partidaObx.PGNGame
    arrayCon=partidaPGN.split(" ")
    
    for (let indice=0;indice<arrayCon.length;indice+=3) {    
      if (arrayCon[indice+1]) {arraySal.push(arrayCon[indice+1])}
      if (arrayCon[indice+2]) {arraySal.push(arrayCon[indice+2])}
    }
    setPartidaenPGN(arraySal)
    setElexido(true)
    setAuto(true)    
  }

  async function manexadorVer(){
    const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida?id=1")
    const partidaObx=await resposta.json()
    const partidaPGN=partidaObx.PGNGame
    setPartidaenPGN(partidaPGN) 
    setElexido(true)
    setAuto(false)   
  }

  return (
    <div>
      <button className={style.centrado} onClick={manexadorVerAuto}>Ver Partida (Auto)</button>
      <button className={style.centrado} onClick={manexadorVer}>Ver Partida (Xogada a xogada)</button>
      {(elexido && auto) && <PartidaAuto autoPartida={partidaenPGN}/>}
      {(elexido && !auto) && <VisualizaPGN partida={partidaenPGN}/>}
    </div>
  )
}
