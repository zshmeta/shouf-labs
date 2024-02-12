import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom hook for API requests
export const useFetch = (url, options, reload) => {
  const [data, setData] = useState(null); // State for the response data
  const [error, setError] = useState(null); // State for handling errors
  const [loading, setLoading] = useState(true); // State to indicate loading status

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Begin loading
      try {
        const response = await axios(url, options); // Make the API call with axios
        setData(response.data); // Set the response data
        setError(null); // Reset error state
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          setError(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          setError(error.message);
        }
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData();
  }, [url, options, reload]); // Re-fetch on URL or options change

  return { data, error, loading }; // Return states
};