import React, { Component } from 'react';
import Dashboard from '../../components/pages/dashboard';

//Router
import { Route, Link } from 'react-router-dom';

class Inscription extends Component {
  render() {
    return (
      <div className="container-register">
      	<div className="triangles">
          <div className="redTriangle"></div>
          <div className="blackTriangle"></div>
        </div>
      	<div className="concept">
      		<h1>Inscription</h1>
          <div className="form-register">
        		<div className="labels-register">
              <label for="userName">Nom d'utilisateur :</label>
              <label for="email">E-mail :</label>
              <label for="password">Mot de passe :</label>
              
            </div>
            <div className="inputs-register">
              <input type="text" name="userName" id="userName"/>
              <input type="text" name="email" id="email" />
              <input type="text" name="password" id="password"/>
            </div>
          </div>
          <Link to="/dashboard">
          <button className="button-register">S'inscrire</button>
      		</Link>
          

          <Route path='/dashboard' component={Dashboard} />

      	</div>

      
      </div>
        
      
    );
  }
}

export default Inscription;
