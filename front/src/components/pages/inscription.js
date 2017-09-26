import React from 'react';

class Inscription extends React.Component {
	render(){
		return (

			<form action="" className="form"> 
				<textarea required maxLength="70"> </textarea>

				<button type="submit"> Envoyer ! </button>

			</form>
		)
	}

}

export default Inscription;