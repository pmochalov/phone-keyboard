import React from "react";
import s from './Button.module.scss';

const Button = ({value, onClick, isDisabled=false}) => {
    return (
        <button disabled={isDisabled} onClick={onClick} className={s.button}>{value}</button>
    );
};

export default Button;