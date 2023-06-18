import React, { useEffect, useState, useRef, useContext } from 'react'
import style from '../css/VisualizaPGN.module.css'
import TaboleiroMover from './TaboleiroMover'
import { Contexto } from '../App'
import melen from '../musica/InMotion.mp3'

export default function VisualizaPGN({partida})
 {
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

    let pgn=partida
    let arrayPGN=pgn.split(" ")
    let arrayObxetosXogada = []
    const audio=useRef(new Audio(melen))
    let [arrayPGNActual, setArrayPgnActual ] = useState([])
    let [ xogada, setXogada]=useState(0)

    useEffect(
      ParSemiXogadas,
      [xogada]
    )

    function ParSemiXogadas(){
      const proximaXogada = []
      for ( let visual=1 ; visual <= xogada ; visual++ ){
        if (arrayPGN[visual*3-2]) proximaXogada.push(arrayPGN[visual*3-2])
        if (arrayPGN[visual*3-1]) proximaXogada.push(arrayPGN[visual*3-1])
        }
        setArrayPgnActual(proximaXogada)
    }

  for (let indice=0;indice<arrayPGN.length;indice+=3) {  
    let obxetoXogada = {
      id: arrayPGN[indice],
      blancas: arrayPGN[indice+1],
      negras: arrayPGN[indice+2],
    }
    arrayObxetosXogada.push(obxetoXogada)
  }
  function principio(){
    setXogada(1)
  }
  function mais(){
    if (xogada<arrayPGN.length/3)
    setXogada(xogada+1)
  }
  function menos(){
    if (xogada>1)
    setXogada(xogada-1)
  }
  function remate(){
    setXogada(Math.round(arrayPGN.length/3))
  }
  function Auto () {
    if (audio.current.paused) {
      audio.current.play()
      audio.current.loop=true
      alert ('Obra: En Movimiento \n\r Música de https://www.fiftysounds.com/es/ ')
      }
    else {
        audio.current.pause()
        audio.current.loop=false
        }
  }
    return (
    <>
      <div className={style.container}>
        <p>BRANCAS:{white}</p>
        <button onClick={principio}>1.</button>
        <button onClick={menos}>-</button>
        <button onClick={mais}>+</button>
        <button onClick={remate}>Fin</button>
        Xogada:{xogada}
        <p></p>
        <button onClick={Auto}>Música</button>
        <p>NEGRAS:{black}</p>
      </div>
    
      <div className={style.partidaPGN}>
        <p>{evento}</p>
        <p>[{round}]</p>
        <p>{site}</p>
        <p>{data}</p>
        <hr></hr>
        <table>
          <tbody>
        {arrayObxetosXogada.map( (xogada,index) => <tr key={index}><td>{xogada.id}</td><td>{xogada.blancas}</td><td>{xogada.negras}</td></tr>)}
        </tbody>
        </table>
      </div>
      <div> 
        <TaboleiroMover partida={arrayPGNActual}></TaboleiroMover>
      </div>
    </>
  )
}