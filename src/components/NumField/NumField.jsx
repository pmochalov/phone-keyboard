import React from "react";
import s from './NumField.module.scss';

const NumField = ({num}) => {
    return (
        <div className={s.numfield}>
            {num}
        </div>
    );
};

export default NumField;