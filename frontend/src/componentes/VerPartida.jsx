import React, { useState } from 'react'
import VisualizaPGNMover from './VisualizaPGNMover'

export default function VerPartida() {

  const [cargada,setCargada] = useState(false)
  
  async function manexadorVer(){
    const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida?id=1")
    const partidaObx=await resposta.json()
    const partidaPGN=partidaObx.PGNGame
    console.log(partidaPGN)
    setCargada(true)
    console.log(cargada)
    return partidaPGN   
  }

  return (
    <div>
      <button onClick={manexadorVer}>Ver Partida</button>
      {cargada && <VisualizaPGNMover partidaPGN/>}
    </div>
  )
}
