import React, { useEffect, useState, useRef } from "react";
import styles from "../css/Taboleiro.module.css";
import { Chess } from "chess.js";

export default function Taboleiro() {
  const chess = new Chess();
  // Iniciamos o modulo cunha partida na posición inicial 
  const [ taboleiro, setTaboleiro ] = useState(xeneraTaboleiro())
  const iniciado = useRef(false)

  useEffect(
    ()=>{
      if ( ! iniciado.current ) {
        delayedMovement(["e4","e5"])
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
      }, 1000*orde)
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
      <div className={styles.b} id={styles.a8}>
        {taboleiro[0][0]}
      </div>
      <div className={styles.n} id={styles.b8}>
        {taboleiro[0][1]}
      </div>
      <div className={styles.b} id={styles.c8}>
        {taboleiro[0][2]}
      </div>
      <div className={styles.n} id={styles.d8}>
        {taboleiro[0][3]}
      </div>
      <div className={styles.b} id={styles.e8}>
        {taboleiro[0][4]}
      </div>
      <div className={styles.n} id={styles.f8}>
        {taboleiro[0][5]}
      </div>
      <div className={styles.b} id={styles.g8}>
        {taboleiro[0][6]}
      </div>
      <div className={styles.n} id={styles.h8}>
        {taboleiro[0][7]}
      </div>
      <div className={styles.n} id={styles.a7}>
        {taboleiro[1][0]}
      </div>
      <div className={styles.b} id={styles.b7}>
        {taboleiro[1][1]}
      </div>
      <div className={styles.n} id={styles.c7}>
        {taboleiro[1][2]}
      </div>
      <div className={styles.b} id={styles.d7}>
        {taboleiro[1][3]}
      </div>
      <div className={styles.n} id={styles.e7}>
        {taboleiro[1][4]}
      </div>
      <div className={styles.b} id={styles.f7}>
        {taboleiro[1][5]}
      </div>
      <div className={styles.n} id={styles.g7}>
        {taboleiro[1][6]}
      </div>
      <div className={styles.b} id={styles.h7}>
        {taboleiro[1][7]}
      </div>
      <div className={styles.b} id={styles.a6}>
        {taboleiro[2][0]}
      </div>
      <div className={styles.n} id={styles.b6}>
        {taboleiro[2][1]}
      </div>
      <div className={styles.b} id={styles.c6}>
        {taboleiro[2][2]}
      </div>
      <div className={styles.n} id={styles.d6}>
        {taboleiro[2][3]}
      </div>
      <div className={styles.b} id={styles.e6}>
        {taboleiro[2][4]}
      </div>
      <div className={styles.n} id={styles.f6}>
        {taboleiro[2][5]}
      </div>
      <div className={styles.b} id={styles.g6}>
        {taboleiro[2][6]}
      </div>
      <div className={styles.n} id={styles.h6}>
        {taboleiro[2][7]}
      </div>
      <div className={styles.n} id={styles.a5}>
        {taboleiro[3][0]}
      </div>
      <div className={styles.b} id={styles.b5}>
        {taboleiro[3][1]}
      </div>
      <div className={styles.n} id={styles.c5}>
        {taboleiro[3][2]}
      </div>
      <div className={styles.b} id={styles.d5}>
        {taboleiro[3][3]}
      </div>
      <div className={styles.n} id={styles.e5}>
        {taboleiro[3][4]}
      </div>
      <div className={styles.b} id={styles.f5}>
        {taboleiro[3][5]}
      </div>
      <div className={styles.n} id={styles.g5}>
        {taboleiro[3][6]}
      </div>
      <div className={styles.b} id={styles.h5}>
        {taboleiro[3][7]}
      </div>
      <div className={styles.b} id={styles.a4}>
        {taboleiro[4][0]}
      </div>
      <div className={styles.n} id={styles.b4}>
        {taboleiro[4][1]}
      </div>
      <div className={styles.b} id={styles.c4}>
        {taboleiro[4][2]}
      </div>
      <div className={styles.n} id={styles.d4}>
        {taboleiro[4][3]}
      </div>
      <div className={styles.b} id={styles.e4}>
        {taboleiro[4][4]}
      </div>
      <div className={styles.n} id={styles.f4}>
        {taboleiro[4][5]}
      </div>
      <div className={styles.b} id={styles.g4}>
        {taboleiro[4][6]}
      </div>
      <div className={styles.n} id={styles.h4}>
        {taboleiro[4][7]}
      </div>
      <div className={styles.n} id={styles.a3}>
        {taboleiro[5][0]}
      </div>
      <div className={styles.b} id={styles.b3}>
        {taboleiro[5][1]}
      </div>
      <div className={styles.n} id={styles.c3}>
        {taboleiro[5][2]}
      </div>
      <div className={styles.b} id={styles.d3}>
        {taboleiro[5][3]}
      </div>
      <div className={styles.n} id={styles.e3}>
        {taboleiro[5][4]}
      </div>
      <div className={styles.b} id={styles.f3}>
        {taboleiro[5][5]}
      </div>
      <div className={styles.n} id={styles.g3}>
        {taboleiro[5][6]}
      </div>
      <div className={styles.b} id={styles.h3}>
        {taboleiro[5][7]}
      </div>
      <div className={styles.b} id={styles.a2}>
        {taboleiro[6][0]}
      </div>
      <div className={styles.n} id={styles.b2}>
        {taboleiro[6][1]}
      </div>
      <div className={styles.b} id={styles.c2}>
        {taboleiro[6][2]}
      </div>
      <div className={styles.n} id={styles.d2}>
        {taboleiro[6][3]}
      </div>
      <div className={styles.b} id={styles.e2}>
        {taboleiro[6][4]}
      </div>
      <div className={styles.n} id={styles.f2}>
        {taboleiro[6][5]}
      </div>
      <div className={styles.b} id={styles.g2}>
        {taboleiro[6][6]}
      </div>
      <div className={styles.n} id={styles.h2}>
        {taboleiro[6][7]}
      </div>
      <div className={styles.n} id={styles.a1}>
        {taboleiro[7][0]}
      </div>
      <div className={styles.b} id={styles.b1}>
        {taboleiro[7][1]}
      </div>
      <div className={styles.n} id={styles.c1}>
        {taboleiro[7][2]}
      </div>
      <div className={styles.b} id={styles.d1}>
        {taboleiro[7][3]}
      </div>
      <div className={styles.n} id={styles.e1}>
        {taboleiro[7][4]}
      </div>
      <div className={styles.b} id={styles.f1}>
        {taboleiro[7][5]}
      </div>
      <div className={styles.n} id={styles.g1}>
        {taboleiro[7][6]}
      </div>
      <div className={styles.b} id={styles.h1}>
        {taboleiro[7][7]}
      </div>
    </div>
    </>
  );
}
