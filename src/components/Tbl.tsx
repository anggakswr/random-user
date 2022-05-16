import dayjs from "dayjs";
import styles from "./Tbl.module.css";

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
  users: UserType[];
};

const Tbl = ({ users }: TblType) => {
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

        <button className="box-between p-4">
          <b>Name</b>
          <span> &darr;</span>
        </button>

        <button className="box-between p-4">
          <b>Email</b>
          <span> &darr;</span>
        </button>

        <button className="box-between p-4">
          <b>Gender</b>
          <span> &darr;</span>
        </button>

        <button className="box-between p-4">
          <b>Registered Date</b>
          <span> &darr;</span>
        </button>
      </div>

      {/* tbl rows */}
      {users.map((user, index) => (
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
    </section>
  );
};

export default Tbl;
