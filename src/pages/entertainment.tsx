import React, { useState, useEffect } from 'react';
import '../style.css'

const Entertainment: React.FC = () => {
    const [entertainmentArticles, setEntertainmentArticles] = useState<any[]>([]);

    useEffect(() => {
        const apiKey = 'fc86f65ced7b44e9b86c02e971b9bdfc'; // Replace with your News API key

        fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&country=us&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setEntertainmentArticles(data.articles);
            })
            .catch(error => {
                console.log('Error fetching entertainment articles:', error);
            });
    }, []);

    return (
        <div className='backGround'>
            <h2>Entertainment Page</h2>
            <ul>
                {entertainmentArticles.map((article: any, index: number) => (
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

export default Entertainment;