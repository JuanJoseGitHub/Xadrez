import React from 'react'

export default function BorraPGN() {
    function borraPGN () {
        const resposta = fetch ("http://localhost:8000/XadrezAPI/borra", 
          {
            method:'DELETE',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify (
                {
                     id:"1"
                }
            )
          }
        )
      } 
    
      return (
        <>
        <div>BorraPGN</div>
        <button onClick={borraPGN}>Botón</button>
        </>
      )
    }
  