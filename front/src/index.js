import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './App';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Connexion from './components/pages/connexion';
import Inscription from './components/pages/inscription';

//Router
import { BrowserRouter } from 'react-router-dom';

//styles
import './assets/css/style.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


ReactDOM.render(
  <App />,
  document.getElementById('root')

  
);
