// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  // State to store the dog image URL and loading state
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to fetch the dog image when the component mounts
  useEffect(() => {
    // Fetch a random dog image from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())  // Parse the JSON response
      .then((data) => {
        setDogImage(data.message);  // Set the dog image URL
        setIsLoading(false);        // Set loading to false once data is received
      })
      .catch((error) => {
        console.error('Error fetching the dog image:', error);
        setIsLoading(false);  // Ensure loading is turned off even in case of error
      });
  }, []);  // Empty dependency array ensures this runs only once after the first render

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>  // Show loading message while fetching
      ) : (
        <img src={dogImage} alt="A Random Dog" />  // Show the dog image once fetched
      )}
    </div>
  );
};

export default App;
