import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterForm = () => {
  const [gender, setGender] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  // const setSearchParams = useSearchParams()[1];

  const changeGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ gender: e.target.value });
  };

  useEffect(() => {
    const gender = searchParams.get("gender") || "all";
    setGender(gender);
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
        />
      </div>

      {/* gender select */}
      <div className="flex flex-col">
        <label htmlFor="search">Gender</label>

        <select
          id="search"
          className="p-2 border border-gray-400 rounded bg-white h-[42px]"
          value={gender}
          onChange={changeGender}
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* reset btn */}
      <button className="py-2 px-6 border border-gray-400 rounded h-[42px]">
        Reset Filter
      </button>
    </form>
  );
};

export default FilterForm;
