import { useState, useEffect } from 'react';
// when the component is rendered on this page 
// we want to make a call to the backend and get some data
/// when we get that data back we want to update our state
// to have that data as the state

const API = import.meta.env.VITE_BASE_URL;


const Index = () => {
   const [bookmarks, setBookmarks] = useState([]);
  // its an empty array because we do not have any bookmarks yet
  // booksmarks is where our state lives, initally state is just an
  // empty array
  // setBookmarks is our helper function, it updates bookmarks 
  // whenever we call setBookmarks whatever we pass as an argument
  // inside the parthenthese, thats what is going to update the state
  // to be.
    
  useEffect(() => {
// we only want this function to fire once when it renders
// so we are going to give it a second argument which is an empty array
     fetch(`${API}/bookmarks`)
       .then(res => res.json())
       // implied return, whatever comes after the fat arrow
       // is whatever is returned
       .then(res => {
        // console.log(res)
        setBookmarks(res)// update bookmarks/ state to the array/ response
       })
}, []);
  
  return (

        <div>
          {bookmarks.map((element) => <div key={element.id}>
            {element.name}</div>)}
            {/* react is a virtual dom and it needs to 
            differentiate each element, can't use an array because indexes
            are always going to change, we need a unique key for each one
             so no matter what changes we have a unique identifier for 
             each element and react can keep better track*/}
        </div>
    );
};

export default Index;