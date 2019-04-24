import React, {Component} from 'react';

import Header from './components/Header/Header'
import Main from './components/Main/Main'

import './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;
