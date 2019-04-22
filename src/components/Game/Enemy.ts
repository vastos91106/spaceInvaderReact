import State from "components/Game/State";

class Enemy {
    constructor(context) {
        this.context = context;
        this.isMoveLeft = true;
    }

    context: any;
    isMoveLeft: boolean;

    moveEnemies() {
        const state = this.context.state as State;

        const lastEnemy = this.context.state.enemies[this.context.state.enemies.length - 1];
        const firstEnemy = this.context.state.enemies[0];
        let isDown = false;


        if (this.isMoveLeft) {
            if (lastEnemy.x === 550) {
                this.isMoveLeft = false;
                isDown = true;
            }
        } else {
            if (firstEnemy.x === 0) {
                this.isMoveLeft = true;
                isDown = true;
            }
        }


        const enemies = state.enemies.map((enemy) => {
            enemy.x = this.isMoveLeft ? enemy.x + 50 : enemy.x - 50;
            enemy.y = isDown ? enemy.y + 20 : enemy.y;

            return enemy;
        });

        this.context.setState({
            enemies: enemies
        })
    }

    fireEnemies() {

        const bullets = this.context.state.enemiesBullets;


        for (let i = 0; i < this.context.state.enemies.length; i++) {
            const isFire = Math.random() >= 0.5;
            if (isFire) {
                const enemy = this.context.state.enemies[i];

                bullets.push({
                    x: enemy.x + 20,
                    y: enemy.y + 20
                })
            }
        }

        this.context.setState({
            enemiesBullets: bullets
        })
    }
}

export default Enemy;