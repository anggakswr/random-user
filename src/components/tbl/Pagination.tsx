import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const navigate = (num: number) => {
    const keyword = searchParams.get("keyword") || "";
    const gender = searchParams.get("gender") || "all";

    setSearchParams({ keyword, gender, page: num.toString() });
  };

  return (
    <div className="mt-4 flex justify-end gap-x-2">
      {/* prev btn */}
      <button
        className="w-8 h-8 border border-gray-300 rounded"
        disabled={!page || page === "1"}
        onClick={() => navigate(parseInt(page) - 1)}
      >
        &larr;
      </button>

      {/* prev page */}
      {parseInt(page) > 1 && (
        <button
          className="w-8 h-8 border border-gray-300 rounded"
          onClick={() => navigate(parseInt(page) - 1)}
        >
          {parseInt(page) - 1}
        </button>
      )}

      {/* current page */}
      <button className="w-8 h-8 border border-gray-300 rounded" disabled>
        {page}
      </button>

      {/* next page */}
      <button
        className="w-8 h-8 border border-gray-300 rounded"
        onClick={() => navigate(parseInt(page) + 1)}
      >
        {parseInt(page) + 1}
      </button>

      {/* next btn */}
      <button
        className="w-8 h-8 border border-gray-300 rounded"
        onClick={() => navigate(parseInt(page) + 1)}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
