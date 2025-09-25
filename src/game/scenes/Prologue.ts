import { Scene } from 'phaser';

export class Prologue extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('Prologue');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor('#00ff00');

        this.background = this.add.image(this.camera.centerX, this.camera.centerY, 'background');
        this.background.setAlpha(0.5);

        this.msg_text = this.add.text(this.camera.centerX, this.camera.centerY, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: '"Winky Sans"', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.msg_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }
}
