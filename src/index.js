import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Auth from './services/auth';
import Database from './services/database';

const authService = new Auth()
const databaseService = new Database()



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App authService={authService} databaseService={databaseService}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
