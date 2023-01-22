import React from "react";
import s from './Keyboard.module.scss';

const Keyboard = (props) => {
    return (
        <div className={s.keyboard}>{props.children}</div>
    );
};

export default Keyboard;