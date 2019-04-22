import State from "./State";

class Move {
    constructor(context) {
        this.context = context;
        this.clearFireTimeout = this.clearFireTimeout.bind(this);
    }

    context: any;
    IsFire: boolean;

    moveRight() {
        if (this.context.state.positionPlayer !== 550) {
            this.context.setState({
                positionPlayer: this.context.state.positionPlayer + 10
            })
        }
    }

    moveLeft() {
        if (this.context.state.positionPlayer !== 0) {
            this.context.setState({
                positionPlayer: this.context.state.positionPlayer - 10
            })
        }
    }

    fire(): boolean {
        let isSuccess = false;
        if (!this.IsFire) {
            this.IsFire = true;
            isSuccess = true;

            window.setTimeout(this.clearFireTimeout, 1000);

            const state = this.context.state as State;

            state.playerBullets.push({
                x: state.positionPlayer + 20,
                y: 350
            })
        }
        return isSuccess;
    }

    clearFireTimeout() {
        this.IsFire = false;
    }

}

export default Move;