import React from 'react'

export default function FicheirosPGN() {
  
  function cargaPGN () {
    let partidaAcargar="1.e4 e5"
    const resposta= fetch ("/XadrezAPI/", 
    {
      method:'POST',
      header:{'Content-type':'applcation/json'},
      body: JSON.stringify (
        { partida: partidaAcargar})

    })

  } 
 
  return (
    <>
    <div>FicheirosPGN</div>
    <button onClick={cargaPGN}></button>
    {resposta}
    </>
  )
}
