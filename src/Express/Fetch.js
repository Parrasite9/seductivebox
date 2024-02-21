import React, { useEffect } from 'react';

const Fetch = () => {
  // Function to fetch data from the server
  const fetchData = () => {
    fetch('/test-db') // Make sure to use the correct endpoint
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        console.log(data); // Log the data to the console
      })
      .catch(error => {
        console.error('Error:', error); // Log any errors that occur
      });
  };

  // Call the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return null; // Or return some JSX if you want to display the data
};

export default Fetch;
