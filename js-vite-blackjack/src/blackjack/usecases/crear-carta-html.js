/**
 * 
 * @param {String} carta se requiere una carta
 * @returns {HTMLImageElement} IMG HTML de retorno
 */
export const crearCartaHTML = (carta) => {

    if (!carta) throw new error ('Se requiere la carta');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}