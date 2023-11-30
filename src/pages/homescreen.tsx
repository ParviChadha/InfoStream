import React, { useState, useEffect } from 'react';
import '../style.css'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../server/firebase-config';
import Saved from '../pages/saved';
import {auth} from '../../server/firebase-config';


const HomeScreen: React.FC = () => {
    const [topHeadlines, setTopHeadlines] = useState<any[]>([]);
    const [savedArticles, setSavedArticles] = useState<any[]>([]);
  
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
    const currentUser = auth.currentUser;
    const currentUserId = currentUser?.uid;

    const savePost = async (article) => {
      try {
        const usersCollectionRef = collection(db, `users/${currentUserId}/savedArticles`);
        await addDoc(usersCollectionRef, {
          title: article.title,
          description: article.description,
          url: article.url,
        }).then(() => {
          console.log('Article saved successfully!');
          setSavedArticles(prevSavedArticles => [...prevSavedArticles, article]);
        });
      } catch (error) {
        console.error('Error saving article:', error);
      }
    };
    
  
    return (
      <div className='backGround'>
        <h2>Top News:</h2>
        <ul>
          {topHeadlines.map((article: any, index: number) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
              <button onClick={() => savePost(article)}>Add to Collection</button>
            </li>
          ))}
        </ul>
        <Saved savedArticles={savedArticles} />
      </div>
    );
  };
export default HomeScreen;