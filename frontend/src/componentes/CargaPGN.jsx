import React, { useEffect } from 'react'
import style from '../css/VerLibro.module.css'
import { ChangeEvent , useState } from 'react'

export default function CargaPGN() {

    const [file, setFile] = useState()

    useEffect(
        ()=>{ console.log(file);},
        [file]
    )

     function CambioFicheiro(e) {
            if (e.target.files){
                const reader = new FileReader()
                reader.readAsText(e.target.files[0])
                reader.addEventListener("load", ()=>{ setFile(reader.result) })                 
        }
    }

  return (
    <>
    <div className={style.up}>CargaPGN</div>
    <input className={style.up} type='file' onChange={CambioFicheiro}/>
    </>
  )
}
