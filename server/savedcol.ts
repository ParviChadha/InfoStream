import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const AddButton = ({ mainDocId, dataToAdd }) => {
  const addArticleToCollection = async () => {
    try {
      const db = firebase.firestore();
      await db.collection('users').doc(mainDocId).collection('').add(dataToAdd);
      console.log('Item added successfully to subCollection');
    } catch (error) {
      console.error('Error adding item: ', error);
    }
  };

  return (
    <button onClick={addItemToCollection}>Add Item</button>
  );
};

export default AddItemButton;
