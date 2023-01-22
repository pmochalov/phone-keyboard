import './App.scss';
import Keyboard from './components/Keyboard/Keyboard';
import NumField from './components/NumField/NumField';
import Buttons from './components/Buttons/Buttons';
import Button from './components/Button/Button';
import {buttons} from './buttonsData.js';

function App() {

    return (
        <div className="App">
            <Keyboard>
                <NumField num="79115906445" />
                <Buttons>
                    {buttons.map(btn => <Button key={btn.value} value={btn.value}/>)}
                </Buttons>
            </Keyboard>
        </div>
    );
}

export default App;
