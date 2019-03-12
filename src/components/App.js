import React from "react";
import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";
import newsApi from "../apis/newsApi";

class App extends React.Component {
	state = { articles: [], selectedArticle: null };
	onInputSubmit = async input => {
		const response = await newsApi.get("/everything", {
			params: {
				q: input
			}
		});
		this.setState({ articles: response.data.articles });
		console.log(response);
	};
	render() {
		return (
			<div>
				<div className="ui container">
					<SearchBar onFormSubmit={this.onInputSubmit} />
				</div>
				<div className="ui container">
					<ArticleList articles={this.state.articles} />
				</div>
			</div>
		);
	}
}

export default App;
