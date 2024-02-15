import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePostData = memo((endpoint, postData) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const postDataAsync = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(endpoint, postData);
        setResponse(response.data);
      } catch (error) {
        setError('Error while posting data');
      } finally {
        setIsLoading(false);
      }
    };

    if (postData) {
      postDataAsync();
    }

    // Cleanup function to reset state on unmount or when the dependency changes
    return () => {
      setResponse(null);
      setError(null);
      setIsLoading(false);
    };
  }, [endpoint, postData]);

  return { response, error, isLoading };
});

// Usage in your component
// const YourComponent = () => {
//   const postData = { /* your data to be posted */ };
//   const { response, error, isLoading } = usePostData('http://localhost:4000/postEndpoint', postData);

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
