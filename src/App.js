import './App.css';
import Taboleiro from './componentes/Taboleiro';
import { createContext } from "react";

const Contexto=createContext()

function App() {
  return (
    <>
    <Contexto.Provider>
      <Taboleiro></Taboleiro>
    </Contexto.Provider>
    </>
  )
}

export default App;
