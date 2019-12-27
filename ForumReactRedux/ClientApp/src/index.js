import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import  history  from './config/history';
import store from './config/store';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

import Header from './components/Header';
import AllQuestionsPage from './containers/AllQuestionsPage';
import QuestionPage from './containers/QuestionPage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Profile from './components/Profile';


import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Provider store = { store }>
        <Router history = { history }>
            <Header />
            <Route exact path = '/' component = { Home }/>
            <Route exact path = '/questions' component = { AllQuestionsPage }/>
            <Route path = '/questions/:id' component = { QuestionPage }/>
            <Route path = '/register' component = { RegisterForm }/>
            <Route path = '/login' component = { LoginForm }/>
            <Route path = '/profile' component = { Profile }/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
