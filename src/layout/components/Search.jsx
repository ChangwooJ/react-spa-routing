import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/searchIcon.svg";

const Search = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[50%] flex items-center">
      <input
        type="text"
        placeholder="궁금한 뉴스를 검색해보세요."
        className="w-[80%] h-full py-2 px-4 rounded-2xl border bg-slate-50 mr-2"
      />
      <img
        src={searchIcon}
        alt="검색 아이콘 이미지"
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
      />
    </div>
  );
};

export default Search;
