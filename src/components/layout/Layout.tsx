import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";

// xl	min 1280px ~ 100%
// nav - menu width 1/4 / content width 3/4

// md	min 768px ~ 1280px
// nav - icon으로 / content width 100%- nav

// nav - 위치 하단으로 flex row / content - width 100%
// flex top-auto bottom-0 w-100

const NAV_XL = "xl:w-1/4";
const NAV_MD = "md:w-[100px] md:top-0 md:h-screen";
const NAV_DEFAULT =
  "fixed border z-10 bg-white top-auto bottom-0 w-full h-[100px]";

const CONTENT_XL = "xl:w-2/4 xl:left-1/4";
const CONTENT_MD = "md:w-[calc(100%-100px)] md:left-[100px]";
const CONTENT_DEFAULT = "absolute top-0 border w-100 left-0 w-full";

const Layout = () => {
  return (
    <>
      <div className={`${NAV_DEFAULT} ${NAV_XL} ${NAV_MD}`}>
        <Navigation />
      </div>
      <div
        className={`${CONTENT_DEFAULT} ${CONTENT_XL} ${CONTENT_MD}`}
        style={{ height: "1000px" }}
      >
        <div className="max-w-screen-md mx-auto my-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
