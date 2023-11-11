import './style2.css';
import React, { useState, useEffect } from 'react';

function App() {
    const [articles, setArticles] = useState([]);

    const bodyStyle = {
        backgroundColor: '#F4EEFF',
        
    };

    useEffect(() => {
        const apiKey = 'fc86f65ced7b44e9b86c02e971b9bdfc'; // Replace with your API key
        const newsSource = 'bbc-news'; // Replace with your desired news source

        fetch(`https://newsapi.org/v2/top-headlines?sources=${newsSource}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []); // Empty dependency array to run this effect only onc
    return (
        <div>
            
        </div>
        <div> </div>
    );
}
export default App;