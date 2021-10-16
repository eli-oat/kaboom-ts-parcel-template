import kaboom, { SpriteCompConf } from 'kaboom';
import type { KaboomCtx, KaboomConf } from 'kaboom';
import castle from './static/images/castle.png';
import dino from './static/images/dinospritesheet.png';

const kaboomOptions: KaboomConf = {
    background: [0,0,0],
    width: 854,
    height: 480,
    crisp: true,
    stretch: true,
    letterbox: true
};
const k = kaboom(kaboomOptions);
k.loadSprite('castle', castle);
k.loadSpriteAtlas(dino, {
    'dino': {
        x: 0,
        y: 0,
        width: 576,
        height: 24,
        sliceX: 24,
        anims: {
            idle: { from: 0, to: 3, loop: true, speed: 7 },
            move: { from: 4, to: 9, loop: true, speed: 7 },
            kick: { from: 10, to: 12, loop: true, speed: 7 },
            hurt: { from: 13, to: 16, loop: true, speed: 7 },
            crouch: { from: 17, to: 18, loop: true, speed: 7 },
            sneak: { from: 19, to: 23, loop: true, speed: 7 }
        }
    }
})

function createLabel(k: KaboomCtx, message: string) {
    k.add([
        k.text(message, { font: 'sinko', size: 72 }),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.color(255, 255, 255),
        k.origin('center')
    ])
}

function createSprite(k: KaboomCtx, id: string, config: SpriteCompConf = {}) {
    return k.add([
        k.sprite(id, config),
        k.pos(k.width() * 0.5, k.height() * 0.4),
        k.origin('bot')
    ])
}

k.scene('main', () => {
    createLabel(k, 'Hello Kaboom');
    createSprite(k, 'castle');
    const player = k.add([
        k.sprite('dino'),
        k.pos(128, 128),
        k.origin('bot')
    ])
    player.play('idle');
})

k.go('main');