import React from 'react'
import style from '../css/CargaPGN.module.css'

export default function CargaPGN() {
    let pgn='1. d4 Nf6 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 cxd4 6. Rb1 Qxa2 7. Nc7+ Kd8 8. Nxa8 e5 9. Bg5 Qa5+ 10. Qd2 Qa2 11. Rd1 Qb2 12. c3 dxc3 13. Qxb2 cxb2 14. Bc4 Bb4+ 15. Ke2 b6 16. Nf3 Re8 17. Bxf7 Ba6+ 18. Rd3 Re7 19. Ba2 e4 20. Nd2 exd3+ 21. Kd1 Bb7 22. Nxb6 axb6 23. f3 Re5 24. Bxf6+ gxf6 25. Nc4 Rc5 26. Nxb2 Ba6 27. Bb1 d2'
    
    let arrayPGN=pgn.split(" ")
    let indice=1

    let xogada=""
   
    // for (indice=1;indice<=arrayPGN.length-3;indice+3){  
    xogada=(arrayPGN[indice-1])+(arrayPGN[indice])+(arrayPGN[indice+1])
    
    

    // }
    return (
    <>
      <div className={style.container}>
        
        {pgn}
      </div>
    
      <div className={style.partidaPGN}>
        {xogada}
        <br></br>
      </div>

    </>
  )
}
