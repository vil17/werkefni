import React, { Component } from 'react';
import NavigationBar from './NavigationBar/';
import { Provider } from 'react-redux';

import { Switch, Route } from 'react-router-dom'; //// ath
import FrontPage from './FrontPage'
import BossesContainer from './BossesContainer'
import AddBossForm from './AddBossForm'
import BossDetail from './BossDetail'

import store from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationBar />
                { <div className="container jumbotron">
                    <Switch>
                    <Route exact path="/" component={ FrontPage } />
                    <Route exact path="/bosses" component={ BossesContainer } />
                    <Route exact path="/addboss" component={ AddBossForm } />
                    <Route exact path="/bosses/:bossId" component={ BossDetail } />

                    </Switch>
                </div>}
            </Provider>
        );
    }
}
export default App;
