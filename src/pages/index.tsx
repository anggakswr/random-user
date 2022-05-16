import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import FilterForm from "../components/FilterForm";
import Tbl from "../components/Tbl";

const Index = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");
  const gender = searchParams.get("gender");
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    const getUsers = async () => {
      setError("");
      setLoading(true);
      setUsers([]);

      try {
        const res = await axios.get("/", {
          params: {
            page,
            pageSize: 1,
            results: 10,
            keyword,
            gender: gender !== "all" ? gender : "",
          },
        });

        // console.log("get users", res.data);
        setUsers(res.data.results);
      } catch {
        setError("An error occurred while displaying users");
      }

      setLoading(false);
    };

    getUsers();
  }, [keyword, gender, page]);

  return (
    <main className="p-8">
      <nav>
        <Link to="/">Home</Link> / Example Page
      </nav>

      <h1 className="my-8 text-2xl font-bold">
        Example with Search and Filter
      </h1>

      {/* filter form */}
      <FilterForm />

      {/* error message */}
      {error && <p className="text-red-500"> {error} </p>}

      <hr className="mt-8" />

      {/* tbl */}
      {<Tbl loading={loading} users={users} />}
    </main>
  );
};

export default Index;
