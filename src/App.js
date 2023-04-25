import './App.css';
import CargaPGN from './componentes/CargaPGN';
import LeeXogada from './componentes/LeeXogada';
import Taboleiro from './componentes/Taboleiro';
import TaboleiroInicio from './componentes/TaboleiroInicio';
import { createContext } from "react";
import VisualizaPGN from './componentes/VisualizaPGN';
import PartidaAuto from './componentes/PartidaAuto.jsx'

const Contexto=createContext()

function App() {
  return (
    <>
    <Contexto.Provider>    
      {/* <CargaPGN></CargaPGN> */}
      {/* <PartidaAuto></PartidaAuto> */}
      {/* <TaboleiroInicio></TaboleiroInicio> */}
      {/* <Taboleiro></Taboleiro> */}
      {/* <LeeXogada></LeeXogada> */}
      <VisualizaPGN></VisualizaPGN>
      {/* <Taboleiro partida={["e4","Nf6"]}/> */}
    </Contexto.Provider>
    </>
  )
}

export default App;
