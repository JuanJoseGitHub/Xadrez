import React, { useState , useContext } from 'react'
import style from '../css/VerLibro.module.css'
import { Contexto } from '../App'
import PartidaAuto from './PartidaAuto'
import VisualizaPGN from './VisualizaPGN'
import VisualizaLibro from './VisualizaLibro'
import TaboleiroMover from './TaboleiroMover'

export default function VerLibro() {

  const  { statePartidaenPGN } = useContext (Contexto)
  const [ partidaenPGN , setPartidaenPGN ] = statePartidaenPGN
  const [ x , setX] = useState("")
  const [ partidas , setPartidas ] = useState ([])
  const [ auto, setAuto ] = useState(true)
  const [ elexido , setElexido ] = useState (false)
  let [ECO,setECO] = useState("")
  let [opName,setOpName] = useState("")
  let [para,setPara]=useState(true)
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
      const ECO=partidaObx.ECOcode
      const OName=partidaObx.OpeningName
      //let partidaPGN = partidaenPGN.replaceAll(".",". ")
      setECO(ECO)
      setOpName(OName)
      setPartidaenPGN(partidaenPGN) 
      setElexido(true)
      setAuto(false)  
      // console.log(partidaPGN) 
      console.log(partidaenPGN)
      }

    async function manexadorVerAuto(event){
    const resposta = await fetch ("http://localhost:8000/XadrezAPI/verECO/?id="+event.target.id)
    const partidaObx=await resposta.json()
    const partidaPGN=partidaObx.OpeningPlayed
    arrayCon=partidaPGN.split(" ")
    for (let indice=0;indice<arrayCon.length;indice+=3) {    
      if (arrayCon[indice+1]) {arraySal.push(arrayCon[indice+1])}
      if (arrayCon[indice+2]) {arraySal.push(arrayCon[indice+2])}
      console.log(arraySal)
    }
    setPartidaenPGN(arraySal)
    setElexido(true)
    setAuto(true)
    // console.log(partidaPGN) 
    console.log(partidaenPGN)    
  }
   
  if (elexido && para) {
    setX(partidaenPGN.replaceAll(".",". "))
    setPartidaenPGN(x)
    setPara(false)
    console.log("PPGN:"+partidaenPGN)
    console.log("X:" + x)
  }

  return (
    <> 
    <button className={style.up} onClick={manexadorSelecciona}>Selecciona Partida</button>
    <ol className={style.centro}>
      {partidas.map(partida=><li key={partida.id} id={partida.id} onClick={manexadorVer}>{partida.ECOcode+" "+partida.OpeningName+" "+partida.OpeningPlayed}</li>)}
    </ol>
    <p className={style.up}>{partidaenPGN}</p>
    {elexido && <VisualizaPGN partida={partidaenPGN}/>}
    {/* {elexido && <PartidaAuto autoPartida={partidaenPGN}/>} */}
    {/* elexido && <VisualizaLibro partidaenPGN></VisualizaLibro> */}
    </>
  )
}
