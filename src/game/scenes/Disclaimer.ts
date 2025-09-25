import { Scene } from 'phaser';

export class Disclaimer extends Scene
{
    constructor ()
    {
        super('Disclaimer');
    }

    create ()
    {
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;
        const fadeDuration = 1700; // in ms (1s = 1000ms)

        const text = [
            '', '',
            'This game is a fictional work exploring heavy emotional themes.',
            'It is not professional advice or guidance.',
            'If you are struggling, please seek support from trusted people or local services.',
            '',
            'Press any key to continue.'
        ].join('\n');

        const redText = this.add.text(centerX, centerY - 130, 'BEFORE YOU PLAY,', {
            fontFamily: '"Winky Sans"',
            fontSize: '38px',
            color: '#ff4d4d',
            align: 'center'
        }).setOrigin(0.5);

        const disclaimerText = this.add.text(centerX, centerY, text, {
            font: '32px "Winky Sans"',
            fontStyle: 'italic',
            color: '#ffffff',
            lineSpacing: 10, letterSpacing: 1,
            align: 'center'
        }).setOrigin(0.5);

        // init alpha for the text
        redText.alpha = 0;
        disclaimerText.alpha = 0;

        // fade out and start next scene
        const startNextScene = () => {
            // disable input after first input
            this.input.off('pointerdown', startNextScene);
            this.input.keyboard?.off('keydown', startNextScene);

            this.tweens.add({
                targets: [redText, disclaimerText],
                alpha: 0,
                duration: fadeDuration / 1.5,
                ease: 'Linear',
                completeDelay: 500,
                onComplete: () => {
                    this.scene.start('Game');
                }
            });
        };

        // fade in on scene start
        this.tweens.add({
            targets: [redText, disclaimerText],
            alpha: 1,
            duration: fadeDuration,
            ease: 'Linear',
            onComplete: () => {
                // add once listener for starting the next scene
                this.input.once('pointerdown', startNextScene);
                this.input.keyboard?.once('keydown', startNextScene);
            }
        });
    }
}
