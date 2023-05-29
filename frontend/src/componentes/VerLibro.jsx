import React, { useState , useContext } from 'react'
import style from '../css/SeleccionaPartida.module.css'
import { Contexto } from '../App'
import PartidaAuto from './PartidaAuto'
import VisualizaPGN from './VisualizaPGN'

export default function VerLibro() {

  const  { statePartidaenPGN } = useContext (Contexto)
  const [ partidaenPGN , setPartidaenPGN ] = statePartidaenPGN
  const [ partidas , setPartidas ] = useState ([])
  const [ auto, setAuto ] = useState(true)
  const [ elexido , setElexido ] = useState (false)
  let arrayCon=[]
  let arraySal=[]

    async function manexadorSelecciona(){
        const resposta =await fetch ("http://localhost:8000/XadrezAPI/verECO")
        const partidaObx=await resposta.json()
        setPartidas(partidaObx)
      }

    async function manexadorVer(event){
      const resposta =await fetch ("http://localhost:8000/XadrezAPI/verECO/?id="+event.target.id)
      const partidaObx=await resposta.json()
      const partidaenPGN=partidaObx.OpeningPlayed

      let partidaPGN = partidaenPGN.replaceAll(".",". ")
      
      setPartidaenPGN(partidaPGN) 
      setElexido(true)
      setAuto(false)  
      console.log(partidaPGN) 
      }

    async function manexadorVerAuto(event){
    const resposta =await fetch ("http://localhost:8000/XadrezAPI/verECO/?id="+event.target.id)
    const partidaObx=await resposta.json()
    const partidaPGN=partidaObx.OpeningPlayed
    partidaPGN.replace('.','. ')
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
    <> 
    <button onClick={manexadorSelecciona}>Selecciona Partida</button>
    <ol className={style.centro}>
      {partidas.map(partida=><li key={partida.id} id={partida.id} onClick={manexadorVer}>{"ID["+partida.id+"]  "+partida.OpeningPlayed}</li>)}
    </ol>
    {partidaenPGN}
    {elexido && <VisualizaPGN partida={partidaenPGN}/>}
    {/* {elexido && <PartidaAuto autoPartida={partidaenPGN}/>} */}
    </>
  )
}
