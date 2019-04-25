import React, {Component} from 'react';

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Contact from './components/Contact/Contact'

import './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Contact/>
            </div>
        );
    }
}

export default App;
