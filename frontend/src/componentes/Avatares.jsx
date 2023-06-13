import React from 'react'
import style from '../css/avatares.module.css'
import { useContext} from 'react'
import { Contexto } from "../App";

export default function Avatares() {

    const { stateBrancas } = useContext (Contexto)
    const [ brancas , setBrancas ] = stateBrancas
    const { stateNegras } = useContext (Contexto)
    const [ negras , setNegras ] = stateNegras
    
    const { stateWhite } = useContext (Contexto)
    const [ white , setWhite ] = stateWhite
    const { stateBlack } = useContext (Contexto)
    const [ black , setBlack ] = stateBlack
    const {stateEvento} = useContext (Contexto)
    const [evento , setEvento] = stateEvento
    const { stateSite } = useContext (Contexto)
    const [site , setSite] = stateSite
    const { stateData } = useContext (Contexto)
    const [data , setData] = stateData
    const { stateRound } = useContext (Contexto)
    const [round , setRound] = stateRound
    const {stateResult } = useContext (Contexto)
    const [result , setResult] = stateResult
  
    function CambioFicheiroEsquerda(input) {   
      const reader = new FileReader()
      reader.addEventListener("load", (event)=>{          
        setBrancas(event.target.result)
        })
      let ficheiro=input.target.files[0]
      reader.readAsDataURL(ficheiro)
      }

      function CambioFicheiroDereita(input) {   
        const reader = new FileReader()
        reader.addEventListener("load", (event)=>{       
          setNegras(event.target.result)
          })
        let ficheiro=input.target.files[0]
        reader.readAsDataURL(ficheiro)
        }

        function manexadorInputBrancas(e){
        setWhite(e.target.value)}

        function manexadorInputNegras(e){
        setBlack(e.target.value)}

        function manexadorInputEvent(e){
        setEvento(e.target.value)}

        function manexadorInputSite(e){
        setSite(e.target.value)}
  
        function manexadorInputRound(e){
        setRound(e.target.value)}

        function manexadorInputData(e){
        setData(e.target.value)}


  return (
    <>
    <form className={style.formulario}>
      <label>Nome brancas:</label>
      <input name='white' type='text' placeholder="Nome brancas" value={white} onInput={manexadorInputBrancas}></input>
      <label>Nome negras:</label>
      <input name='black' type='text' placeholder="Nome negras" value={black} onInput={manexadorInputNegras}></input>
      <label>Evento:</label>
      <input name="event" type="text" placeholder='Nome do evento' value={evento} onInput={manexadorInputEvent}></input> 
      <label>Lugar:</label>
      <input name="site" type="text" placeholder='Lugar' value={site} onInput={manexadorInputSite} ></input>
      <label>Rolda:</label>
      <input name="round" type="text" placeholder='Rolda' value={round} onInput={manexadorInputRound}></input> 
      <label>Data:</label>
      <input name="date" type="text" placeholder='Data' value={data} onInput={manexadorInputData}></input>
    </form>

    <div className={style.fondo}>   
    </div>

    <div className={style.esquerda}>
    Avatar xogador brancas
    <p>{white}</p>
    <input type='file' onChange={CambioFicheiroEsquerda}/>
    <div>
    <img src={brancas} alt='b'></img>
    </div>
    </div> 
    <div className={style.dereita}>
    Avatar xogador de negras
    <p>{black}</p>
    <input type='file' onChange={CambioFicheiroDereita}/>
    <div>
    <img src={negras} alt='n'></img>
    </div>
    </div>
    </>
  )
}
