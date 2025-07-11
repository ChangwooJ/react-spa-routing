import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchCategoryNews } from "../apis/api";
import NewsItem from "./NewsItem";
import Pagination from "../util/Pagination";

const ITEM_PER_PAGE = 15;

const NewsList = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const searchKeyword = searchParams.get('q') || '';

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const { data } = await fetchCategoryNews(category || null, currentPage, searchKeyword);
        setNewsList(data.articles);
        setPage(Math.ceil(data.totalResults / ITEM_PER_PAGE));
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getNews();
  }, [category, currentPage, searchKeyword]);

  if (loading) {
    return null;
  }

  return (
    <div className="px-10 py-5 w-full flex flex-col">
      {newsList.map((news, idx) => (
        <a
          key={`${news.publishedAt}-${idx}`}
          href={news.url}
          className="border w-full flex h-60 gap-4 px-4 py-2 mb-2 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors rounded-lg"
        >
          <NewsItem news={news} />
        </a>
      ))}
      <Pagination page={page} />
    </div>
  );
};

export default NewsList;
