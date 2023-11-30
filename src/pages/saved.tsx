import React, { useEffect, useState } from 'react';
import { db, auth } from "../../server/firebase-config";
import { collection, getDocs, doc } from "firebase/firestore";


const Saved: React.FC = () => {
  const [savedArticles, setSavedArticles] = useState<any[]>([]);
  useEffect(() => {
    const loadSavedArticles = async () => {
      const currentUser = auth.currentUser;
      const currentUserId = currentUser?.uid;
    
      if (currentUserId) {
        const usersCollectionRef = doc(db, 'users', currentUserId);
        const savedArticlesCollectionRef = collection(usersCollectionRef, 'savedArticles');
    
        try {
          const snapshot = await getDocs(savedArticlesCollectionRef);
          const articles = snapshot.docs.map(doc => doc.data());
          setSavedArticles(articles);
        } catch (error) {
          console.error('Error fetching saved articles:', error);
        }
      } else {
        console.log('No user is currently logged in.');
        return null;
      }
    };

    loadSavedArticles();
  }, []);

  return (
    <div>
      <h1>Saved Articles</h1>
      <ul>
        {savedArticles && savedArticles.length > 0 ? (
          savedArticles.map((article: any, index: number) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))
        ) : (
          <p>No saved articles yet.</p>
          
        )}
      </ul>
     
    </div>
  );
};

export default Saved;



