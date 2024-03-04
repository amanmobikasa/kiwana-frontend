import { useState, useEffect } from 'react';
import axios from 'axios';

export const GlobalDeleteData = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
    const deleteDataAsync = async(endpoint) => {
      setIsLoading(true);
      try {
        const response = await axios.delete(`http://localhost:4000/${endpoint}`);
        // console.log("url : ", `http://localhost:4000/${endpoint}`)
        setResponse(response.data);
      } catch (error) {
        setError('Error while deleting data');
      } finally {
        setIsLoading(false);
      }
    };
    
  return { response, error, isLoading, deleteDataAsync};
}

// Usage in your component
// const YourComponent = () => {
//   const { response, error, isLoading } = useDeleteData('http://localhost:4000/deleteEndpoint');

//   useEffect(() => {
//     if (error) {
//       console.log('Error:', error);
//     }
//   }, [error]);

//   // Rest of your component logic using response, error, and isLoading

//   return (
//     // JSX rendering
//   );
// };
