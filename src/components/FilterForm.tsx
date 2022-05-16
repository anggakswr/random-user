import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterForm = () => {
  const [keyword, setKeyword] = useState("");
  const [gender, setGender] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  // const setSearchParams = useSearchParams()[1];

  const changeKeyword = (keyword: string) => {
    setKeyword(keyword);
    setSearchParams({ keyword, gender, page: "1" });
  };

  const changeGender = (gender: string) => {
    const page = searchParams.get("page") || "1";
    setSearchParams({ keyword, gender, page });
  };

  const resetFilter = () => {
    setKeyword("");
    setSearchParams({});
  };

  useEffect(() => {
    const gender = searchParams.get("gender") || "all";
    setGender(gender);

    const keyword = searchParams.get("keyword");

    if (gender) setGender(gender);
    if (keyword) setKeyword(keyword);
  }, [searchParams]);

  return (
    <form
      className="flex items-end gap-x-4"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* search input */}
      <div className="flex flex-col">
        <label htmlFor="search">Search</label>

        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-400 rounded"
          value={keyword}
          onChange={(e) => changeKeyword(e.target.value)}
        />
      </div>

      {/* gender select */}
      <div className="flex flex-col">
        <label htmlFor="search">Gender</label>

        <select
          id="search"
          className="p-2 border border-gray-400 rounded bg-white h-[42px]"
          value={gender}
          onChange={(e) => changeGender(e.target.value)}
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* reset btn */}
      <button
        className="py-2 px-6 border border-gray-400 rounded h-[42px] hover:bg-gray-200"
        onClick={resetFilter}
      >
        Reset Filter
      </button>
    </form>
  );
};

export default FilterForm;
