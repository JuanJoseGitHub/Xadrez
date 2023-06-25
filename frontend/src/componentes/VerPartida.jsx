import React, { useState , useContext  } from 'react'
import { Contexto } from '../App'
import style from '../css/VerLibro.module.css'
import PartidaAuto from './PartidaAuto'
import VisualizaPGN from './VisualizaPGN'
import { BACKEND_URL } from "../config.mjs"

export default function VerPartida() {

  const  { statePartidaenPGN } = useContext (Contexto)
  const [ partidaenPGN , setPartidaenPGN ] = statePartidaenPGN
  const [ auto, setAuto ] = useState(true)
  const [elexido,setElexido] = useState(false)
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
  
  let arrayCon=[]
  let arraySal=[]

  comun()

  async function comun(){
  const resposta =await fetch (BACKEND_URL+"/XadrezAPI/verpartida?id=1")
  const partidaObx=await resposta.json()
      setEvento(partidaObx.Event)
      setSite(partidaObx.Site)
      setData(partidaObx.Date)
      setRound(partidaObx.Round)
      setBlack(partidaObx.Black)
      setWhite(partidaObx.White)
      setResult(partidaObx.Result)
      setCodigoECO(partidaObx.ECO)
}

  async function manexadorVerAuto(){
    const resposta =await fetch (BACKEND_URL+"/XadrezAPI/verpartida?id=1")
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
    const resposta =await fetch (BACKEND_URL+"/XadrezAPI/verpartida?id=1")
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
        <p className={style.centrado}>Brancas:{white}</p>
        <p className={style.centrado}>Negras:{black}</p>
        <p className={style.centrado}>Evento:{evento}</p>
        <p className={style.centrado}>Lugar:{site}</p>
        <p className={style.centrado}>Rolda:{round}</p>
        <p className={style.centrado}>Data:{data}</p>
        <p className={style.centrado}>Resultado:{result}</p>
        <p className={style.centrado}>ECO:{codigoECO}</p> 
      {(elexido && auto) && <PartidaAuto autoPartida={partidaenPGN}/>}
      {(elexido && !auto) && <VisualizaPGN partida={partidaenPGN}/>}
    </div>
  )
}
