import './App.css';
import { createContext , useState } from "react";
import { BrowserRouter, Route , Link , Routes } from "react-router-dom";
import Taboleiro from './componentes/Taboleiro';
import VisualizaPGN from './componentes/VisualizaPGN';
import PartidaAuto from './componentes/PartidaAuto.jsx'
import LeeXogada from './componentes/LeeXogada';
import BorraPGN from './componentes/BorraPGN';
import VerPartida from './componentes/VerPartida';
import SeleccionaPGN from './componentes/SeleccionaPGN';
import TaboleiroMover from './componentes/TaboleiroMover';
import CargaPGN from './componentes/CargaPGN';
import VerLibro from './componentes/VerLibro';
import Home from './componentes/Home.jsx'
import CambiaCabeceiraPGN from './componentes/CambiaCabeceiraPGN';
import Avatares from './componentes/Avatares';
const Contexto=createContext()

function App() {
  const stateEmpate = useState(false)
  const statePartidaenPGN = useState("")
  
  return (
    <>
    
      {/* PartidaAuto: Reproduce automaticamente unha partida que se suministra nun Array de strings sen numerar*/}
      {/* autoPartida=["d4","Nf6","Bf4","c5","e3","Qb6","Nc3","Qxb2","Nb5","cxd4","Rb1","Qxa2","Nc7+","Kd8","Nxa8","e5","Bg5","Qa5+","Qd2","Qa2","Rd1","Qb2","c3","dxc3","Qxb2","cxb2","Bc4","Bb4+","Ke2","b6","Nf3","Re8","Bxf7","Ba6+","Rd3","Re7","Ba2","e4","Nd2","exd3+","Kd1","Bb7","Nxb6","axb6","f3","Re5","Bxf6+","gxf6","Nc4","Rc5","Nxb2","Ba6","Bb1","d2"] */}
      {/* <PartidaAuto autoPartida={["d4","Nf6","Bf4","c5","e3","Qb6","Nc3","Qxb2","Nb5","cxd4","Rb1","Qxa2","Nc7+","Kd8","Nxa8","e5","Bg5","Qa5+","Qd2","Qa2","Rd1","Qb2","c3","dxc3","Qxb2","cxb2","Bc4","Bb4+","Ke2","b6","Nf3","Re8","Bxf7","Ba6+","Rd3","Re7","Ba2","e4","Nd2","exd3+","Kd1","Bb7","Nxb6","axb6","f3","Re5","Bxf6+","gxf6","Nc4","Rc5","Nxb2","Ba6","Bb1","d2"]} ></PartidaAuto> */}

      {/* VisualizaPGN: Mostra unha partida en PGN numerado, avanza e retrocede xogada a xogada, Inicio e Fin */}
      {/* TaboleiroMover: Componente auxiliar de VisualizaPGN. */}
      {/* <VisualizaPGN partida='1. d4 Nf6 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 cxd4 6. Rb1 Qxa2 7. Nc7+ Kd8 8. Nxa8 e5 9. Bg5 Qa5+ 10. Qd2 Qa2 11. Rd1 Qb2 12. c3 dxc3 13. Qxb2 cxb2 14. Bc4 Bb4+ 15. Ke2 b6 16. Nf3 Re8 17. Bxf7 Ba6+ 18. Rd3 Re7 19. Ba2 e4 20. Nd2 exd3+ 21. Kd1 Bb7 22. Nxb6 axb6 23. f3 Re5 24. Bxf6+ gxf6 25. Nc4 Rc5 26. Nxb2 Ba6 27. Bb1 d2'></VisualizaPGN>  */}

      {/* Taboleiro: Pinta o taboleiro coa posición inicial. Si se lle da un array de strings mostra a posición final*/}
      {/* <Taboleiro></Taboleiro> */}
      {/* <Taboleiro partida={["e4","Nf6"]}/> */}
      
      {/* LeeXogada: Chama ao módulo Intro.mjs e lee as xogadas por drag and drop */}
      {/* <LeeXogada></LeeXogada> */}

      {/* Permite seleccionar unha apertura do libro de aperturas e reproducila automaticamente */}
      {/* <VerLibro></VerLibro> */}

      {/* Mostra a partida almacenada con id=1 automáticamente ou xogada a xogada */}
      {/* {<VerPartida></VerPartida>} */}

      {/* Mostra as partidas alamcenadas en base de datos e permite reproducir unha xogada a xogada */}
      {/* <SeleccionaPGN/> */}

      {/* Mostra as partidas almacenadas en base de datos e permite seleccionar unha para borrar */}
      {/* <BorraPGN></BorraPGN> */}

      {/* <CargaPGN/> */}



    <Avatares/>
    {/* <Contexto.Provider value={{stateEmpate, statePartidaenPGN}}> 
      
      <BrowserRouter>

      <nav className='enlaces'>
          <Link className='link' to="/">| Xadrez 64 |</Link>
          <Link className='link' to="/xogar">| Xogar unha partida |</Link>      
          <Link className='link' to="/verlibro">| Ver Libro |</Link>
          <Link className='link' to="/verpartida">| Ver Partida 1 |</Link>
          <Link className='link' to="/verpartidas">| Ver Partidas |</Link>
          <Link className='link' to="/borra">| Borrar Partidas |</Link>
          <Link className='link' to="/cambia">| Cambiar |</Link>
      </nav>

      <Routes className='enlaces'>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/xogar' element={<LeeXogada></LeeXogada>}/>
        <Route path='/verlibro/' element={<VerLibro></VerLibro>}/>
        <Route path='/verpartida/' element={<VerPartida></VerPartida>}/>
        <Route path='/verpartidas/' element={<SeleccionaPGN></SeleccionaPGN>}/>
        <Route path='/borra/' element={<BorraPGN></BorraPGN>}/>
        <Route path='/cambia/' element={<CambiaCabeceiraPGN></CambiaCabeceiraPGN>}/>
      </Routes>   

      </BrowserRouter>
    </Contexto.Provider> */}
     
    </>
  )
}

export default App;

export {
  Contexto
}