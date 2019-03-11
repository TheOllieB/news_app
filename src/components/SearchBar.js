import React from "react";

class SearchBar extends React.Component {
	state = { input: "" };
	onInputChange = event => {
		this.setState({ input: event.target.value });
		console.log(event.target.value);
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.input);
		console.log(this.state.input);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Search:</label>
						<input
							value={this.state.input}
							onChange={this.onInputChange}
							type="text"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
