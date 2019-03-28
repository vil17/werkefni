import React from 'react';
import NavigationBar from './NavigationBar/';
import { Switch, Route } from 'react-router-dom'; //// ath
import FrontPage from './FrontPage'
import BossesContainer from './BossesContainer'
import AddBossForm from './AddBossForm'

const App = () => {
        return (
            <>
                <NavigationBar />
                <AddBossForm />
                <hr />
                <BossesContainer />
                {/* <div className="container">
                    <Switch>
                        <Route exact path="/" component={ FrontPage } />
                        <Route exact path="/bosses" component={ BossesContainer } />
                        <Route exact path="/addboss" component={ AddBossForm } />
                    </Switch>
                </div> */}
            </>
        );
    }


export default App;
