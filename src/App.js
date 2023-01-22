import React, { useState } from 'react';
import './App.scss';
import Keyboard from './components/Keyboard/Keyboard';
import NumField from './components/NumField/NumField';
import Buttons from './components/Buttons/Buttons';
import Button from './components/Button/Button';
import { buttons } from './buttonsData.js';

function App() {

    const [number, setNumber] = useState('');

    const handleClickBtn = (value) => {
        setNumber(number + value)
    }

    const handleClickBackspace = () => {
        setNumber(number.substring(0, number.length - 1))
    }

    return (
        <div className="App">
            <Keyboard>
                <NumField number={number} />
                <Buttons>
                    {buttons.map(btn =>
                        <Button
                            onClick={() => handleClickBtn(btn.value)}
                            key={btn.value}
                            value={btn.value}
                        />
                    )}
                    <Button isDisabled={!Boolean(number.length)} onClick={() => handleClickBackspace()} />
                </Buttons>
            </Keyboard>
        </div>
    );
}

export default App;
