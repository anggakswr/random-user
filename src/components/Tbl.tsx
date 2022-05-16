import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
import styles from "./Tbl.module.css";
import Skeleton from "./tbl/Skeleton";
import Pagination from "./tbl/Pagination";

type LoginType = {
  uuid: string;
  username: string;
};

type NameType = {
  first: string;
  last: string;
};

type RegisteredType = {
  date: Date;
};

type UserType = {
  login: LoginType;
  name: NameType;
  email: string;
  gender: string;
  registered: RegisteredType;
};

type TblType = {
  loading: boolean;
  users: UserType[];
};

const Tbl = ({ loading, users }: TblType) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const filterGender = () => {
  //   const page = searchParams.get("page") || "1";
  //   const keyword = searchParams.get("keyword") || "";
  //   const genderParam = searchParams.get("gender") || "";

  //   let gender = genderParam;

  //   switch (genderParam) {
  //     case "":
  //       gender = "male";
  //       break;

  //     case "male":
  //       gender = "female";
  //       break;

  //     case "female":
  //       gender = "";
  //       break;

  //     default:
  //       gender = "male";
  //       break;
  //   }

  //   setSearchParams({ keyword, gender, page });
  // };

  const sortBy = (sortBy: "name" | "email" | "gender" | "registered") => {
    const page = searchParams.get("page") || "1";
    const keyword = searchParams.get("keyword") || "";
    const gender = searchParams.get("gender") || "all";
    const sortOrder = searchParams.get("sortOrder") || "";

    setSearchParams({
      page,
      keyword,
      gender,
      sortBy,
      sortOrder: sortOrder === "ascend" ? "descend" : "ascend",
    });
  };

  return (
    <section className="mt-8">
      {/* tbl header */}
      <div
        className={
          styles.tblHeader +
          " grid grid-cols-5 gap-x-4 bg-gray-200 border-b-2 border-gray-300"
        }
      >
        <b className="p-4">Username</b>

        <button className="box-between p-4" onClick={() => sortBy("name")}>
          <b>Name</b>
          <span> &darr;</span>
        </button>

        <button className="box-between p-4" onClick={() => sortBy("email")}>
          <b>Email</b>
          <span> &darr;</span>
        </button>

        <button className="box-between p-4" onClick={() => sortBy("gender")}>
          <b>Gender</b>
          <span> &darr;</span>
        </button>

        <button
          className="box-between p-4"
          onClick={() => sortBy("registered")}
        >
          <b>Registered Date</b>
          <span> &darr;</span>
        </button>
      </div>

      {/* skeleton loading */}
      {loading && <Skeleton />}

      {/* tbl rows */}
      {!loading &&
        users.map((user, index) => (
          <div
            key={"user-" + user.login.uuid + index}
            className="grid grid-cols-5 gap-x-4 border-b-2 border-gray-300"
          >
            <span className="p-4 break-words">{user.login.username}</span>
            <span className="p-4 break-words">
              {user.name.first} {user.name.last}
            </span>
            <span className="p-4 break-words">{user.email}</span>
            <span className="p-4 break-words">{user.gender}</span>
            <span className="p-4 break-words">
              {dayjs(user.registered.date).format("DD-MM-YYYY HH:mm")}
            </span>
          </div>
        ))}

      {/* if there's no data */}
      {!users.length && !loading ? <p className="p-4">No data</p> : null}

      <Pagination />
    </section>
  );
};

export default Tbl;
