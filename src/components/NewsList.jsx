import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoryNews } from "../apis/api";
import NewsItem from "./NewsItem";
import Pagination from "../util/Pagination";

const ITEM_PER_PAGE = 15;

const NewsList = () => {
  const { category } = useParams();
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(page);
  console.log(newsList);
  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const { data } = await fetchCategoryNews(category, currentPage);
        setNewsList(data.articles);
        setPage(Math.ceil(data.totalResults / ITEM_PER_PAGE));
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getNews();
  }, [category, currentPage]);

  if (loading) return <div>로딩중...</div>;

  return (
    <div className="px-10 py-5">
      {newsList.map((news, idx) => (
        <div key={`${news.publishedAt}-${idx}`}>
          <NewsItem news={news} />
        </div>
      ))}
      <Pagination page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default NewsList;
