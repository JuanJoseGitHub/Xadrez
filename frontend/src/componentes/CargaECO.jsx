import React, { useState } from 'react'
import aperturas from '../ECO/ecocodes10.txt'

export default function CargaECO() {

    const [ap,setAp]=useState("")
    fetch(aperturas)
    .then(r => r.text())
    .then(text => {setAp(text)})
    console.log(ap)
    // const [file, setFile] = useState()
    // const reader = new FileReader()
    // reader.readAsText(aperturas)
    // reader.addEventListener("load", ()=>{ setFile(reader.result) })
    // console.log(reader.readAsText(aperturas))

  return (
    <><div>CargaECO</div>
    {ap}
    </>
  )
}
