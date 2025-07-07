

const NEWS_CATEGORIES = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

const Category = () => {
  return (
    <div className="w-[50%] flex items-center">
      {NEWS_CATEGORIES.map(category => (
        <div className="px-2 py-1 cursor-pointer hover:bg-gray-200 rounded-2xl">
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;