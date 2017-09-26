import React, { Component } from 'react';

class Inscription extends Component {
  render() {
    return (
      <div className="Container-Inscription">
      	<div className="triangles">
	      <div className="redTriangle"></div>
	     </div>
      	<div className="Concept">
      		<h1>Inscription</h1>
          <div className="formInscription">
        		<div className="labels">
              <label for="userName">Nom d'utilisateur :</label>
              <label for="email">E-mail :</label>
              <label for="password">Mot de passe :</label>
              
            </div>
            <div className="inputs">
              <input type="text" name="userName" id="userName"/>
              <input type="text" name="email" id="email" />
              <input type="text" name="password" id="password"/>
              <button>S'inscrire</button>
            </div>
          </div>
      		
          

      	</div>

      
      </div>
        
      
    );
  }
}

export default Inscription;
