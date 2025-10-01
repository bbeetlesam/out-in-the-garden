import { AUTO, Game, Scale } from 'phaser';
import { Boot } from './scenes/Boot';
import { Preloader } from './scenes/Preloader';
import { Disclaimer } from './scenes/Disclaimer';
import { Prologue } from './scenes/Prologue';
import { GameOver } from './scenes/GameOver';

const config: Phaser.Types.Core.GameConfig = {
    title: 'Out in the Garden',
    url: 'https://bbeetlesam.itch.io/out-in-the-garden',
    version: '0.0.0',

    type: AUTO,
    width: 1280,
    height: 800,
    parent: 'game-container',
    backgroundColor: '#000000ff',
    scene: [
        Boot,
        Preloader,
        Disclaimer,
        Prologue,
        GameOver
    ],
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    input: {
        keyboard: true,
        mouse: true,
        windowEvents: true
    },
    render: {
        pixelArt: false,
        antialias: true,
    },
    // @ts-ignore
    resolution: window.devicePixelRatio,
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
