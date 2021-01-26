import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route exact path={'/rooms/:id'} component={App} />
        </Provider>
    </Router>,
    document.getElementById('root2')
);
