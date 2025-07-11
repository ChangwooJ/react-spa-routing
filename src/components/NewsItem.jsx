import noImg from "../assets/no-img.svg";

const NewsItem = ({ news }) => {
  return (
    <a
      href={news.url}
      className="flex items-start w-full h-60 gap-4 mb-2 hover:bg-gray-200 transition-colors"
    >
      <div className="flex justify-center w-full h-full p-4">
        <img
          src={news.urlToImage || noImg}
          alt={news.title}
          className="rounded-lg w-80"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold hover:underline line-clamp-2">
          {news.title}
        </h2>
        <p>{news.content}</p>
      </div>
    </a>
  );
};

export default NewsItem;
