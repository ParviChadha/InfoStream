import './style2.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [articles, setArticles] = useState([]);

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
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgb(147, 86, 202)" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Infostream</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Topics</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Business</a></li>
                  <li><a className="dropdown-item" href="#">Technology</a></li>
                  <li><a className="dropdown-item" href="#">Entertainment</a></li>
                  <li><a className="dropdown-item" href="#">General</a></li>
                    <li><a className="dropdown-item" href="#">Health</a></li>
                    <li><a className="dropdown-item" href="#">Science</a></li>
                    <li><a className="dropdown-item" href="#">Sports</a></li>
                </ul>
              </li>
              <li className="nav-item"> 
                <a className="nav-link" href="#"> About Us </a>
              </li>
            </ul>
            <form className="d-flex" style={{ float: 'right' }}>
              <input className="form-control me-2" type="text" placeholder="Search" />
            </form>
          </div>
        </div>
      </nav>
    );
}
export default App;