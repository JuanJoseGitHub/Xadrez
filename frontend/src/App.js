import './App.css';
import ProbaLeeXogada from './componentes/ProbaLeeXogada';
import Taboleiro from './componentes/Taboleiro';
import { createContext } from "react";
import VisualizaPGN from './componentes/VisualizaPGN';
import PartidaAuto from './componentes/PartidaAuto.jsx'
import LeeXogada from './componentes/LeeXogada';

const Contexto=createContext()

function App() {
  return (
    <>
    <Contexto.Provider> 

      {/* PartidaAuto: Reproduce automaticamente unha partida que se suministra nun Array de strings sen numerar*/}
      {/* <PartidaAuto></PartidaAuto> */}

      {/* VisualizaPGN: Mostra unha partida en PGN numerado, avanza e retrocede xogada a xogada, Inicio e Fin */}
      {/* Utiliza o componente TaboleiroMover */}
      {/* <VisualizaPGN></VisualizaPGN> */}

      {/* Taboleiro: Pinta o taboleiro coa posición inicial. Si se lle da un array de strings mostra a posición final*/}
      {/* <Taboleiro></Taboleiro> */}
      {/* <Taboleiro partida={["e4","Nf6"]}/> */}
          
      
      {/* RESOLVER */}
      {/* ProbaLeeXogada (Debería ler unha xogada do DROP) */}
      {/* <ProbaLeeXogada></ProbaLeeXogada> */}
      
      {/* NON FUNCIONA */}
      <LeeXogada></LeeXogada>

    </Contexto.Provider>
    </>
  )
}

export default App;
