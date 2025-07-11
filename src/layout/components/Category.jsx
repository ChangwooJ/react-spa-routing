import { useNavigate, useParams } from "react-router-dom";

const NEWS_CATEGORIES = [
  "all",
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const Category = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <div className="w-[50%] flex items-center gap-1 mr-4">
      {NEWS_CATEGORIES.map((newsCategory) => (
        <div
          key={newsCategory}
          className={`px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-black transition-colors rounded-2xl ${
            newsCategory === (category || "all")
              ? "bg-black text-white font-semibold"
              : ""
          }`}
          onClick={() => navigate(newsCategory === "all" ? "/" : `/${newsCategory}`)}
        >
          {newsCategory}
        </div>
      ))}
    </div>
  );
};

export default Category;
