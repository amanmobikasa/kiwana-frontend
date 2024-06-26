import React,{useEffect, useState}  from 'react'
import axios from 'axios';

export const useFetchData = (endpoint, id="") => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(endpoint);
          if (response.data.success) {
            setData(response.data.data);
          } else {
            setError('Error while fetching data');
          }
        } catch (error) {
          setError('Error while fetching data');
        }
      };
  
      fetchData();
  
      // Cleanup function to reset data on unmount or when the dependency changes
      return () => {
        setData(null);
        setError(null);
      };
    }, [endpoint]);
  
    return { data, error };
  };

  