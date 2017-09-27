import React, { Component } from 'react';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Connexion from './components/pages/connexion';
import Dashboard from './components/pages/dashboard';

// style
import './assets/css/style.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        
        <Header />

		

        <Footer />


      </div>
        
      
    );
  }
}

export default App;