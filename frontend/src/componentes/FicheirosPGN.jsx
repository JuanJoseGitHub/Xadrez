import React from 'react'

export default function FicheirosPGN() {
  function cargaPGNPost () {
    const partidaAcargar='1. e4 e6 2. d4 d5 3. Nc3 c5 4. exd5 exd5 5. dxc5 d4 6. Bb5+ Nc6 7. Qe2+ Be6 8.Ne4 Nf6 9. Bg5 Be7 10. Bxc6+ bxc6 11. Bxf6 Bxf6 12. Nd6+ Kf8 13. Qd2 a5 14. Ne2 Bd5 15. O-O Rb8 16. Nxd4 Rxb2 17. Rfe1 Be7 18. Rxe7 Qxe7 19. Re1 Qd7 20. N4f5 Rb8 21. Qf4 h6 22. Nxf7 Kxf7 23. Ne7+ Ke8 24. Qxb8+ Qd8 25. Nxc6+ 1-0'  
    const resposta = fetch ("http://localhost:8000/XadrezAPI/partida", 
      {
        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify (
          { Event:"FIDE World Championship",
            Site: "?",
            Date: "2023.04.29",
            Round: "?",
            White: "Manu Fraga",
            Black: "Manuel Canedo",
            Result:"1-0", 
            PGNGame: partidaAcargar
          }
        )
      }
    )
  } 

  return (
    <>
    <div>FicheirosPGN</div>
    <button onClick={cargaPGNPost}>Botón</button>
    </>
  )
}
