<<<<<<< Updated upstream
const Business = () => {
  return (
    <div>
      <h2>Business Page</h2>
      {/* Add your home page content here */}
    </div>
  );
};

export default Business;
=======
import React, { useState, useEffect } from 'react';

const Business: React.FC = () => {
    const [businessArticles, setBusinessArticles] = useState<any[]>([]);

    useEffect(() => {
        const apiKey = 'fc86f65ced7b44e9b86c02e971b9bdfc'; // Replace with your News API key

        fetch(`https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setBusinessArticles(data.articles);
            })
            .catch(error => {
                console.log('Error fetching business articles:', error);
            });
    }, []);

    return (
        <div>
            <h2>Business Page</h2>
            <ul>
                {businessArticles.map((article: any, index: number) => (
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

export default Business;
>>>>>>> Stashed changes