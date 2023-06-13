import React from 'react'
import style from '../css/avatares.module.css'
import { useContext} from 'react'
import { Contexto } from "../App";

export default function Avatares() {

    const { stateBrancas } = useContext (Contexto)
    const [ brancas , setBrancas ] = stateBrancas
    const { stateNegras } = useContext (Contexto)
    const [ negras , setNegras ] = stateNegras
   
  //  Faltan por engadir:
  //  const stateEvent = useState("")
  //  const stateSite = useState("")
  //  const stateDate = useState("")
  //  const stateRound = useState("")
  //  const stateResult = useState("")

    const { stateWhite } = useContext (Contexto)
    const [ white , setWhite ] = stateWhite
    const { stateBlack } = useContext (Contexto)
    const [ black , setBlack ] = stateBlack

  
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

        function manexadorInputBrancas(e)
        setWhite(e.target.value)
  return (
    <>
    <form className={style.formulario}>
      <label>Nome brancas:</label>
      <input name='white' type='text' placeholder="nome brancas" value={brancas} onInput={manexadorInputBrancas}></input>
      <label>Nome negras:</label>
      <input name='black' type='text' placeholder="nome negras"></input>
      <label>Evento:</label>
      <input name="event" type="text" placeholder='Nome do evento'></input> 
      <label>Lugar:</label>
      <input name="site" type="text" value='www.xadrez.es'></input>
      <label>Rolda:</label>
      <input name="round" type="text" value='1ª'></input> 
      <label>Data:</label>
      <input name="date" type="text" value='2023.06.01'></input>
      <input id="submit" type='submit'></input> 
    </form>

    <div className={style.fondo}>   
    </div>

    <div className={style.esquerda}>
    Avatar xogador brancas
    <input type='file' onChange={CambioFicheiroEsquerda}/>
    <div>
    <img src={brancas} alt='b'></img>
    </div>
    </div> 
    <div className={style.dereita}>
    Avatar xogador de negras
    <input type='file' onChange={CambioFicheiroDereita}/>
    <div>
    <img src={negras} alt='n'></img>
    </div>
    </div>
    </>
  )
}
