import { Chess } from "chess.js";

const chess=new Chess()

function procesarMovemento(movemento) {
    try {
        chess.move(movemento)
    } catch (excepcion) {
        console.log("Ilegal!!!");
    }
}

export { chess, procesarMovemento}
console.log("Deep Blue working...");