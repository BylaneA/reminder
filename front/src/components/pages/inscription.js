import React, { Component } from 'react';

class Inscription extends Component {
  render() {
    return (
      <div className="container-register">
      	<div className="triangles">
          <div className="redTriangle">
          </div>
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

          <button className="button-register">S'inscrire</button>
      		
          

      	</div>

      
      </div>
        
      
    );
  }
}

export default Inscription;
