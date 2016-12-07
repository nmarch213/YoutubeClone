import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCapQitz6Oq47lisli7eQViw97RY_UaarA';

// Create a new component. This component should produce some html.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

// Take this components html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));