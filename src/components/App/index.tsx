import * as React from 'react';
import {css} from "aphrodite/no-important";

import style from './style';

import Game from '../Game';

import * as background from './images/background.png';

const App: React.FunctionComponent = () => {
    return (
        <div className={css(style.container)}>
            <img src={background} className={css(style.img)}/>
            <Game/>
        </div>
    )
};

export default App;