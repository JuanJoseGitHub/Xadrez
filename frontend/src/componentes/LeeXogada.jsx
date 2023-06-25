import React, { useEffect, useState, useRef, useContext } from "react";
import style from "../css/LeeXogada.module.css";
import { chess, procesarMovemento} from '../modulos/Intro.mjs'
import { Contexto } from "../App";
import { BACKEND_URL } from "../config.mjs"
import melen from '../musica/InMotion.mp3'
import xaq from '../musica/xaque.mp3'
import toc from '../musica/xaqueclinck.mp3'
import emp from '../musica/empate.mp3'

export default function LeeXogada() {
  const [ taboleiro, setTaboleiro ] = useState(xeneraTaboleiro())
  
  const { stateBrancas } = useContext (Contexto)
  const [ brancas , setBrancas ] = stateBrancas
  const { stateNegras } = useContext (Contexto)
  const [ negras , setNegras ] = stateNegras
  const { stateCodigoECO } = useContext (Contexto)
  const [ codigoECO , setCodigoECO ] = stateCodigoECO
  const { stateWhite } = useContext (Contexto)
  const [ white , setWhite ] = stateWhite
  const { stateBlack } = useContext (Contexto)
  const [ black , setBlack ] = stateBlack
  const {stateEvento} = useContext (Contexto)
  const [evento , setEvento] = stateEvento
  const { stateSite } = useContext (Contexto)
  const [site , setSite] = stateSite
  const { stateData } = useContext (Contexto)
  const [data , setData] = stateData
  const { stateRound } = useContext (Contexto)
  const [round , setRound] = stateRound
  const {stateResult } = useContext (Contexto)
  const [result , setResult] = stateResult
  const { stateEmpate } = useContext (Contexto)
  const [ empate , setEmpate ] = stateEmpate

  let pulsado
  let buscandoInicio=useRef(true)
  let arrayPGN = []
  let arrayXogada = []
  const audio=useRef(new Audio(melen))
  const audioTic=useRef(new Audio(toc))
  const audioXaque=useRef(new Audio(xaq))
  const audioEmpate=useRef(new Audio(emp))
  
  let [turno , setTurno] = useState("w")
  let [ xaque , setXaque] = useState (false)
  let [ gameOver , setGameOver] = useState (false)
  let [ casillaInicio , setCasillaInicio ] = useState ('')
  let [ casillaFin , setCasillaFin ] = useState ('')
  let [ datosCompletos , setDatosCompletos ] = useState (false)
  let [arrayObxetosXogada , setArrayObxetosXogada] = useState ([])
  let [opName,setOpName] = useState("")
  let [opPlayed,setOpPlayed] = useState("")
  let [tempoB,setTempoB] = useState(600)
  let [tempoN,setTempoN] = useState(600)
  let [segundosB,setSegundosB] = useState(0)
  let [segundosN,setSegundosN] = useState(0)
  let [minutosB,setMinutosB] = useState(0)
  let [minutosN,setMinutosN] = useState(0)
  let [horasB,setHorasB] = useState(0)
  let [horasN,setHorasN] = useState (0)
  let inicio

  console.log(BACKEND_URL);

  inicioTurno()
  
   useEffect(
    ()=>{
      if((casillaInicio && casillaFin)&&(casillaInicio !==casillaFin)) {
        procesarMovemento( { from: casillaInicio, to: casillaFin} )
        descontaTempo()
        inicioTurno()
        setTaboleiro(xeneraTaboleiro())
        setCasillaInicio()
        setCasillaFin()
        PintaPartida()
        setTurno(chess.turn())
        setXaque(chess.inCheck())
        if (chess.inCheck()) {audioXaque.current.play()}
        setGameOver(chess.isGameOver())
        if (chess.isGameOver()) {turno==="w" ? setResult("1-0") : setResult("0-1")}
        setEmpate(chess.isDraw())
        if (chess.isDraw()) {
          audioEmpate.current.play()
          setResult("1/2-1/2")}
        BuscaECO()
      }
    },
    [casillaInicio, casillaFin]
  )

  function descontaTempo(){ 
    chess.turn()==="b" ? setTempoB (tempoB - (Date.now()-inicio)) : setTempoN (tempoN - (Date.now()-inicio))
    audioTic.current.play()
    }
  
  function inicioTurno(){
    inicio = Date.now()
   }
    
  async function BuscaECO(){
    let ecoActualCrudo=chess.ascii()
    let ecoActual=ecoActualCrudo.slice(30,-58)
    let buscaECO = encodeURIComponent(ecoActual)
    const resposta = await fetch (BACKEND_URL+"/XadrezAPI/ECO/busca/?Ascii="+buscaECO)
    const ECO = await resposta.json()
    let Codigo=ECO[0]
    if (Codigo.ECOcode) {setCodigoECO(Codigo.ECOcode)}
    if (Codigo.OpeningName) {setOpName(Codigo.OpeningName)}
    if (Codigo.OpeningPlayed) {setOpPlayed(Codigo.OpeningPlayed)}
    }

  function PintaPartida() {
  arrayPGN=chess.history()
  for (let indice=0;indice<=arrayPGN.length;indice+=2) {  
    let obxetoXogada = {
      id: (indice/2+1).toFixed(0),
      blancas: arrayPGN[indice],
      negras: arrayPGN[indice+1],
      }
    arrayXogada.push(obxetoXogada)
    setArrayObxetosXogada(arrayXogada)
    } 
  }

 //Funcion xenera Taboleiro8x8()
  function xeneraTaboleiro() {
    let TodoTaboleiro = chess.ascii();
    let filasSucias = TodoTaboleiro.split("|").filter(
      (fila) => fila.length === 24
    );
    let filasLimpias = [];
    let Taboleiro8x8 = [];
    filasSucias.forEach((fila) =>
      filasLimpias.push(Array.from(fila).filter((caracter) => caracter !== " "))
    );
    filasLimpias.forEach((fila) =>
      Taboleiro8x8.push(
        fila.map((casilla) => (casilla !== "." ? casilla : " "))
      )
    );
    return Taboleiro8x8;
  }
  
  function PulsadoInicio(event) {
    pulsado=event.target.id   
    if(buscandoInicio.current) { 
        setCasillaInicio(pulsado)
        buscandoInicio.current=false
      }
      else {
        setCasillaFin(pulsado)
        setDatosCompletos(true)
        buscandoInicio.current=true
      }
    }
  
  function Dragado(event) { 
    setCasillaInicio(event.target.id)
    }
  function Dragover(event) {
      event.preventDefault()
    }
  function Dropado(event) {
    event.preventDefault()
    setCasillaFin(event.target.id)
    }
  function Auto () {
    if (audio.current.paused) {
      audio.current.play()
      audio.current.loop=true
      alert ('Obra: En Movimiento \n\r Música de https://www.fiftysounds.com/es/ ')
      }
    else {
      audio.current.pause()
      audio.current.loop=false
      }
    }

  function manexadorGraba() {
    const pgn=chess.pgn()
    const resposta = fetch (BACKEND_URL+"/XadrezAPI/partida", 
      {
        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify (
          { Event:evento,
            Site:site,
            Date: data,
            Round: round,
            White: white,
            Black: black,
            Result: result, 
            ECO: codigoECO,
            PGNGame: pgn
          }
        )
      }
    )
  alert ("Partida Grabada OK");
  }

  function Bwin(){
    setResult("1-0")
  }
  function Draw(){
    setResult("1/2-1/2")
  }
  function Nwin(){
    setResult("0-1")
  }
  function Other(){
    setResult("*")
  }

  function maisTempo(){
    setTempoB(tempoB+60)
    setTempoN(tempoN+60)
  }   
  function menosTempo(){
    setTempoB(tempoB-60)
    setTempoN(tempoN-60)
  }   


  return (
    
    // Pinta o taboleiro en pantalla
    <>
    <div className={style.container}>
      
      <p>Xogan: {(turno==="w" && " Brancas") || (turno==="b" && " Negras")}</p>
      <p>Xaque: {xaque && " Xaque !"}</p>
      <p>Empate: {empate && " Taboas"}</p>
      <p>Fin: {gameOver && " Fin !!"}</p>
      <button onClick={manexadorGraba}>Grabar partida</button>
      <button onClick={Auto}>Música</button>
      <p>{codigoECO}</p>
      <p>{opName}</p>
      <p>{opPlayed}</p>
      <div>
      BRANCAS:{white}
      </div>
      <div>
      <img src={brancas} alt="B"></img>
      </div>
      <div>
      NEGRAS:{black}
      </div>
      <div>
      <img src={negras} alt="N"></img>
      </div>
    </div>

    <div className={style.bordeV}>
      <div>8</div><div>7</div><div>6</div><div>5</div><div>4</div><div>3</div><div>2</div><div>1</div>      
      </div> 

    <div className={style.bordeH}>
      <div>a</div><div>b</div><div>c</div><div>d</div><div>e</div><div>f</div><div>g</div><div>h</div>      
      </div> 

    <div className={style.tempo}>
    <button onClick={maisTempo}>+</button>{("00"+(tempoB/60).toFixed(2)).slice(-6)} - {("00"+(tempoN/60).toFixed(2)).slice(-6)}<button onClick={menosTempo}>-</button> 
    </div>

    <div className={style.partidaPGN}>
        <p>{evento}</p>
        <p>[{round}]</p>
        <p>{site}</p>
        <p>{data}</p>
        <hr></hr>
        {arrayObxetosXogada.map( xogada => <p key={xogada.id}>{xogada.id+". "} {xogada.blancas} {xogada.negras}</p>)}
    </div>

    <div className={style.resultado}> 
    <button onClick={Bwin}>1-0</button><button onClick={Draw}>1/2-1/2</button><button onClick={Nwin}>0-1</button><button onClick={Other}>*</button>
    </div>

    <div className={style.taboleiro}>
      <div className={style.b} id="a8" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[0][0]}
      </div>
      <div className={style.n} id="b8" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[0][1]}
      </div>
      <div className={style.b} id="c8" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[0][2]}
      </div>
      <div className={style.n} id="d8" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[0][3]}
      </div>
      <div className={style.b} id="e8" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[0][4]}
      </div>
      <div className={style.n} id="f8" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[0][5]}
      </div>
      <div className={style.b} id="g8" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[0][6]}
      </div>
      <div className={style.n} id="h8" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[0][7]}
      </div>
      <div className={style.n} id="a7" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[1][0]}
      </div>
      <div className={style.b} id="b7" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[1][1]}
      </div>
      <div className={style.n} id="c7" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[1][2]}
      </div>
      <div className={style.b} id="d7" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[1][3]}
      </div>
      <div className={style.n} id="e7" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[1][4]}
      </div>
      <div className={style.b} id="f7" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[1][5]}
      </div>
      <div className={style.n} id="g7" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[1][6]}
      </div>
      <div className={style.b} id="h7" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[1][7]}
      </div>
      <div className={style.b} id="a6" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[2][0]}
      </div>
      <div className={style.n} id="b6" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[2][1]}
      </div>
      <div className={style.b} id="c6" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[2][2]}
      </div>
      <div className={style.n} id="d6" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[2][3]}
      </div>
      <div className={style.b} id="e6" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[2][4]}
      </div>
      <div className={style.n} id="f6" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[2][5]}
      </div>
      <div className={style.b} id="g6" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[2][6]}
      </div>
      <div className={style.n} id="h6" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[2][7]}
      </div>
      <div className={style.n} id="a5" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[3][0]}
      </div>
      <div className={style.b} id="b5" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[3][1]}
      </div>
      <div className={style.n} id="c5" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[3][2]}
      </div>
      <div className={style.b} id="d5" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[3][3]}
      </div>
      <div className={style.n} id="e5" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[3][4]}
      </div>
      <div className={style.b} id="f5" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[3][5]}
      </div>
      <div className={style.n} id="g5" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[3][6]}
      </div>
      <div className={style.b} id="h5" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[3][7]}
      </div>
      <div className={style.b} id="a4" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[4][0]}
      </div>
      <div className={style.n} id="b4" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[4][1]}
      </div>
      <div className={style.b} id="c4" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[4][2]}
      </div>
      <div className={style.n} id="d4" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[4][3]}
      </div>
      <div className={style.b} id="e4" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[4][4]}
      </div>
      <div className={style.n} id="f4" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[4][5]}
      </div>
      <div className={style.b} id="g4" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[4][6]}
      </div>
      <div className={style.n} id="h4" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[4][7]}
      </div>
      <div className={style.n} id="a3" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[5][0]}
      </div>
      <div className={style.b} id="b3" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[5][1]}
      </div>
      <div className={style.n} id="c3" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[5][2]}
      </div>
      <div className={style.b} id="d3" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[5][3]}
      </div>
      <div className={style.n} id="e3" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[5][4]}
      </div>
      <div className={style.b} id="f3" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[5][5]}
      </div>
      <div className={style.n} id="g3" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[5][6]}
      </div>
      <div className={style.b} id="h3" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[5][7]}
      </div>
      <div className={style.b} id="a2" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[6][0]}
      </div>
      <div className={style.n} id="b2" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[6][1]}
      </div>
      <div className={style.b} id="c2" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[6][2]}
      </div>
      <div className={style.n} id="d2" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[6][3]}
      </div>
      <div className={style.b} id="e2" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[6][4]}
      </div>
      <div className={style.n} id="f2" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[6][5]}
      </div>
      <div className={style.b} id="g2" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[6][6]}
      </div>
      <div className={style.n} id="h2" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[6][7]}
      </div>
      <div className={style.n} id="a1" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[7][0]}
      </div>
      <div className={style.b} id="b1" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[7][1]}
      </div>
      <div className={style.n} id="c1" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[7][2]}
      </div>
      <div className={style.b} id="d1" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[7][3]}
      </div>
      <div className={style.n} id="e1" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[7][4]}
      </div>
      <div className={style.b} id="f1" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[7][5]}
      </div>
      <div className={style.n} id="g1" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[7][6]}
      </div>
      <div className={style.b} id="h1" draggable="true" onDrag={Dragado} onDragOver={Dragover} onDrop={Dropado} onClick={PulsadoInicio} >
        {taboleiro[7][7]}
      </div>
    </div>
    </>
  );
}