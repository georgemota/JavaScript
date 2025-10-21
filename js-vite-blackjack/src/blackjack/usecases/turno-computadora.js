import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora requiere para ganar
 * @param {HTMLElement} puntosHTML indice para localizar div receptor
 * @param {HTMLElement} divCartasComputadora 
 * @param {Array<String>} deck Deck de cartas
 */
export const turnoComputadora = ( puntosMinimos,  puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos ) throw new Eror( 'Puntos minitos son necesarios')
    if (!puntosHTML ) throw new Eror( 'Este argumento es necesario')
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta( carta );
        console.log(valorCarta(carta));
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}