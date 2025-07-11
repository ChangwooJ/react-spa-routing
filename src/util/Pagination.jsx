

const Pagination = ({ page, currentPage, setCurrentPage }) => {

  const handlePage = (controlNum) => {
    if (controlNum < 0 && currentPage === 1) {
      setCurrentPage(currentPage - 1);
    } else if (controlNum > 0 && currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center">
      <span 
        className="cursor-pointer px-2 py-1 mx-1 rounded-lg bg-gray-100"
        onClick={() => handlePage(-1)}
      >
        {"<"}
      </span>
      {Array.from({ length: page }, (_, index) => (
        <span
          key={index + 1}
          onClick={() => setCurrentPage(index + 1)}
          className={`cursor-pointer px-2 py-1 mx-1.5 rounded-full ${
            currentPage === index + 1 ? "bg-black text-white" : ""
          }`}
        >
          {index + 1}
        </span>
      ))}
      <span 
        className="cursor-pointer px-2 py-1 mx-1 rounded-lg bg-gray-100"
        onClick={() => handlePage(1)}
      >
        {">"}
      </span>
    </div>
  );
};

export default Pagination;
