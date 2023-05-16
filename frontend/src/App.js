import './App.css';
import Taboleiro from './componentes/Taboleiro';
import { createContext , useState } from "react";
import VisualizaPGN from './componentes/VisualizaPGN';
import VisualizaPGNMover from './componentes/VisualizaPGNMover';
import PartidaAuto from './componentes/PartidaAuto.jsx'
import LeeXogada from './componentes/LeeXogada';
import FicheirosPGN from './componentes/FicheirosPGN';
import BorraPGN from './componentes/BorraPGN';

const Contexto=createContext()

function App() {
  const [ empate , setEmpate ] = useState(false)
  
  return (
    <>
    <Contexto.Provider value={[empate , setEmpate]}> 

      {/* PartidaAuto: Reproduce automaticamente unha partida que se suministra nun Array de strings sen numerar*/}
      {/* <PartidaAuto></PartidaAuto> */}

      {/* VisualizaPGN: Mostra unha partida en PGN numerado, avanza e retrocede xogada a xogada, Inicio e Fin */}
      {/* Utiliza o componente TaboleiroMover */}
      {/* <VisualizaPGN></VisualizaPGN> */}
      {/* <VisualizaPGNMover partida='1. d4 Nf6 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 cxd4 6. Rb1 Qxa2 7. Nc7+ Kd8 8. Nxa8 e5 9. Bg5 Qa5+ 10. Qd2 Qa2 11. Rd1 Qb2 12. c3 dxc3 13. Qxb2 cxb2 14. Bc4 Bb4+ 15. Ke2 b6 16. Nf3 Re8 17. Bxf7 Ba6+ 18. Rd3 Re7 19. Ba2 e4 20. Nd2 exd3+ 21. Kd1 Bb7 22. Nxb6 axb6 23. f3 Re5 24. Bxf6+ gxf6 25. Nc4 Rc5 26. Nxb2 Ba6 27. Bb1 d2'></VisualizaPGNMover>  */}

      {/* Taboleiro: Pinta o taboleiro coa posición inicial. Si se lle da un array de strings mostra a posición final*/}
      {/* <Taboleiro></Taboleiro> */}
      {/* <Taboleiro partida={["e4","Nf6"]}/> */}
      
      {/* LeeXogada: Chama ao módulo Intro.mjs e lee as xogadas por drag and drop */}
      {/* <LeeXogada></LeeXogada> */}
      
      {/* FicheirosPGN: Engade unha partida por POST á base de datos PARTIDAS.SQLITE do backend */}
      <FicheirosPGN/>

      {/* <BorraPGN></BorraPGN> */}
        
    </Contexto.Provider>
    </>
  )
}

export default App;

export {
  Contexto
}