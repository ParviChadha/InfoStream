import React, { useState, useEffect } from 'react';

const Science: React.FC = () => {
    const [scienceArticles, setScienceArticles] = useState<any[]>([]);

    useEffect(() => {
        const apiKey = 'fc86f65ced7b44e9b86c02e971b9bdfc'; // Replace with your News API key

        fetch(`https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setScienceArticles(data.articles);
            })
            .catch(error => {
                console.log('Error fetching science articles:', error);
            });
    }, []);

    return (
        <div>
            <h2>Science Page</h2>
            <ul>
                {scienceArticles.map((article: any, index: number) => (
                    <li key={index}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Science;