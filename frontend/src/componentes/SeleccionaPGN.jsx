import React, { useState , useContext } from 'react'
import style from '../css/VerLibro.module.css'
import { Contexto } from '../App'
import PartidaAuto from './PartidaAuto'
import VisualizaPGN from './VisualizaPGN'

export default function SeleccionaPGN() {

  const  { statePartidaenPGN } = useContext (Contexto)
  const [ partidaenPGN , setPartidaenPGN ] = statePartidaenPGN
  const [ partidas , setPartidas ] = useState ([])
  const [ auto, setAuto ] = useState(true)
  const [ elexido , setElexido ] = useState (false)
  let arrayCon=[]
  let arraySal=[]

    async function manexadorSelecciona(){
        const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida")
        const partidaObx=await resposta.json()
        setPartidas(partidaObx)
        setElexido(false)
      }

    async function manexadorVer(event){
      const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida/?id="+event.target.id)
      const partidaObx=await resposta.json()
      const partidaPGN=partidaObx.PGNGame
      setPartidaenPGN(partidaPGN) 
      setElexido(true)
      setAuto(false)   
      }

    async function manexadorVerAuto(event){
    const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida/?id="+event.target.id)
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
        <button onClick={manexadorVer}>Ver Partida (Xogada a xogada)</button>
        {/* {(elexido && auto) && <PartidaAuto autoPartida={partidaenPGN}/>} */}
        {(elexido && !auto) && <VisualizaPGN partida={partidaenPGN}/>}
      </div>
  )
}
