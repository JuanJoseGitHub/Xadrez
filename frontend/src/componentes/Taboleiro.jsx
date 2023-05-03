import React, { useEffect, useState, useRef } from "react";
import styles from "../css/Taboleiro.module.css";
import { Chess } from "chess.js";
import PartidaAuto from '../componentes/PartidaAuto'
import PintaTaboleiro from "./PintaTaboleiro";

export default function Taboleiro({partida=[]}) {
// Iniciamos o modulo cunha partida na posición inicial 
  const chess = new Chess();
  
  const [ taboleiro, setTaboleiro ] = useState(xeneraTaboleiro())
  const [ auto , setAuto ] = useState(false)
  const iniciado = useRef(false)
  
  useEffect(
    ()=>{
      if ( ! iniciado.current ) {
        delayedMovement(partida)
        iniciado.current = true
      }
    },
    []
  )

  function delayedMovement(movementos) {
    for (let orde in movementos) {
        chess.move(movementos[orde])
        setTaboleiro(xeneraTaboleiro())
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
