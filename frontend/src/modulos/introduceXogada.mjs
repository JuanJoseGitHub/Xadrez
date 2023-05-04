import { Chess } from "chess.js";
// import TaboleiroMover from "../componentes/TaboleiroMover";
// import VisualizaPGNcon from "../componentes/VisualizaPGNconPartida";

let part

const chess=new Chess()
/*chess.move({ from: 'e2', to: 'e4'})
chess.move({ from: 'e7', to: 'e5'})
chess.move({ from: 'g1', to: 'f3'})
chess.move({ from: 'b8', to: 'c6'})
part=chess.history()
console.log(part)*/

function procesarMovemento(movemento) {
    try {
        chess.move({ from: movemento.casillaInicio, to: movemento.casillaFin})
        console.log(chess.history());
    } catch (excepcion) {
        console.log("Ilegal!!!");
    }
}

export {part, chess, procesarMovemento}

