import * as React from 'react'
import ReactDOM from 'react-dom'
import DemoLitComponent from './components/DemoLitComponent';
import LifecycleComponent from './components/LifecycleComponent';


function App() {
    return (
        <div>
            <demo-lit-component></demo-lit-component>
            <lifecycle-component></lifecycle-component>

        </div>
    );
    
}

ReactDOM.render(<App />, document.querySelector('#root'))