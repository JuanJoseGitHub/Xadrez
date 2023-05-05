import { Chess } from "chess.js";

let part

const chess=new Chess()

function procesarMovemento(movemento) {
    try {
        chess.move(movemento)
    } catch (excepcion) {
        console.log("Ilegal!!!");
    }
}

export {part, chess, procesarMovemento}
console.log("Deep Blue working...");