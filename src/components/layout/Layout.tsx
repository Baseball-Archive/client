import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";

const NAV_XL = "xl:w-1/4";
const NAV_MD = "md:w-[100px] md:top-0 md:h-screen";
const NAV_DEFAULT =
  "fixed border z-10 bg-white top-auto bottom-0 w-full h-[100px]";

const CONTENT_XL = "xl:w-2/4 xl:left-1/4";
const CONTENT_MD = "md:w-[calc(100%-100px)] md:left-[100px]";
const CONTENT_DEFAULT = "absolute top-0 pt-[60px] border w-100 left-0 w-full";

const Layout = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 md:hidden">
        <Header />
      </div>
      <div className={`${NAV_DEFAULT} ${NAV_XL} ${NAV_MD}`}>
        <Navigation />
      </div>
      <div
        className={`${CONTENT_DEFAULT} ${CONTENT_XL} ${CONTENT_MD}`}> 
        <div className="max-w-screen-md mx-auto my-0">
          <Outlet />
        </div>
      </div>
    </>
  );
}; 
export default Layout;
