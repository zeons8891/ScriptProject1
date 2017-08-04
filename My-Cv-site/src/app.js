const css = require('./app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,IndexRoute } from 'react-router'

import {Root} from './components/Root';
import {Home} from './components/Home';
import {Mycomponent} from './components/Mycomponent';







class App extends React.Component {
    render (){
        return(
            <Router history={browserHistory} >
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"resume"} component={Mycomponent}/>
                    <Route path={"home"} component={Home}/>

                    <Route path={"resume"} component={Mycomponent}/>
                </Route>
                <Route path={"home"} component={Home}/>

            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')


);