import React from 'react'
import { Chess } from 'chess.js'


function LeeTabASCII() {
   
    // Iniciamos o modulo cunha partida na posición inicial
    const chess=new Chess()
    let TodoTaboleiro=chess.ascii()

    let filasSucias = TodoTaboleiro.split("|").filter( fila => fila.length === 24)
    let filasLimpias = []
    let Taboleiro8x8 = []

    filasSucias.forEach(
        fila => filasLimpias.push(
            Array.from(fila).filter( caracter => caracter !== " " )
        )
    )


  return (
    <div className='Inicial'>
        {filasLimpias[0][4] }
    </div>
  )
}

export default LeeTabASCII