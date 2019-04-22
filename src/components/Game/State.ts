import Bullet from '../Bullet/Props';
import Enemy from '../Enemy/Props';

export default interface State {
    positionPlayer: number;
    playerBullets: Bullet[],
    enemies: Enemy[],
    enemiesBullets: Bullet[],
}