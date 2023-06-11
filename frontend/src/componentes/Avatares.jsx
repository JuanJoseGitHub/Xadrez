import React from 'react'
import style from '../css/avatares.module.css'
import { useState } from 'react'

// Cargar avatares (xogadorA, xogadorB)

export default function Avatares() {

    const [file, setFile] = useState()
    const [name, setName] = useState()
    const [file2, setFile2] = useState()
    const [name2, setName2] = useState()
    
    
   
    function CambioFicheiroDereita(input) {   
      const reader = new FileReader()
      reader.addEventListener("load", (event)=>{
        const img = document.createElement("img")
        img.src = event.target.result;
        img.className="dereita"
        document.body.appendChild(img)              
        setFile(reader.result)
        })
      let ficheiro=input.target.files[0]
      reader.readAsDataURL(ficheiro)
      setName(ficheiro.name)
      console.log(name)
      }

      function CambioFicheiroEsquerda(input) {   
        const reader = new FileReader()
        reader.addEventListener("load", (event)=>{
          const img = document.createElement("img")
          img.src = event.target.result;
          img.className="esquerda"
          document.body.appendChild(img)              
          setFile2(reader.result)
          })
        let ficheiro=input.target.files[0]
        reader.readAsDataURL(ficheiro)
        setName2(ficheiro.name)
        console.log(name2)
        }

  return (
    <>
    <div className={style.centro}>
    <form className={style.formulario}>
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
    </div>

    <div className={style.esquerda}>
    Avatar xogador brancas
    <input type='file' id="inputEsquerda" onChange={CambioFicheiroEsquerda}/>
    <input name='white' type='text' placeholder="nome brancas"></input>
    <input id="submit" type='submit'></input> 
    </div>
    <div className={style.dereita}>
    Avatar xogador de negras
    <input type='file' id="inputDereita" onChange={CambioFicheiroDereita}/>
    <input name='black' type='text' placeholder="nome negras"></input>
    <input id="submit" type='submit'></input> 
    </div>
    </>
  )
}
