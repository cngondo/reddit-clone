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
		/*Pass data to our child components so that the data can be available in
		react-router */
		return (
			<div className="App">
				{this.props.children && React.cloneElement(
					this.props.children,
					{
						firebaseRef: firebase.database().ref('posts'),
						posts: this.state.posts,
						loading: this.state.loading
					}
				)}
			</div>
			)
	}
}

export default App;
