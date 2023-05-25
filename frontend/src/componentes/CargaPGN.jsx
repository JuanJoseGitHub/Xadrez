import React from 'react'
import style from '../css/SeleccionaPartida.module.css'
import { ChangeEvent , useState } from 'react'

export default function CargaPGN() {

    const [file, setFile] = useState()
    const [seleccionado , setSeleccionado] = useState(false)

    
     function CambioFicheiro(e) {
            if (e.target.files){
            setFile(e.target.files[0])                 
        }
    }

  return (
    <>
    <div>CargaPGN</div>
    <input type='file' onChange={CambioFicheiro}/>
    <div>{file && `${file.name} - ${file.type}`}</div>
    </>
  )
}
