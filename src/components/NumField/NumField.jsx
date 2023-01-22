import React from "react";
import s from './NumField.module.scss';

const NumField = ({number}) => {
    return (
        <div className={s.numfield}>
            {number}
        </div>
    );
};

export default NumField;