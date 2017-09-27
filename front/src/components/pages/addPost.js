import React, { Component } from 'react';

//Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class AddPost extends Component {
  render() {
    return (

    <div className="mainDashboard">
      <div className="post-it">
      	<i className="fa fa-plus"></i>
      </div>

  <div className="contain-addPost">
    <h1>Créer un post-it</h1>
    <div className="formPost">
      <div className="labels-addPost">
          <label for="post-title">Titre :</label>
          <label for="post-message">Message :</label>
        </div>

        <div className="inputs-addPost">
          <input type="text" name="post-title" id="post-title"/>
          <textarea type="text" name="post-message" id="post-message" rows="10" cols="25" placeholder="Tapez votre message ici">
          </textarea>
        </div>
        
    </div>
    <button>ANNULER</button>
    <button>CREER</button>
  </div>

		<div className="triangles">
			<div className="redTriangle">
			</div>
        </div>

      </div>
        
      
    );
  }
}

export default AddPost;