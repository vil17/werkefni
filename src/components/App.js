import React from 'react';
import NavigationBar from './NavigationBar/';
import { Switch, Route } from 'react-router-dom'; //// ath
import FrontPage from './FrontPage'
import BossesContainer from './BossesContainer'

const App = () => {
        return (
            <>
                <NavigationBar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ FrontPage } />
                        <Route exact path="/bosses" component={ BossesContainer } />
                    </Switch>
                </div>
            </>
        );
    }


export default App;
