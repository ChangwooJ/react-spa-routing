import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const apiKey = import.meta.env.VITE_MY_API_KEY;

const useGetNewsItems = () => {
  const { category } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const getNewsItems = async () => {
      setLoading(true);
      setNewsItems([]);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
        );

        if (response) {
          setNewsItems(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (category !== 'all') {
      getNewsItems();
    }
  }, [category]);

  return { newsItems, loading, error };
};

export default useGetNewsItems;
