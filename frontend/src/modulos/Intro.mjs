import { Chess } from "chess.js";
import erro2 from '../musica/erro2.wav'

const chess=new Chess()

function procesarMovemento(movemento) {
    try {
        chess.move(movemento)
    } catch (excepcion) {
        console.log("Ilegal!!!")
        new Audio(erro2).play();
    }
}

export { chess, procesarMovemento}
console.log("Deep Blue working...");