import * as React from 'react';
import {css} from 'aphrodite/no-important';


import style from './style';

import Player from '../Player';
import Bullet from '../Bullet';
import Enemy from "../Enemy";


import State from "./State";

import Move from './Move';
import EnemyMovement from './Enemy';
import Sound from './sound/Sound';


class Game extends React.Component<any, State> {
    constructor(props) {
        super(props);

        this.state = {
            positionPlayer: 200,
            playerBullets: [],
            enemies: [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: 100,
                    y: 0
                },

                {
                    x: 200,
                    y: 0
                }
                ,
                {
                    x: 300,
                    y: 0
                },
                {
                    x: 0,
                    y: 50
                },
                {
                    x: 100,
                    y: 50
                },

                {
                    x: 200,
                    y: 50
                }
                ,
                {
                    x: 300,
                    y: 50
                }
            ],
            enemiesBullets: []
        };

        this.keyPress = this.keyPress.bind(this);
        this.bulletFly = this.bulletFly.bind(this);
        this.moveEnemies = this.moveEnemies.bind(this);
        this.fireEnemies = this.fireEnemies.bind(this);
        this.collision = this.collision.bind(this);
        this.updateSpeed = this.updateSpeed.bind(this);
    }

    Movement = new Move(this);
    EnemyMovement = new EnemyMovement(this);
    Sound = new Sound();

    componentDidMount() {
        document.addEventListener("keydown", this.keyPress, false);

        window.setInterval(this.bulletFly, 100);

        this.EnemySpeedTimer = window.setInterval(this.moveEnemies, this.EnemySpeedTime);
        window.setInterval(this.fireEnemies, 5000);
        window.setInterval(this.collision, 100);

    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPress, false);
    }

    updateSpeed() {
        window.clearInterval(this.EnemySpeedTimer);

        this.EnemySpeedTime -= 100;

        this.EnemySpeedTimer = window.setInterval(this.moveEnemies, this.EnemySpeedTime);
    }

    keyPress(e) {

        if (e.keyCode === 39) {
            this.Movement.moveRight();

        } else if (e.keyCode === 37) {
            this.Movement.moveLeft();
        } else if (e.keyCode === 32) {
            const isSuccess = this.Movement.fire();
            if (isSuccess) {
                this.Sound.shoot();
            }
        }
    }

    EnemySpeedTimer: any;
    EnemySpeedTime = 1000;

    moveEnemies() {
        this.EnemyMovement.moveEnemies();
        //this.Sound.enemyMoved();
    }

    fireEnemies() {
        this.EnemyMovement.fireEnemies();
        this.Sound.shoot();
    }

    collision() {
        this.state.playerBullets.forEach((bullet, index) => {
            if (bullet.y < 0) {
                this.state.playerBullets.splice(index, 1);
            } else {
                this.state.enemies.forEach((enemy, _index) => {
                    if ((bullet.y >= enemy.y && bullet.y < enemy.y + 30) && (bullet.x >= enemy.x && bullet.x < enemy.x + 50)) {
                        this.state.enemies.splice(_index, 1);

                        this.Sound.enemyKilled();
                        this.updateSpeed();
                        this.state.playerBullets.splice(index, 1);
                    }
                })
            }
        });

        this.state.enemiesBullets.forEach((bullet, index) => {
            if (bullet.y > 355) {
                this.state.enemiesBullets.splice(index, 1);
            }
        })

    }

    bulletFly() {
        this.setState({
            playerBullets: this.state.playerBullets.map((bullet) => {
                bullet.y -= 10;

                return bullet;
            }),
            enemiesBullets: this.state.enemiesBullets.map((bullet) => {
                bullet.y += 10;

                return bullet;
            })
        })
    }

    render() {
        return (
            <div className={css(style.container)}>
                {
                    this.state.enemies.map((bullet) => {
                        return <Enemy x={bullet.x} y={bullet.y}/>
                    })
                }
                {
                    this.state.enemiesBullets.map((bullet) => {
                        return <Bullet key={bullet.x + bullet.y} x={bullet.x} y={bullet.y}/>
                    })
                }
                {
                    this.state.playerBullets.map((bullet) => {
                        return <Bullet x={bullet.x} y={bullet.y}/>
                    })
                }
                <Player marginLeft={this.state.positionPlayer}/>
            </div>
        )
    }
}

export default Game;