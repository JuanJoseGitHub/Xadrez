import React, { useState } from 'react'
import aperturas from '../ECO/ecocodes10.txt'

export default function CargaECO() {

    function manexadorGraba() {
    
      fetch(aperturas)
        .then(r => r.text())
        .then(text => {
        let lineas = text.split(/\n/)
        lineas.forEach(linea => {
          let ECO=linea.substring(1,4)
          let fin=linea.indexOf('}')
          let Opening=linea.substring(7,fin)
          let Plyes=linea.substring(fin)
          let Taboleiro="12345678"
          graba(ECO,Opening,Plyes,Taboleiro)
        }
        )  
      })   
      
      function graba(ECO,Opening,Plyes,Taboleiro) {
      const resposta = fetch ("http://localhost:8000/XadrezAPI/ECO", {
          method:'POST',
          headers:{'Content-type':'application/json'},
          body: JSON.stringify (
              { ECOcode:ECO ,
              OpeningName: Opening,
              OpeningPlayed: Plyes,
              Ascii: Taboleiro
              }
            )
          }
        )
      }
    }

  return (
    <><div>CargaECO</div>
    <button onClick={manexadorGraba}>Graba aperturas</button>
    </>
  )
}
