import React, { useEffect, useState } from 'react'
import style from '../css/VisualizaPGN.module.css'
import TaboleiroMover from './TaboleiroMover'

export default function VisualizaPGNMover({partida})
 {
    let pgn=partida
    let arrayPGN=pgn.split(" ")
    let arrayObxetosXogada = []
   
    let [arrayPGNActual, setArrayPgnActual ] = useState([])
    let [ xogada, setXogada]=useState(0)

    useEffect(
      ParSemiXogadas,
      [xogada]
    )

    function ParSemiXogadas(){
      const proximaXogada = []
      for ( let visual=1 ; visual <= xogada ; visual++ ){
        proximaXogada.push(arrayPGN[visual*3-2])
        proximaXogada.push(arrayPGN[visual*3-1])
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
    setXogada(arrayPGN.length/3)
  }

    return (
    <>
      <div className={style.container}>
        <button onClick={principio}>1.</button>
        <button onClick={menos}>-</button>
        <button onClick={mais}>+</button>
        <button onClick={remate}>Fin</button>
        Xogada:{xogada}
      </div>
    
      <div className={style.partidaPGN}>
        <table>
        {arrayObxetosXogada.map( xogada => <tr><td>{xogada.id}</td> <td>{xogada.blancas+" "}</td>  <td>{xogada.negras+" "}</td></tr>)}
        </table>
      </div>
      <div> 
        <TaboleiroMover partida={arrayPGNActual}></TaboleiroMover>
      </div>
    </>
  )
}