import React from "react";
import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";
import newsApi from "../apis/newsApi";

class App extends React.Component {
	state = { articles: [] };

	componentDidMount() {
		this.onInputSubmit("bitcoin");
	}

	onInputSubmit = async input => {
		const response = await newsApi.get("/everything", {
			params: {
				q: input
			}
		});
		this.setState({ articles: response.data.articles });
		console.log(response);
	};

	onArticleSelect = article => {
		window.open(article.url);
	};

	render() {
		return (
			<div className="ui">
				<div className="ui container">
					<SearchBar onFormSubmit={this.onInputSubmit} />
				</div>
				<div className="ui container">
					<ArticleList
						articles={this.state.articles}
						onArticleSelect={this.onArticleSelect}
					/>
				</div>
			</div>
		);
	}
}

export default App;
