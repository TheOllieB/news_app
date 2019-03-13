import "./SearchBar.css";
import React from "react";

class SearchBar extends React.Component {
	state = { input: "", selectedInput: null };
	onInputChange = event => {
		this.setState({ input: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.input);
	};

	render() {
		return (
			<div className="search">
				<div className="ui segment">
					<form onSubmit={this.onFormSubmit} className="ui form">
						<div className="field">
							<input
								value={this.state.input}
								onChange={this.onInputChange}
								type="text"
								placeholder="Search articles..."
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SearchBar;
