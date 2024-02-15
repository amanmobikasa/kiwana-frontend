import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDeleteData = memo((endpoint) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const deleteDataAsync = async () => {
      setIsLoading(true);
      try {
        const response = await axios.delete(endpoint);
        setResponse(response.data);
      } catch (error) {
        setError('Error while deleting data');
      } finally {
        setIsLoading(false);
      }
    };

    deleteDataAsync();

    // Cleanup function to reset state on unmount or when the dependency changes
    return () => {
      setResponse(null);
      setError(null);
      setIsLoading(false);
    };
  }, [endpoint]);

  return { response, error, isLoading };
});

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
