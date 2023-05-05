import { Chess } from "chess.js";

let part

const chess=new Chess()

function procesarMovemento(movemento) {
    try {
        chess.move(movemento)
        console.log(chess.history());
    } catch (excepcion) {
        console.log("Ilegal!!!");
    }
}

export {part, chess, procesarMovemento}
console.log("Deep Blue working...");