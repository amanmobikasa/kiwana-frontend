import { useState, useEffect } from 'react';
import axios from 'axios';


const GlobalPostData = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message , setMessage] = useState("");
  const [responseArray, setResponseArray] = useState([]);


  const postData = async (endpoint, postData) => {
    setIsLoading(true);
    try {
      const res = await axios.post(endpoint, postData);
      setResponse(res.data);
      setMessage(res.message)
      setResponseArray([ res.data]);
      console.log("data response from hook", response);
    } catch (error) {
      setError('Error while posting data');
    } finally {
      setIsLoading(false);
    }
    console.log("data response from hook arr", responseArray);
  };
  return { response, error, isLoading, postData, message,responseArray };
};



export default GlobalPostData;

// Usage in your component
// const YourComponent = () => {
//   const postData = { /* your data to be posted */ };
//   

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
