import "./ArticleItem.css";
import React from "react";

const ArticleItem = ({ article, onArticleSelect }) => {
	const date = article.publishedAt.slice(0, 10);
	const time = article.publishedAt.slice(11, -1);
	return (
		<div onClick={() => onArticleSelect(article)} className="item">
			<div className="content">
				<h4 className="header">{article.title}</h4>
				<div className="description">{article.description}</div>
				<div className="article-item-foot extra">
					<a href={article.url}>{article.source.name}</a>
					<span className="date">{date}</span>
					<span className="time">{time}</span>
				</div>
			</div>
		</div>
	);
};

export default ArticleItem;

// .description
// .publishedAt
// .source.name
// .url
