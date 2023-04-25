import './App.css';
import CargaPGN from './componentes/CargaPGN';
import LeeXogada from './componentes/LeeXogada';
import Taboleiro from './componentes/Taboleiro';
import TaboleiroInicio from './componentes/TaboleiroInicio';
import { createContext } from "react";
import VisualizaPGN from './componentes/VisualizaPGN';

const Contexto=createContext()

function App() {
  return (
    <>
    <Contexto.Provider>    
      <CargaPGN></CargaPGN>
      {/* <TaboleiroInicio></TaboleiroInicio> */}
      <Taboleiro></Taboleiro>
      {/* <LeeXogada></LeeXogada> */}
      {/* <VisualizaPGN></VisualizaPGN> */}
    </Contexto.Provider>
    </>
  )
}

export default App;
