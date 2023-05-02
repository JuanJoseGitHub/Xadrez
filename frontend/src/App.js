import './App.css';
import ProbaLeeXogada from './componentes/ProbaLeeXogada';
import Taboleiro from './componentes/Taboleiro';
import { createContext } from "react";
import VisualizaPGN from './componentes/VisualizaPGN';
import PartidaAuto from './componentes/PartidaAuto.jsx'

const Contexto=createContext()

function App() {
  return (
    <>
    <Contexto.Provider>    
      {/* <PartidaAuto></PartidaAuto> */}
      {/* <TaboleiroInicio></TaboleiroInicio> */}
      {/* <Taboleiro></Taboleiro> */}
      {/* <LeeXogada></LeeXogada> */}
      {/* <VisualizaPGN></VisualizaPGN> */}
      {/* <Taboleiro partida={["e4","Nf6"]}/> */}
      <ProbaLeeXogada></ProbaLeeXogada>
    </Contexto.Provider>
    </>
  )
}

export default App;
