import React, { useEffect, useState, useRef } from "react";
import styles from "../css/LeeXogada.module.css";
import { Chess } from "chess.js";

export default function LeeXogada() {
// Iniciamos o modulo cunha partida na posición inicial 
  const chess = new Chess();
  const [ taboleiro, setTaboleiro ] = useState(xeneraTaboleiro())
  const iniciado = useRef(false)
    let xogadaInicio="e2"
    let xogadaFin="e4"
    chess.move( {from: xogadaInicio, to: xogadaFin} )
    xogadaInicio="e7"
    xogadaFin="e5"
    chess.move( {from: xogadaInicio, to: xogadaFin} )
    let partida=chess.history()
    console.log(partida)

    // chess.remove('e4')

    useEffect(
      ()=>{
        //if ( ! iniciado.current ) {
          delayedMovement(partida)
          //iniciado.current = true
        //}
      },
      [partida]
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

    // Pinta o taboleiro en pantalla
    <>
    <div className={styles.taboleiro}>
      <div className={styles.b} id="a8" draggable="true" onClick={(e)=>{console.log(e.target.id)}}>
        {taboleiro[0][0]}
      </div>
      <div className={styles.n} id="b8" draggable="true">
        {taboleiro[0][1]}
      </div>
      <div className={styles.b} id="c8" draggable="true">
        {taboleiro[0][2]}
      </div>
      <div className={styles.n} id="d8" draggable="true">
        {taboleiro[0][3]}
      </div>
      <div className={styles.b} id="e8" draggable="true">
        {taboleiro[0][4]}
      </div>
      <div className={styles.n} id="f8" draggable="true">
        {taboleiro[0][5]}
      </div>
      <div className={styles.b} id="g8" draggable="true">
        {taboleiro[0][6]}
      </div>
      <div className={styles.n} id="h8" draggable="true">
        {taboleiro[0][7]}
      </div>
      <div className={styles.n} id="a7" draggable="true">
        {taboleiro[1][0]}
      </div>
      <div className={styles.b} id="b7" draggable="true">
        {taboleiro[1][1]}
      </div>
      <div className={styles.n} id="c7" draggable="true">
        {taboleiro[1][2]}
      </div>
      <div className={styles.b} id="d7" draggable="true">
        {taboleiro[1][3]}
      </div>
      <div className={styles.n} id="e7" draggable="true">
        {taboleiro[1][4]}
      </div>
      <div className={styles.b} id="f7" draggable="true">
        {taboleiro[1][5]}
      </div>
      <div className={styles.n} id="g7" draggable="true">
        {taboleiro[1][6]}
      </div>
      <div className={styles.b} id="h7" draggable="true">
        {taboleiro[1][7]}
      </div>
      <div className={styles.b} id="a6" draggable="true">
        {taboleiro[2][0]}
      </div>
      <div className={styles.n} id="b6" draggable="true">
        {taboleiro[2][1]}
      </div>
      <div className={styles.b} id="c6" draggable="true">
        {taboleiro[2][2]}
      </div>
      <div className={styles.n} id="d6" draggable="true">
        {taboleiro[2][3]}
      </div>
      <div className={styles.b} id="e6" draggable="true">
        {taboleiro[2][4]}
      </div>
      <div className={styles.n} id="f6" draggable="true">
        {taboleiro[2][5]}
      </div>
      <div className={styles.b} id="g6" draggable="true">
        {taboleiro[2][6]}
      </div>
      <div className={styles.n} id="h6" draggable="true">
        {taboleiro[2][7]}
      </div>
      <div className={styles.n} id="a5" draggable="true">
        {taboleiro[3][0]}
      </div>
      <div className={styles.b} id="b5" draggable="true">
        {taboleiro[3][1]}
      </div>
      <div className={styles.n} id="c5" draggable="true">
        {taboleiro[3][2]}
      </div>
      <div className={styles.b} id="d5" draggable="true">
        {taboleiro[3][3]}
      </div>
      <div className={styles.n} id="e5" draggable="true">
        {taboleiro[3][4]}
      </div>
      <div className={styles.b} id="f5" draggable="true">
        {taboleiro[3][5]}
      </div>
      <div className={styles.n} id="g5" draggable="true">
        {taboleiro[3][6]}
      </div>
      <div className={styles.b} id="h5" draggable="true">
        {taboleiro[3][7]}
      </div>
      <div className={styles.b} id="a4" draggable="true">
        {taboleiro[4][0]}
      </div>
      <div className={styles.n} id="b4" draggable="true">
        {taboleiro[4][1]}
      </div>
      <div className={styles.b} id="c4" draggable="true">
        {taboleiro[4][2]}
      </div>
      <div className={styles.n} id="d4" draggable="true">
        {taboleiro[4][3]}
      </div>
      <div className={styles.b} id="e4" draggable="true">
        {taboleiro[4][4]}
      </div>
      <div className={styles.n} id="f4" draggable="true">
        {taboleiro[4][5]}
      </div>
      <div className={styles.b} id="g4" draggable="true">
        {taboleiro[4][6]}
      </div>
      <div className={styles.n} id="h4" draggable="true">
        {taboleiro[4][7]}
      </div>
      <div className={styles.n} id="a3" draggable="true">
        {taboleiro[5][0]}
      </div>
      <div className={styles.b} id="b3" draggable="true">
        {taboleiro[5][1]}
      </div>
      <div className={styles.n} id="c3" draggable="true">
        {taboleiro[5][2]}
      </div>
      <div className={styles.b} id="d3" draggable="true">
        {taboleiro[5][3]}
      </div>
      <div className={styles.n} id="e3" draggable="true">
        {taboleiro[5][4]}
      </div>
      <div className={styles.b} id="f3" draggable="true">
        {taboleiro[5][5]}
      </div>
      <div className={styles.n} id="g3" draggable="true">
        {taboleiro[5][6]}
      </div>
      <div className={styles.b} id="h3" draggable="true">
        {taboleiro[5][7]}
      </div>
      <div className={styles.b} id="a2" draggable="true">
        {taboleiro[6][0]}
      </div>
      <div className={styles.n} id="b2" draggable="true">
        {taboleiro[6][1]}
      </div>
      <div className={styles.b} id="c2" draggable="true">
        {taboleiro[6][2]}
      </div>
      <div className={styles.n} id="d2" draggable="true">
        {taboleiro[6][3]}
      </div>
      <div className={styles.b} id="e2" draggable="true">
        {taboleiro[6][4]}
      </div>
      <div className={styles.n} id="f2" draggable="true">
        {taboleiro[6][5]}
      </div>
      <div className={styles.b} id="g2" draggable="true">
        {taboleiro[6][6]}
      </div>
      <div className={styles.n} id="h2" draggable="true">
        {taboleiro[6][7]}
      </div>
      <div className={styles.n} id="a1" draggable="true">
        {taboleiro[7][0]}
      </div>
      <div className={styles.b} id="b1" draggable="true">
        {taboleiro[7][1]}
      </div>
      <div className={styles.n} id="c1" draggable="true">
        {taboleiro[7][2]}
      </div>
      <div className={styles.b} id="d1" draggable="true">
        {taboleiro[7][3]}
      </div>
      <div className={styles.n} id="e1" draggable="true">
        {taboleiro[7][4]}
      </div>
      <div className={styles.b} id="f1" draggable="true">
        {taboleiro[7][5]}
      </div>
      <div className={styles.n} id="g1" draggable="true">
        {taboleiro[7][6]}
      </div>
      <div className={styles.b} id="h1" draggable="true">
        {taboleiro[7][7]}
      </div>
    </div>
    </>
  );
}
