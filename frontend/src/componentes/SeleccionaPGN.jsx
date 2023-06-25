import React, { useState , useContext } from 'react'
import style from '../css/VerLibro.module.css'
import { Contexto } from '../App'
import PartidaAuto from './PartidaAuto'
import VisualizaPGN from './VisualizaPGN'
import { BACKEND_URL } from "../config.mjs"

export default function SeleccionaPGN() {

  const  { statePartidaenPGN } = useContext (Contexto)
  const [ partidaenPGN , setPartidaenPGN ] = statePartidaenPGN
  const [ partidas , setPartidas ] = useState ([])
  const [ auto, setAuto ] = useState(true)
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

  let arrayCon=[]
  let arraySal=[]

    async function manexadorSelecciona(){
        const resposta =await fetch (BACKEND_URL+"/XadrezAPI/verpartida")
        const partidaObx=await resposta.json()

        setPartidas(partidaObx)
        setElexido(false)
        console.log(elexido)
      }

    async function manexadorVer(event){
      const resposta =await fetch (BACKEND_URL+"/XadrezAPI/verpartida/?id="+event.target.id)
      const partidaObx=await resposta.json()
      const partidaPGN=partidaObx.PGNGame
      setEvento(partidaObx.Event)
      setSite(partidaObx.Site)
      setData(partidaObx.Date)
      setRound(partidaObx.Round)
      setBlack(partidaObx.Black)
      setWhite(partidaObx.White)
      setResult(partidaObx.Result)
      setCodigoECO(partidaObx.ECO)    
      setPartidaenPGN(partidaPGN) 
      setElexido(true)
      setAuto(false)
      console.log(elexido)   
      }

    async function manexadorVerAuto(event){
    const resposta =await fetch (BACKEND_URL+"/XadrezAPI/verpartida/?id="+event.target.id)
    const partidaObx=await resposta.json()
    const partidaPGN=partidaObx.PGNGame
    arrayCon=partidaPGN.split(" ")
    
    for (let indice=0;indice<arrayCon.length;indice+=3) {    
      if (arrayCon[indice+1]) {arraySal.push(arrayCon[indice+1])}
      if (arrayCon[indice+2]) {arraySal.push(arrayCon[indice+2])}
      console.log(arraySal)
    }
    setPartidaenPGN(arraySal)
    setElexido(true)
    setAuto(true)    
  }

  return (
    <div>
        <button className={style.up} onClick={manexadorSelecciona}>Selecciona Partida</button>
        <ol className={style.centro}>
        {partidas.map(partida=><li key={partida.id} id={partida.id} onClick={manexadorVer}>{partida.PGNGame}</li>)}
        </ol>

        {/* <button onClick={manexadorVerAuto}>Ver Partida (Auto)</button> */}
        <button onClick={manexadorVer} disabled={ ! elexido }>Ver Partida (Xogada a xogada)</button>
        {/* {(elexido && auto) && <PartidaAuto autoPartida={partidaenPGN}/>} */}
        
        {elexido && <VisualizaPGN partida={partidaenPGN}/>}

      </div>
  )
}
