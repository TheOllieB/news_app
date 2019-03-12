import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
	const renderedList = articles.map(article => {
		return <ArticleItem article={article} />;
	});
	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default ArticleList;
