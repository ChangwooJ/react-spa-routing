


const NewsItem = ({ news }) => {
  return (
    <a
      href={news.url}
      className="flex items-start h-fit gap-4 mb-5 hover:bg-gray-200 transition-colors"
    >
      <img
        src={news.urlToImage}
        alt={news.title}
        className="w-72 h-fit object-cover rounded-lg mb-2"
      />
      <div className="flex flex-col gap-2">
        <h2 
          className="text-xl font-bold hover:underline line-clamp-2"
        >
          {news.title}
        </h2>
        <p>
          {news.content}
        </p>
      </div>
    </a>
  );
}

export default NewsItem;