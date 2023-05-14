// ==========================
// Import
// ==========================
// set up a real time collection listener
import { ref, watchEffect } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'

// ==========================
// Consts
// ==========================
const documents = ref( null );

// ==========================
// Function
// ==========================
/**
 * @param { Object } collectionName 
 * @returns array of object containing the required firebase collection
 */
function getCollection({ collectionName = 'posts' }) {
  let results = [];
  let colRef = collection(db, collectionName);
  const unsub = onSnapshot(colRef, (snapshot) => {
    snapshot.docs.forEach( doc => results.push({ ...doc.data(), id: doc.id }));
    documents.value = results;
  });

  watchEffect( onInvalidate => {
    onInvalidate( () => unsub() );
  })

  return { documents };
}

export default getCollection;