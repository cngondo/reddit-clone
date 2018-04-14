import React, { Component } from 'react';

class AddPost extends Component{
	constructor(props){
		super(props);

		this.state = {
			title: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// Updates the state with the value present on the input box
	handleChange = (e) =>{
		this.setState({
			title: e.target.value
		});
	}

	//responds to the submit event to write to firebase database
	handleSubmit = (e) =>{
		e.preventDefault();

		//the "firebaseRef" are the props passed down from the App component
		//Sets the current value of title to our database
		this.props.firebaseRef.push({
			title: this.state.title
		});

		// Ensures that the title is set to empty after submitting the value to the DB
		this.setState({
			title: ''
		});
	}

	render(){
		return(
			<div className="AddPost">
				<input
					type="text"
					placeholder="Write the title of youre post"
					onChange={ this.handleChange }
					value={ this.state.title } />

				<button type="submit" onClick={ this.handleSubmit }>SUBMIT</button> 
			</div>
		);
	}
}

export default AddPost;