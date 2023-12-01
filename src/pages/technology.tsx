import React, { useState, useEffect } from 'react';
import '../style.css'
import { addDoc, collection , arrayUnion, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../server/firebase-config';
import {auth} from '../../server/firebase-config';


const Technology: React.FC = () => {
    const [technologyArticles, setTechnologyArticles] = useState<any[]>([]);
    const [savedArticles, setSavedArticles] = useState<any[]>([]);


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

    const currentUser = auth.currentUser;
    const currentUserId = currentUser?.uid;

    const savePost = async (article) => {
      try {
        const savedCollectionRef = collection(db, `savedArticles`);
        const addSave = await addDoc(savedCollectionRef, {
          title: article.title,
          description: article.description,
          url: article.url,
        });

        console.log('Article saved successfully!');

        setSavedArticles(prevSavedArticles => [...prevSavedArticles, article]);
          
        const saveRef = doc(db, 'users', currentUserId!);
          try {
            await updateDoc(saveRef, {
              savedArticlesArray: arrayUnion(addSave.id)
            });
            console.log('article now saved');
          } catch (error) {
            console.error('error updating', error);
          }
      } catch (error) {
        console.error('Error saving article:', error);
      }
    };

    return (
        <div className='backGround'>
            <h2>Technology Page</h2>
            <ul>
                {technologyArticles.map((article: any, index: number) => (
                    <li key={index}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        <button onClick={() => savePost(article)}>Add to Collection</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Technology;
