import * as React from 'react';
import {css} from "aphrodite";

import Props from "./Props";

import style from './style';


import * as background from './images/enemy.png';

const Enemy: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={css(style.container)} style={{marginLeft: props.x, marginTop: props.y}}>
            <img src={'https://media.giphy.com/media/Qz9jVV6CiRSuI/200.gif'}
                 className={css(style.img)}
            />
        </div>
    )
};

export default Enemy;