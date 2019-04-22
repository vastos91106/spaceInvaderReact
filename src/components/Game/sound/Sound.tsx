import * as EnemyKilled from './invaderkilled.wav';
import * as EnemyMoved from './invadermove.wav';

import * as shoot from './shoot.wav';

import * as Song from './song.mpeg';

class Sound {
    async enemyKilled() {
        const audio = await this.generateAudio(EnemyKilled);
        audio.play();
    }

    async enemyMoved() {
        const audio = await this.generateAudio(EnemyMoved);
        audio.play();
    }

    async shoot() {
        const audio = await this.generateAudio(shoot);
        audio.play();
    }

    async song() {
        const audio = await this.generateAudio(Song);
        audio.play();
    }

    private generateAudio(path) {
        return new Audio(path)
    }
}

export default Sound;