import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some html.

const App = () => {
	return <div>Hi!</div>;
}

// Take this components html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));