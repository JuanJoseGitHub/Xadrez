import './App.css';
import CargaPGN from './componentes/CargaPGN';
import Taboleiro from './componentes/Taboleiro';
import TaboleiroInicio from './componentes/TaboleiroInicio';
import { createContext } from "react";

const Contexto=createContext()

function App() {
  return (
    <>
    <Contexto.Provider>
      <Taboleiro></Taboleiro>
      <CargaPGN></CargaPGN>
      {/* <TaboleiroInicio></TaboleiroInicio> */}
    </Contexto.Provider>
    </>
  )
}

export default App;
