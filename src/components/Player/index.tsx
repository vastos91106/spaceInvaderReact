import * as React from 'react'
import {css} from "aphrodite/no-important";

import style from './style';
import Props from "./Props";
import * as background from "./images/background.png";

const Player: React.FunctionComponent<Props> = (props) => {
    return (
        <div style={{marginLeft: props.marginLeft}} className={css(style.container)}>
            <img src={background}
                 className={css(style.img)}
            />
        </div>
    )
};

export default Player