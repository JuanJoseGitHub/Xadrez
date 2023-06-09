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
    <div>Avatares</div>
    <div className={style.dereita}>
    <input type='file' id="inputDereita" onChange={CambioFicheiroDereita}/>
    </div>
    <div className={style.esquerda}>
    <input type='file' id="inputEsquerda" onChange={CambioFicheiroEsquerda}/>
    </div>
    </>
  )
}
