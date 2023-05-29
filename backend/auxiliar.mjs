import { ECO } from './src/main.mjs'
import fs from "fs"
import { Chess } from 'chess.js';


const file = fs.readFileSync('../frontend/src/ECO/ecocodes10.txt', {encoding: "latin1"} )

for ( let text of file.split(/\n/) ) {
  let lineas = text.split(/\n/)
  lineas.forEach(linea => {
    const chess=new Chess()
    let ECOstring=linea.substring(1,4)
    let fin=linea.indexOf('}')
    let Opening=linea.substring(7,fin)
    let Plyes=linea.substring(fin+1)
    console.log(ECOstring+" "+Plyes)
    chess.loadPgn(Plyes)
    let TaboleiroPrevio=chess.ascii()
    let Taboleiro=TaboleiroPrevio.slice(30,-58)
    // let TaboleiroCurto=TaboleiroPrevio.slice(30,-58)
    // let Taboleiro=encodeURIComponent(Taboleiro)
    

    ECO.create({
      ECOcode:ECOstring ,
      OpeningName: Opening,
      OpeningPlayed: Plyes,
      Ascii: Taboleiro}
    )
  })
}
