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
          <label for="post-importance">Importance :</label>
        </div>

        <div className="inputs-addPost">
          <input type="text" name="post-title" id="post-title"/>
          <textarea type="text" name="post-message" id="post-message" rows="10" cols="28" placeholder="Tapez votre message ici">
          </textarea>
          <div className="triangles-importance">
            <div className="green-importance"></div>
            <div className="orange-importance"></div>
            <div className="red-importance"></div>
          </div>
        </div>
        
    </div>
    <div className="buttons-post">
      <button className="btn-delete-post">ANNULER</button>
      <button className="btn-create-post">CREER</button>
    </div>
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