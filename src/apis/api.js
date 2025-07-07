import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const instance = axios.create({
  baseURL: `https://newsapi.org/v2`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAllNews = async () => {
  const response = await instance.get(`/everything?q=apple&from=2025-07-06&to=2025-07-06&sortBy=popularity&apiKey=${apiKey}`);
  return response;
}