import React from "react";
import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";
import newsApi from "../apis/newsApi";

class App extends React.Component {
	state = { articles: [], input: "", recent: [] };

	componentDidMount() {
		this.onInputSubmit("bitcoin");
	}

	onInputSubmit = async input => {
		this.setState({ input: input });
		const response = await newsApi.get("/everything", {
			params: {
				q: input,
				pageSize: 40
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
				<div className="ui">
					<div className="ui container">
						<SearchBar onFormSubmit={this.onInputSubmit} />
						<div>
							Results matching:
							<span>
								{this.state.input.charAt(0).toUpperCase() +
									this.state.input.slice(1)}
							</span>
						</div>
					</div>
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
