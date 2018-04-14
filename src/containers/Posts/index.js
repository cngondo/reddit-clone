import React, { Component } from 'react';
/*
  Mapping the data and rendering it to the UI
*/
class Posts extends Component{
	render(){
		let posts = this.props.posts;
		
		if(!posts){
			return false;
		}

		if(this.props.loading){
			return(
				<div>
					<h1>Loading...</h1>
				</div>
			);
		}
		// click handlers for upvoting and downvoting
		this.handleUpVote=(post, key)=>{
			this.props.firebaseRef.ref('posts/'+key).set({
				title: post.title,
				upvote: post.upvote +1,
				downvote: post.downvote
			});
		}

		this.handleDownVote=(post, key)=>{
			this.props.firebaseRef.ref('posts/'+key).set({
				title: post.title,
				upvote: post.upvote,
				downvote: post.downvote + 1
			});
		}

		//Iterate over objects because firebase stores data in form of objects
		return(
			<div className="Posts">
				{Object.keys(posts).map((key)=>{
					return(
						<div key = {key}>							
							<div>Title: { posts[key].title } </div>
							<div>Title: { posts[key].upvote } </div>
							<div>Title: { posts[key].downvote } </div>
							<button onClick={this.handleUpVote.bind(this, posts[key], key)} type="button">UPVOTE</button>
							<button onClick={this.handleDownVote.bind(this, posts[key], key)} type="button">DOWNVOTE</button>
						</div>
					);
				})}
			</div>
		)
	}
}

export default Posts;