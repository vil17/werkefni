import React, { Component } from 'react';
//import NavigationBar from './NavigationBar/';
import { Provider } from 'react-redux';

//import { Switch, Route } from 'react-router-dom'; //// ath
//import FrontPage from './FrontPage'
import BossesContainer from './BossesContainer'
import AddBossContainer from './AddBossForm'

import store from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AddBossContainer />
                <hr />
                <BossesContainer />
            </Provider>
        );
    }
}
export default App;
