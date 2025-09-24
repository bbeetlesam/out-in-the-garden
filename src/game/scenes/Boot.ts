import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    async init ()
    {
        // load the fonts (use await to ensure they're loaded before starting Preloader)
        await document.fonts.load('1em "Winky Sans"');
    }

    preload ()
    {
        // used to load in any assets required for Preloader, such as a game logo or background
        this.load.image('disclaimer-bg', 'assets/disclaimer-bg.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
