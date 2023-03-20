import Game from './game.js'
import {banana} from './game.js'

window.onload = () => {
    console.log(banana)
    const game = new Game();
    game.start();
};