import React, { Component } from 'react';
/*
  Mapping the data and rendering it to the UI
*/
class Posts extends Component{
	render(){
		let posts = this.props.posts;

		if(this.props.loading){
			return(
				<div>
					<h1>Loading...</h1>
				</div>
			);
		}

		return(
			<div className="Posts">
			//Iterate over objects because firebase stores data in form of objects
				{Object.keys(posts).map((key)=>{
					return(
						<div key = {key}>							
							{ posts[key].title }
						</div>
					);
				})}
			</div>
		)
	}
}

export default Posts;