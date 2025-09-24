import { Scene, GameObjects } from 'phaser';

export class Disclaimer extends Scene
{
    background: GameObjects.Image;
    disclaimer_text: GameObjects.Text;

    constructor ()
    {
        super('Disclaimer');
    }

    create ()
    {
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        const text = [
            '', '',
            'This game is a fictional work exploring heavy emotional themes.',
            'It is not professional advice or guidance.',
            'If you are struggling, please seek support from trusted people or local services.',
            '',
            'Press any key to continue.'
        ].join('\n');

        this.add.text(centerX, centerY - 130, 'BEFORE YOU PLAY,', {
            fontFamily: '"Winky Sans"',
            fontSize: '38px',
            color: '#ff4d4d',
            align: 'center'
        }).setOrigin(0.5);

        this.disclaimer_text = this.add.text(centerX, centerY, text, {
            font: '32px "Winky Sans"', fontStyle: 'italic',
            color: '#ffffff',
            lineSpacing: 10, letterSpacing: 1,
            align: 'center'
        }).setOrigin(0.5);

        const nextScene = () => {
            this.scene.start('Game');
        };

        // move to the next scene by doing anything
        this.input.once('pointerdown', nextScene);
        this.input.keyboard?.once('keydown', nextScene);
    }
}
