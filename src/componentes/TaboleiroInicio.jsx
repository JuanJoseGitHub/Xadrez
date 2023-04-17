import React from 'react'
import { Chess } from 'chess.js'

function TaboleiroInicio() {
    const chess=new Chess()
    let TaboleiroInicial=chess.ascii()        
    
    let TabInicial=TaboleiroInicial.slice(34, TaboleiroInicial.length)
    let ArrayTabolInicial=[...TabInicial]
    let fila8=TabInicial.slice(0,24)
    let fila7=TabInicial.slice(30,54)
    let fila6=TabInicial.slice(60,84)
    let fila5=TabInicial.slice(90,114)
    let fila4=TabInicial.slice(120,144)
    let fila3=TabInicial.slice(150,174)
    let fila2=TabInicial.slice(180,204)
    let fila1=TabInicial.slice(210,234)
  
    console.table (ArrayTabolInicial)
    console.log(fila6.charCodeAt(0))
    console.log(fila6.charCodeAt(1))

    return (
    <div className='Inicial'>
        {/* {TaboleiroInicial} */}
        <div>
          {fila8}
        </div>
        <div>
          {fila7}
        </div>
        <div>
          {fila6}
        </div>
        <div>
          {fila5}
        </div>
        <div>
          {fila4}
        </div>
        <div>
          {fila3}
        </div>
        <div>
          {fila2}
        </div>
        <div>
          {fila1}
        </div>
    </div>
  )
}

export default TaboleiroInicio