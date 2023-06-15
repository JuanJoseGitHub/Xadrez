import React from 'react'
import { useContext , useState } from 'react'
import { Contexto } from "../App"
import style from '../css/VerLibro.module.css'
import {saveAs} from 'file-saver'

export default function GrabaPGN() {
  // let textoGrabado="" 
    const [ textoGrabado , setTextoGrabado] = useState ("")
    const [ partidas , setPartidas ] = useState ([])
    const  { statePartidaenPGN } = useContext (Contexto)
    const [ partidaenPGN , setPartidaenPGN ] = statePartidaenPGN
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

    const createFile = ()=>{
      const blob=new Blob ([textoGrabado] , { type: "text/plain;charset=utf-8"})
      saveAs(blob,"Xadrez.pgn")
    } 

    async function manexadorSelecciona(){
        const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida")
        const partidaObx=await resposta.json()
        setPartidas(partidaObx)
      }

      async function manexadorCambia (event) {
        const resposta2=await fetch ("http://localhost:8000/XadrezAPI/verpartida/?id="+event.target.id)
        const partidaObx=await resposta2.json()
        
        setEvento(partidaObx.Event)
        setSite(partidaObx.Site)
        setData(partidaObx.Date)
        setRound(partidaObx.Round)
        setBlack(partidaObx.Black)
        setWhite(partidaObx.White)
        setResult(partidaObx.Result)
        setCodigoECO(partidaObx.ECO)
        setPartidaenPGN(partidaObx.PGNGame)

        setTextoGrabado(`[Event "${partidaObx.Event}"]
[Site "${partidaObx.Site}"]
[Date "${partidaObx.Date}"]
[Round "${partidaObx.Round}"]
[White "${partidaObx.White}"]
[Black "${partidaObx.Black}"]
[Result "${partidaObx.Result}"]
[ECO "${partidaObx.ECO}"]\r\n
${partidaObx.PGNGame}
`)
   
      }

  return (
    <>
        <button className={style.up} onClick={manexadorSelecciona}>Selecciona cabeceira</button>
        <p className={style.centrado}>Brancas:{white}</p>
        <p className={style.centrado}>Negras:{black}</p>
        <p className={style.centrado}>Evento:{evento}</p>
        <p className={style.centrado}>Lugar:{site}</p>
        <p className={style.centrado}>Rolda:{round}</p>
        <p className={style.centrado}>Data:{data}</p>
        <p className={style.centrado}>Resultado:{result}</p>
        <p className={style.centrado}>ECO:{codigoECO}</p>
        <ol className={style.centro}>
         {partidas.map(partida=><li key={partida.id} id={partida.id} onClick={manexadorCambia}>{partida.PGNGame}</li>)}
        </ol>
        <button onClick={createFile}>Graba Ficheiro xadrez.pgn</button>
    </>
  )
}