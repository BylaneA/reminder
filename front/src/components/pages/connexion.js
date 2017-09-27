import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

class Connexion extends Component {
  render() {
    return (
        <div className="container-connexion">

          <div className="triangles">
            <div className="redTriangle"></div>
          </div>

          <div className="concept">
            <h1>Connexion</h1>

            <div className="form-register">
              <div className="labels-login">
                <label for="userName">Nom d'utilisateur 
                <br />ou email:</label>
                <label for="password">Mot de passe :</label>
              </div>

              <div className="inputs-login">
                <input type="text" name="userName" id="userName"/>
                <input type="text" name="password" id="password"/>
              </div>
            </div>

            <div className="link-forgot"><a href="#">Mot de passe oublié</a></div>
            
              <button className="button-login">Se connecter</button>

          </div>  
        </div> 
      
    );
  }
}

export default Connexion;