import React from 'react'

export default function SeleccionaPartida() {
    async function manexadorSelecciona(){
        const resposta =await fetch ("http://localhost:8000/XadrezAPI/verpartida")
        const partidaObx=await resposta.json()
        console.log(partidaObx)
      }
  return (
    <>
    <div>SeleccionaPartida</div>
    <button onClick={manexadorSelecciona}>Selecciona Partida</button>
    </>
  )
}
