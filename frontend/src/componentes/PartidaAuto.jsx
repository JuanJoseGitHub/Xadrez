import React, { useEffect, useState, useRef } from "react";
import { Chess } from "chess.js";
import PintaTaboleiro from "./PintaTaboleiro";
export default function Taboleiro() {
// Iniciamos o modulo cunha partida na posición inicial 
  const chess = new Chess();
  const [ taboleiro, setTaboleiro ] = useState(xeneraTaboleiro())
  
  const iniciado = useRef(false)
 
  

  useEffect(
    ()=>{
      if ( ! iniciado.current ) {
        delayedMovement(["d4","Nf6","Bf4","c5","e3","Qb6","Nc3","Qxb2","Nb5","cxd4","Rb1","Qxa2","Nc7+","Kd8","Nxa8","e5","Bg5","Qa5+","Qd2","Qa2","Rd1","Qb2","c3","dxc3","Qxb2","cxb2","Bc4","Bb4+","Ke2","b6","Nf3","Re8","Bxf7","Ba6+","Rd3","Re7","Ba2","e4","Nd2","exd3+","Kd1","Bb7","Nxb6","axb6","f3","Re5","Bxf6+","gxf6","Nc4","Rc5","Nxb2","Ba6","Bb1","d2"])
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