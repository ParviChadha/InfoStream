import React, { useState, useEffect } from 'react';
import '../style.css'


const HomeScreen: React.FC = () => {
    const [topHeadlines, setTopHeadlines] = useState<any[]>([]);
    useEffect(() => {
        const apiKey = 'fc86f65ced7b44e9b86c02e971b9bdfc'; // Replace with your News API key
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setTopHeadlines(data.articles);
            })
            .catch(error => {
                console.log('Error fetching top headlines:', error);
            });
    }, []);

    

    return (
        <div className='backGround'>
            <h2>Top News:</h2>
            <ul>
                {topHeadlines.map((article: any, index: number) => (
                    <li key={index}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        <button id='addArticle'>Add to Collection</button>

                    </li>
                ))}
            </ul>
        </div>
    );
};
export default HomeScreen;