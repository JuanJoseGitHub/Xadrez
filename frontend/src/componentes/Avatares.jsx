import React, { useEffect } from 'react'
import style from '../css/VerLibro.module.css'
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
        reader.readAsDataURL(e.target.files[0])
        reader.addEventListener("load", ()=>{ 
            setFile(reader.result)
            })                 
    }

  return (
    <>
    <div className={style.up}>Avatares</div>
    <input className={style.up} type='file' onChange={CambioFicheiro}/>
    </>
  )
}
