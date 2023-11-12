import React, { useState, useEffect } from 'react';

const Technology: React.FC = () => {
    const [technologyArticles, setTechnologyArticles] = useState<any[]>([]);

    useEffect(() => {
        const apiKey = 'fc86f65ced7b44e9b86c02e971b9bdfc'; // Replace with your News API key

        fetch(`https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setTechnologyArticles(data.articles);
            })
            .catch(error => {
                console.log('Error fetching technology articles:', error);
            });
    }, []);

    return (
        <div>
            <h2>Technology Page</h2>
            <ul>
                {technologyArticles.map((article: any, index: number) => (
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

export default Technology;
