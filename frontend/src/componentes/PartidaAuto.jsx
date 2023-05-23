import React, { useEffect, useState, useRef } from "react";
import { Chess } from "chess.js";
import PintaTaboleiro from "./PintaTaboleiro";

export default function PartidaAuto({autoPartida}) {
// Iniciamos o modulo cunha partida na posición inicial 
  const chess = new Chess();
  const [ taboleiro, setTaboleiro ] = useState(xeneraTaboleiro())
  
  const iniciado = useRef(false) 
   
  useEffect(
    ()=>{
      if ( ! iniciado.current ) {
        delayedMovement(autoPartida)
        iniciado.current = true
      }
    },
    []
  )

  function delayedMovement(movementos) {
    for (let orde in movementos) {
      setTimeout(()=>{
        chess.move(movementos[orde])
        setTaboleiro(xeneraTaboleiro())
      }, 3000*orde)
    }
  }

 //Funcion xenera Taboleiro8x8()
  function xeneraTaboleiro() {
    let TodoTaboleiro = chess.ascii();
    let filasSucias = TodoTaboleiro.split("|").filter(
      (fila) => fila.length === 24
    );
    let filasLimpias = [];
    let Taboleiro8x8 = [];
    filasSucias.forEach((fila) =>
      filasLimpias.push(Array.from(fila).filter((caracter) => caracter !== " "))
    );
    filasLimpias.forEach((fila) =>
      Taboleiro8x8.push(
        fila.map((casilla) => (casilla !== "." ? casilla : " "))
      )
    );
    return Taboleiro8x8;
  }

  return (    
    <PintaTaboleiro taboleiro={taboleiro}></PintaTaboleiro>
  )
}