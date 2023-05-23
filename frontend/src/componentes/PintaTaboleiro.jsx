import React, { useState,useRef } from "react";
import style from "../css/PintaTaboleiro.module.css";

export default function PintaTaboleiro({taboleiro}) {
         
    let [ casillaInicio , setCasillaInicio ] = useState ('')
    let [ casillaFin , setCasillaFin ] = useState ('')
    
    
    function Dragado(event) { 
        setCasillaInicio(event.target.id)
        console.log("Casilla Inicio:"+casillaInicio)
      }
      
      function Dragover(event) {
        event.preventDefault()
        setCasillaFin(event.target.id)
        console.log ('Casilla Fin:'+casillaFin)
      }

  return (
    <>
    
    <div className={style.bordeV}>
      <div>8</div><div>7</div><div>6</div><div>5</div><div>4</div><div>3</div><div>2</div><div>1</div>      
      </div> 

    <div className={style.bordeH}>
      <div>a</div><div>b</div><div>c</div><div>d</div><div>e</div><div>f</div><div>g</div><div>h</div>      
      </div> 

    
    <div className={style.taboleiro}>
      <div className={style.b} id="a8" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[0][0]}
      </div>
      <div className={style.n} id="b8" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[0][1]}
      </div>
      <div className={style.b} id="c8" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[0][2]}
      </div>
      <div className={style.n} id="d8" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[0][3]}
      </div>
      <div className={style.b} id="e8" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[0][4]}
      </div>
      <div className={style.n} id="f8" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[0][5]}
      </div>
      <div className={style.b} id="g8" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[0][6]}
      </div>
      <div className={style.n} id="h8" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[0][7]}
      </div>
      <div className={style.n} id="a7" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[1][0]}
      </div>
      <div className={style.b} id="b7" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[1][1]}
      </div>
      <div className={style.n} id="c7" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[1][2]}
      </div>
      <div className={style.b} id="d7" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[1][3]}
      </div>
      <div className={style.n} id="e7" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[1][4]}
      </div>
      <div className={style.b} id="f7" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[1][5]}
      </div>
      <div className={style.n} id="g7" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[1][6]}
      </div>
      <div className={style.b} id="h7" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[1][7]}
      </div>
      <div className={style.b} id="a6" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[2][0]}
      </div>
      <div className={style.n} id="b6" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[2][1]}
      </div>
      <div className={style.b} id="c6" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[2][2]}
      </div>
      <div className={style.n} id="d6" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[2][3]}
      </div>
      <div className={style.b} id="e6" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[2][4]}
      </div>
      <div className={style.n} id="f6" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[2][5]}
      </div>
      <div className={style.b} id="g6" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[2][6]}
      </div>
      <div className={style.n} id="h6" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[2][7]}
      </div>
      <div className={style.n} id="a5" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[3][0]}
      </div>
      <div className={style.b} id="b5" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[3][1]}
      </div>
      <div className={style.n} id="c5" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[3][2]}
      </div>
      <div className={style.b} id="d5" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[3][3]}
      </div>
      <div className={style.n} id="e5" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[3][4]}
      </div>
      <div className={style.b} id="f5" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[3][5]}
      </div>
      <div className={style.n} id="g5" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[3][6]}
      </div>
      <div className={style.b} id="h5" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[3][7]}
      </div>
      <div className={style.b} id="a4" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[4][0]}
      </div>
      <div className={style.n} id="b4" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[4][1]}
      </div>
      <div className={style.b} id="c4" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[4][2]}
      </div>
      <div className={style.n} id="d4" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[4][3]}
      </div>
      <div className={style.b} id="e4" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[4][4]}
      </div>
      <div className={style.n} id="f4" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[4][5]}
      </div>
      <div className={style.b} id="g4" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[4][6]}
      </div>
      <div className={style.n} id="h4" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[4][7]}
      </div>
      <div className={style.n} id="a3" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[5][0]}
      </div>
      <div className={style.b} id="b3" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[5][1]}
      </div>
      <div className={style.n} id="c3" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[5][2]}
      </div>
      <div className={style.b} id="d3" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[5][3]}
      </div>
      <div className={style.n} id="e3" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[5][4]}
      </div>
      <div className={style.b} id="f3" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[5][5]}
      </div>
      <div className={style.n} id="g3" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[5][6]}
      </div>
      <div className={style.b} id="h3" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[5][7]}
      </div>
      <div className={style.b} id="a2" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[6][0]}
      </div>
      <div className={style.n} id="b2" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[6][1]}
      </div>
      <div className={style.b} id="c2" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[6][2]}
      </div>
      <div className={style.n} id="d2" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[6][3]}
      </div>
      <div className={style.b} id="e2" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[6][4]}
      </div>
      <div className={style.n} id="f2" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[6][5]}
      </div>
      <div className={style.b} id="g2" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[6][6]}
      </div>
      <div className={style.n} id="h2" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[6][7]}
      </div>
      <div className={style.n} id="a1" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[7][0]}
      </div>
      <div className={style.b} id="b1" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[7][1]}
      </div>
      <div className={style.n} id="c1" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[7][2]}
      </div>
      <div className={style.b} id="d1" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[7][3]}
      </div>
      <div className={style.n} id="e1" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[7][4]}
      </div>
      <div className={style.b} id="f1" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[7][5]}
      </div>
      <div className={style.n} id="g1" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[7][6]}
      </div>
      <div className={style.b} id="h1" draggable="true" onDrag={Dragado} onDragOver={Dragover} >
        {taboleiro[7][7]}
      </div>
    </div>
    </>
  )
}
