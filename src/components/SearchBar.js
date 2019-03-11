import React from "react";

class SearchBar extends React.Component {
	state = {};
	render() {
		return (
			<div className="ui segment">
				<form type="text" className="ui form">
					<div className="field">
						<label>Search:</label>
						<input className="" />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
