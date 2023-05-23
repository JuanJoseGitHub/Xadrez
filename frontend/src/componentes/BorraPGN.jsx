import React from 'react'

export default function BorraPGN() {
    async function borraPGN () {
        const resposta = await fetch ("http://localhost:8000/XadrezAPI/borra", 
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
  