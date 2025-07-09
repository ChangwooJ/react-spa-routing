import { useNavigate } from "react-router-dom";


const NEWS_CATEGORIES = [
  'all',
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[50%] flex items-center">
      {NEWS_CATEGORIES.map(category => (
        <div 
          className="px-2 py-1 cursor-pointer hover:bg-gray-200 rounded-2xl"
          onClick={() => navigate(`/${category}`)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;