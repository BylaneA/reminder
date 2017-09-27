import React, { Component } from 'react';

//Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class Dashboard extends Component {
  render() {
    return (

      <div className="mainDashboard">
      	<div className="post-it">
      		<i className="fa fa-plus"></i>
      	</div>

		<div className="triangles">
			<div className="redTriangle">
			</div>
        </div>

      </div>
        
      
    );
  }
}

export default Dashboard;