import { Scene, GameObjects } from 'phaser';

export class Preloader extends Scene
{
    text: GameObjects.Text;

    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        // some sketchy background in Preloader
        this.add.image(centerX, centerY, 'disclaimer-bg')
            .setDisplaySize(this.cameras.main.width, this.cameras.main.height)
            .setAlpha(0.65);

        // progress bar
        const bar = this.add.rectangle(centerX - 230, centerY, 4, 28, 0xffffff); // bar
        this.add.rectangle(centerX, centerY, 468, 32).setStrokeStyle(1, 0xffffff); // outline

        // loading text
        this.text = this.add.text(centerX, centerY - 40, 'Loading...', {
            fontFamily: '"Winky Sans"',
            fontSize: '24px',
            color: '#ffffff'
        }).setOrigin(0.5);

        // use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress: number) => {
            bar.width = 4 + (460 * progress); // 464px wide
            this.text.setText(`Loading... ${Math.floor(progress * 100)}%`);
        });
    }

    preload ()
    {
        this.load.setPath('assets');

        // load the images
        this.load.image('background', 'bg.png');

        // load the sounds
        this.load.audio('ac-noise', '/sounds/looping-ac.ogg')
    }

    create ()
    {
        this.scene.start('Disclaimer');
    }
}
