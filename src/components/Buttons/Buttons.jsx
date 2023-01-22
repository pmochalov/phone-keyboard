import React from "react";
import s from './Buttons.module.scss';

const Buttons = (props) => {
    return (
        <div className={s.buttons}>
            {props.children}
        </div>
    );
};

export default Buttons;