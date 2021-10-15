import kaboom from 'kaboom';
import type { KaboomCtx, KaboomConf } from 'kaboom';

const kaboomOptions: KaboomConf = {
    background: [0,0,0],
    width: 854,
    height: 480,
    crisp: true
};
const k = kaboom(kaboomOptions);

function createLabel(k: KaboomCtx, message: string) {
    k.add([
        k.text(message, { font: 'sinko', size: 72 }),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.color(255, 255, 255),
        k.origin('center')
    ])
}

k.scene('main', () => {
    createLabel(k, 'Hello Kaboom');
})

k.go('main');