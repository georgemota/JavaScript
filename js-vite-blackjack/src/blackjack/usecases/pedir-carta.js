/**
 * 
 * @param {array<String>} deck Ejemplo: Tu baraja de cartas  
 * @returns {<String>} Una carta el deck 
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}