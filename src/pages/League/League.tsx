import { Link, Outlet, useLocation } from "react-router-dom";

const Matches = () => {
  const location = useLocation();
  return (
    <>
      <ul className="flex justify-center gap-3 py-10 font-light">
        <li
          className={`${location.pathname.includes("schedule") ? "border-b-2 border-black font-medium" : "font-light"}`}
        >
          <Link to="/league/schedule">일정</Link>
        </li>
        <li
          className={`${location.pathname.includes("standings") ? "border-b-2 border-black font-medium" : "font-light"}`}
        >
          <Link to="/league/standings">순위</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default Matches;
