import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import { Switch, Route, Redirect } from 'react-router-dom'; //// ath
import FrontPage from './FrontPage/FrontPage';
import BossesContainer from './BossesContainer/BossesContainer'

class App extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ FrontPage } />
                        <Route exact path="/bosses" component={ BossesContainer } />
                        <Route path="/news" render={() => <Redirect to="/" />} />
                    </Switch>
                </div>
            </>
        );
    }
}

export default App;
