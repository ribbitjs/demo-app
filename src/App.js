import { Switch, Route } from 'react-router-dom'
import React from 'react';
import One from './one';
import Two from './two';


class App extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path = "/" component = {One}/>
                    <Route exact path = "/two" component = {Two}/>
                </Switch>
            </div>
        )
    }
}

export default App;