import React from "react";
import SearchBar from "./SearchBar";
import newsApi from "../apis/newsApi";

class App extends React.Component {
	state = {};
	onInputSubmit = async input => {
		const response = await newsApi.get("/everything", {
			params: {
				q: input
			}
		});
		console.log(response);
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onInputSubmit} />
			</div>
		);
	}
}

export default App;
