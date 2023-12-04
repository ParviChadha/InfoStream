import React, { useState, useEffect } from 'react';
import '../style.css'
import { addDoc, collection , arrayUnion, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../server/firebase-config';
import {auth} from '../../server/firebase-config';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Entertainment: React.FC = () => {
    const [entertainmentArticles, setEntertainmentArticles] = useState<any[]>([]);
    const [savedArticles, setSavedArticles] = useState<any[]>([]);

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
            <h2 className = "mx-4">Entertainment Page</h2>
            <Stack gap={3}>
            {entertainmentArticles.map((article: any, index: number) => (
            <Card key = {index} className="mx-4">
            <Card.Body>
            <Card.Link href={article.url} target="_blank" rel="noopener noreferrer" className = "link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
         <Card.Title> {article.title}</Card.Title>
         </Card.Link> 
         <Row>
         <Col>
           <Card.Subtitle>{article.description}</Card.Subtitle> 
           </Col>
           <Col>
           <Button className ="float-end" onClick={() => savePost(article)}> Save</Button>
           </Col>
         </Row>
         </Card.Body>
         </Card>
          ))}
        </Stack>
        </div>


    );
};

export default Entertainment;