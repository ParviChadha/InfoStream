import { useEffect, useState } from 'react';
import { db } from "../../server/firebase-config";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from '../auth/AuthUserProvider';

function Saved() {
  const [savedArticleIDs, setSavedArticleIDs] = useState<string[]>([]);
  const [savedArticles, setSavedArticles] = useState<any[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const fetchIDs = async () => {
        try {
          const currentUserId = user.uid;
          const usersSavedRef = doc(db, 'users', currentUserId);
          const snapshot = await getDoc(usersSavedRef);

          if (snapshot.exists()) {
            const userData = snapshot.data();
            const articlesArray = userData.savedArticlesArray || [];
            setSavedArticleIDs(articlesArray);
          } else {
            console.log('User document not found.');
          }
        } catch (error) {
          console.error('Error fetching user document:', error);
        }
      };

      fetchIDs();
    } else {
      console.log('No user is currently logged in.');
    }
  }, [user]);

  useEffect(() => {
    const loadSavedArticles = async () => {
      try {
        const mapID = savedArticleIDs.map(async (articleID) => {
          const articleRef = doc(db, 'savedArticles', articleID);
          const article = await getDoc(articleRef);

          if (article.exists()) {
            return article.data();
          } else {
            console.log(`Article with ID ${articleID} not found.`);
            return null;
          }
        });

        Promise.all(mapID)
          .then((articlesData) => {
            setSavedArticles(articlesData.filter((article) => article !== null));
          })
          .catch((error) => {
            console.error('Error retrieving saved articles:', error);
          });
      } catch (error) {
        console.error('Error loading saved articles:', error);
      }
    };

    if (savedArticleIDs.length > 0) {
      loadSavedArticles();
    }
  }, [savedArticleIDs]);

  const deletePost = async (articleIndex: number) => {
    if (user) {
      const articleid = savedArticleIDs[articleIndex];

      try {
        await deleteDoc(doc(db, 'savedArticles', articleid));
        const updated = savedArticles.filter((article) => article.id !== articleid);
        setSavedArticles(updated);

        const savedRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(savedRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const articlesArray = userData.savedArticlesArray || [];
          const updated = articlesArray.filter((id: any) => id !== articleid );

          await updateDoc(savedRef, {
            savedArticlesArray: updated,
          });

          setSavedArticleIDs(updated);
        }
      } catch (error) {
        console.error('Error deleting article:', error);
      }
    } else {
      console.log('No user is currently logged in.');
    }
  };

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
              <button onClick={() => deletePost(index)}>Remove from Collection</button>
            </li>
          ))
        ) : (
          <p>No saved articles yet.</p>
        )}
      </ul>
    </div>
  );
}

export default Saved;
