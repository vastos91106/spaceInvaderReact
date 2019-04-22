import * as React from 'react';
import {css} from "aphrodite";

import style from './style';
import Props from "./Props";
import * as background from "./images/background.png";

const Bullet: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={css(style.container)} style={{marginLeft: props.x, marginTop: props.y}}>
        </div>
    )
};

export default Bullet;