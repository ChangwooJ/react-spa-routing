import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Pagination = ({ page }) => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = parseInt(searchParams.get("page")) || 1;

  const handlePage = (controlNum) => {
    const basePath = category ? `/${category}` : "/";
    if (controlNum < 0 && currentPage !== 1) {
      navigate(`${basePath}?page=${currentPage - 1}`);
    } else if (controlNum > 0 && currentPage < page) {
      navigate(`${basePath}?page=${currentPage + 1}`);
    }
  };

  return (
    <div className="flex justify-center">
      <span
        className={`cursor-pointer px-2 py-1 mx-1 rounded-lg bg-gray-100 ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePage(-1)}
      >
        {"<"}
      </span>
      {Array.from({ length: page }, (_, index) => {
        const basePath = category ? `/${category}` : "/";
        return (
          <span
            key={index + 1}
            onClick={() => navigate(`${basePath}?page=${index + 1}`)}
            className={`cursor-pointer px-2 py-1 mx-1.5 rounded-full ${
              currentPage === index + 1 ? "bg-black text-white" : ""
            }`}
          >
            {index + 1}
          </span>
        );
      })}
      <span
        className={`cursor-pointer px-2 py-1 mx-1 rounded-lg bg-gray-100 ${
          currentPage === page ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePage(1)}
      >
        {">"}
      </span>
    </div>
  );
};

export default Pagination;
