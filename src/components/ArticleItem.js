import React from "react";

const ArticleItem = ({ article }) => {
	return (
		<div className="item">
			<div className="content">
				<h6 className="header">{article.title}</h6>
				<div className="description">{article.description}</div>
			</div>
		</div>
	);
};

export default ArticleItem;

// .description
// .publishedAt
// .source.name
// .url
