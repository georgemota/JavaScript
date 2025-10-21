import _ from 'underscore';
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';

// import javascriptLogo from './javascript.svg';
// import viteLogo from '/vite.svg';
// import { setupCounter } from './counter.js';

import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

deck = crearDeck(tipos, especiales);
console.log({deck});

// Esta función me permite tomar una carta

 // const pedirCarta = () => {

//     if ( deck.length === 0 ) {
//         throw 'No hay cartas en el deck';
//     }
//     const carta = deck.pop();
//     return carta;
// }

// pedirCarta();

// const valorCarta = ( carta ) => {

//     const valor = carta.substring(0, carta.length - 1);
//     return ( isNaN( valor ) ) ? 
//             ( valor === 'A' ) ? 11 : 10
//             : valor * 1;
// }

// turno de la computadora
// const turnoComputadora = ( puntosMinimos ) => {

//     do {
//         const carta = pedirCarta(deck);
//         puntosComputadora = puntosComputadora + valorCarta( carta );
//         console.log(valorCarta(carta));
//         puntosHTML[1].innerText = puntosComputadora;
//         // <img class="carta" src="assets/cartas/2C.png">
//         const imgCarta = document.createElement('img');
//         imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
//         imgCarta.classList.add('carta');
//         divCartasComputadora.append( imgCarta );

//         if( puntosMinimos > 21 ) {
//             break;
//         }

//     } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

//     setTimeout(() => {
//         if( puntosComputadora === puntosMinimos ) {
//             alert('Nadie gana :(');
//         } else if ( puntosMinimos > 21 ) {
//             alert('Computadora gana')
//         } else if( puntosComputadora > 21 ) {
//             alert('Jugador Gana');
//         } else {
//             alert('Computadora Gana')
//         }
//     }, 100 );
// }

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    puntosJugador = puntosJugador + valorCarta( carta );
    console.log(valorCarta(carta));
    
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck   );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck   );    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck   );});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});