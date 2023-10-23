import { memo, forwardRef, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { menusConfig } from "@/router";
import "./index.scss";

const Index = memo(
  forwardRef(() => {
    const [nowPagePath, setNowPagePath] = useState("");
    const location = useLocation();

    useEffect(() => {
      setNowPagePath(location.pathname);
    }, [location]);

    return (
      <div className="root-page">
        <div className="page-header"></div>
        <div className="page-main">
          <div className="page-menus">
            {menusConfig.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`menu-item ${
                    item.path === nowPagePath ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="page-container">
            <div className="page-container-main">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  })
);

export default Index;
