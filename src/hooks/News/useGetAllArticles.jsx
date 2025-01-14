import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const apiKey = import.meta.env.VITE_MY_API_KEY;

const useGetAllArticles = () => {
  const { category } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allArticles, setAllArticles] = useState([]);
  const [isRefetch, setIsRefetch] = useState(false);

  useEffect(() => {
    const getAllArticles = async () => {
      setLoading(true);
      setAllArticles([]);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=apple&from=2025-01-13&to=2025-01-13&sortBy=popularity&apiKey=${apiKey}`
        );

        if (response) {
          setAllArticles(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (category === 'all') {
      getAllArticles();
    }
  }, [category]);

  const refetch = () => {
    setIsRefetch(!isRefetch);
  };

  return { allArticles, refetch, loading, error };
};

export default useGetAllArticles;
