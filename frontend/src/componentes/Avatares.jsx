import React, { useEffect } from 'react'
import { useState } from 'react'

// Cargar avatares (xogadorA, xogadorB)

export default function Avatares() {

    const [file, setFile] = useState()
    
    useEffect(
        ()=>{ 
          console.log(file)
         },
        [file]
    )

     function CambioFicheiro(e) {   
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{ 
        setFile(reader.result)},false) 
        reader.readAsDataURL(e.target.files[0])  
        const img = document.createElement("img")
        img.src = e.target.result;
        document.body.appendChild(img)              
    }

  return (
    <>
    <div>Avatares</div>
    <div id="caixa"></div>
    <input type='file' onChange={CambioFicheiro}/>
    <img src="data:image/jpeg;base64{file}" alt="a"></img>
    </>
  )
}
