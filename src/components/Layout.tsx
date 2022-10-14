import { Outlet } from "react-router";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-[#444] min-h-screen">
      <img
        src="images/logo.svg"
        className="logo  w-4/5 sm:w-2/5 mx-auto"
        alt="logo"
      />
      {children}
      <Outlet />
    </div>
  );
};

export default Layout;
