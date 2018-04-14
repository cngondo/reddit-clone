import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from './containers/App';
import Posts from './containers/Posts';
import AddPost from './containers/AddPost';

/*
	All the routes of the app. The props get passed from the app component to the
	rest of the routes
*/
const Routes = (props) => (
	<Router {...props}> 
		<Route path="/" component={ App }> 
			<IndexRoute component={ Posts } />
			<Route path="/posts" component={ Posts } />
			<Route path="add-posts" component={ AddPost } />
		</Route>
	</Router>
);

export default Routes;