import React from 'react';

interface SavedProps {
  savedArticles: any[];
}

const Saved: React.FC<SavedProps> = ({ savedArticles }) => {
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
