import { useState } from 'react';
import axios from 'axios';

const useUpdateUserAddress = () => {
  const [loading, setLoading] = useState(false);
  const [errorAddress, setError] = useState(null);
  const [responseData, setResponseData] = useState(null)

  const updateUserData = async (url, data) => {
    setLoading(true);

    try {
      // Make PUT request using Axios
      const response = await axios.put(url, data);

      // Assuming the API response contains updated user data
      const updatedUserData = response.data;
      setResponseData(updatedUserData);

      // Handle the updated user data as needed (e.g., update state or trigger a re-render)
      console.log('User data updated:', updatedUserData);
    } catch (err) {
      setError(err);
      console.error('Error updating user data:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateUserAddress = (endPoint, dataObj) => {
    const url = `http://localhost:4000${endPoint}`;
    const requestData = {
      email : dataObj?.email,
      address: dataObj?.newAddress,
    };

    // Use the common function to handle the API request
    updateUserData(url, requestData);
  };

  return { updateUserAddress, loading, errorAddress, responseData};
};

export default useUpdateUserAddress;
