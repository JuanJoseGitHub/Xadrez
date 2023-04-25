import React, { useState } from 'react'
import style from '../css/VisualizaPGN.module.css'
import Taboleiro from './Taboleiro'

export default function VisualizaPGN() {
    let pgn='1. d4 Nf6 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 cxd4 6. Rb1 Qxa2 7. Nc7+ Kd8 8. Nxa8 e5 9. Bg5 Qa5+ 10. Qd2 Qa2 11. Rd1 Qb2 12. c3 dxc3 13. Qxb2 cxb2 14. Bc4 Bb4+ 15. Ke2 b6 16. Nf3 Re8 17. Bxf7 Ba6+ 18. Rd3 Re7 19. Ba2 e4 20. Nd2 exd3+ 21. Kd1 Bb7 22. Nxb6 axb6 23. f3 Re5 24. Bxf6+ gxf6 25. Nc4 Rc5 26. Nxb2 Ba6 27. Bb1 d2'
    let arrayPGN=pgn.split(" ")
    let arrayObxetosXogada = []
   
    let [ pgnActual , setPgnactual ] = useState('')
    let [ arrayPGNActual, setArrayPGNActual ] = useState([])

  for (let indice=0;indice<=arrayPGN.length;indice+=3) {  
    let obxetoXogada = {
      id: arrayPGN[indice],
      blancas: arrayPGN[indice+1],
      negras: arrayPGN[indice+2],
    }
    arrayObxetosXogada.push(obxetoXogada)
  }

  function principio(){
  setArrayPGNActual(arrayPGN[1]+"  "+arrayPGN[2])
  setPgnactual('"'+arrayPGN[1].toString()+'","'+arrayPGN[2].toString()+'"')
  }

    return (
    <>
      <div className={style.container}>
        <button onClick={principio}>1.</button>
        <button>-</button>
        <button>+</button>
        <button>Fin</button>
        
      </div>
    
      <div className={style.partidaPGN}>
        {arrayObxetosXogada.map( xogada => <p>{xogada.id} {xogada.blancas}  {xogada.negras}</p>)}
      </div>
      <div>
        <p>Boton 1:{arrayPGNActual}</p>
        <p>{pgnActual}</p>
        {/* <Taboleiro partida={pgnActual}></Taboleiro> */}
        <Taboleiro partida={["e4","d6"]}></Taboleiro>
      </div>
    </>
  )
}
