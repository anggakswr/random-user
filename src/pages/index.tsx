import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterForm from "../components/FilterForm";
import Tbl from "../components/Tbl";

const Index = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setError("");
      setLoading(true);
      setUsers([]);

      try {
        const res = await axios.get("/", {
          params: {
            page: 1,
            pageSize: 1,
            results: 10,
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
  }, []);

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

      {/* tbl */}
      {!loading && users.length ? <Tbl users={users} /> : null}
    </main>
  );
};

export default Index;
