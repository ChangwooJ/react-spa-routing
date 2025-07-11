import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const instance = axios.create({
  baseURL: `https://newsapi.org/v2`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchCategoryNews = async (category, currentPage, searchKeyword) => {
  let url = `/top-headlines?country=us&pageSize=15&page=${currentPage}&q=${searchKeyword}&apiKey=${apiKey}`;
  if (category) {
    url = `/top-headlines?category=${category}&pageSize=15&page=${currentPage}&q=${searchKeyword}&apiKey=${apiKey}`;
  }
  console.log("API 호출 URL:", url);
  const response = await instance.get(url);
  return response;
};
