import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHsitory from 'history/createBrowserHistory';
import App from './components/App';
import './index.css';
import Jokes from './components/Jokes';
import Header from './components/Header';
import { resolve } from 'dns';


ReactDOM.render(
    <Router history={createBrowserHsitory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route path='/jokes' render={()=><Header><Jokes /></Header>} />
        </Switch>
    </Router >,
            document.getElementById('root')
        );
        
        
        
        
        
        
        
        
        
        
        /* -------------------------- Fetch API using Hood Promise implementation code -------------------------- */
        /*
new Promise((resolve, reject) => {
    return reject(new Error('No bears'));
        
    setTimeout(() => {
                resolve('bears, beets, battlestar');
            }, 2000);
        })
    .then(quote => {
                console.log(quote);
            })
            .catch(error => console.log('error', error));
*/