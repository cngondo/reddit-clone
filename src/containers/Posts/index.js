import React, { Component } from 'react';
/*
  Mapping the data and rendering it to the UI
*/
class Posts extends Component{
	render(){
		if(this.props.loading){
			return(
				<div>
					<h1>Loading...</h1>
				</div>
			);
		}
	}

	return(
		<div className="Posts">
			{this.props.map((post)=>{
				return(
					<div>
						{ post.title }
					</div>
				);
			})}
		</div>
	)
}