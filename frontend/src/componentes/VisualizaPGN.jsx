import React, { useEffect, useState } from 'react'
import style from '../css/VisualizaPGN.module.css'
import TaboleiroMover from './TaboleiroMover'

export default function VisualizaPGN() {
  

    let pgn='1. d4 Nf6 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 cxd4 6. Rb1 Qxa2 7. Nc7+ Kd8 8. Nxa8 e5 9. Bg5 Qa5+ 10. Qd2 Qa2 11. Rd1 Qb2 12. c3 dxc3 13. Qxb2 cxb2 14. Bc4 Bb4+ 15. Ke2 b6 16. Nf3 Re8 17. Bxf7 Ba6+ 18. Rd3 Re7 19. Ba2 e4 20. Nd2 exd3+ 21. Kd1 Bb7 22. Nxb6 axb6 23. f3 Re5 24. Bxf6+ gxf6 25. Nc4 Rc5 26. Nxb2 Ba6 27. Bb1 d2'
    let arrayPGN=pgn.split(" ")
    let arrayObxetosXogada = []
   
    let [arrayPGNActual, setArrayPgnActual ] = useState([])
    let [ xogada, setXogada]=useState(0)

    useEffect(
      ParSemiXogadas,
      [xogada]
    )

    function ParSemiXogadas(){
      const proximaXogada = []
      for ( let visual=1 ; visual <= xogada ; visual++ ){
        proximaXogada.push(arrayPGN[visual*3-2])
        proximaXogada.push(arrayPGN[visual*3-1])
        }
        setArrayPgnActual(proximaXogada)
    }

  for (let indice=0;indice<=arrayPGN.length;indice+=3) {  
    let obxetoXogada = {
      id: arrayPGN[indice],
      blancas: arrayPGN[indice+1],
      negras: arrayPGN[indice+2],
    }
    arrayObxetosXogada.push(obxetoXogada)
  }

  function principio(){
    setXogada(1)
    
}
  function mais(){
    if (xogada<arrayPGN.length/3)
    setXogada(xogada+1)
  }

  function menos(){
    if (xogada>1)
    setXogada(xogada-1)
  }

  function remate(){
    setXogada(arrayPGN.length/3)
  }


    return (
    <>
      <div className={style.container}>
        <button onClick={principio}>1.</button>
        <button onClick={menos}>-</button>
        <button onClick={mais}>+</button>
        <button onClick={remate}>Fin</button>
        Xogada:{xogada}
      </div>
    
      <div className={style.partidaPGN}>
        {arrayObxetosXogada.map( xogada => <p>{xogada.id} {xogada.blancas}  {xogada.negras}</p>)}
      </div>
      <div> 
        <TaboleiroMover partida={arrayPGNActual}></TaboleiroMover>
      </div>
    </>
  )
}
