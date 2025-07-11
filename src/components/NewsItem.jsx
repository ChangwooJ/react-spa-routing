import noImg from "../assets/no-img.svg";

const NewsItem = ({ news }) => {
  return (
    <>
      <div className="w-[350px] h-full">
        <img
          src={news.urlToImage || noImg}
          alt={news.title}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="h-[35%] p-1 border-b text-xl font-bold hover:underline line-clamp-2">
          {news.title}
        </h2>
        <p className="p-1">{news.content}</p>
      </div>
    </>
  );
};

export default NewsItem;
