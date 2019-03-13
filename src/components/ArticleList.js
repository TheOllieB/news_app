import React from "react";
import "./ArticleList.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles, onArticleSelect }) => {
	const renderedList = articles.map(article => {
		return <ArticleItem onArticleSelect={onArticleSelect} article={article} />;
	});
	return (
		<div className="ui relaxed divided list segment article-list">
			{renderedList}
		</div>
	);
};

export default ArticleList;
