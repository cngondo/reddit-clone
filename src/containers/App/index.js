import React, { Component } from 'react';
import * as firebase from 'firebase';
import config from '../../config/firebase-config';

class App extends Component {
	constructor(){
		super();
		// this.state = {
		// 	posts: snapshot.val(),
		// 	loading: false
		// }
		//initialize firebase
		firebase.initializeApp(config);		 
	}

	componentWillMount(){
		let postsRef = firebase.database().ref('posts');

		postsRef.on('value', (snapshot)=>{
			console.dir(snapshot.val());

			this.setState({
				posts: snapshot.val(),
				loading: false
			});
		});
	}

	render(){
		return (
			<div className="App">
				Hello puppies!!
			</div>
			)
	}
}

export default App;