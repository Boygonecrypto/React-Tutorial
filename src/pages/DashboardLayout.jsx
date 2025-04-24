import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <swction className="flex h-screen">
        {/* sidebar */}
        <div className="w-[20%] bg-gray-800 text-white">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav className="flex flex-col gap-3 font-bold text-2xl">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "border border-blue-400" : ""
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="trash"
              className={({ isActive }) =>
                isActive ? "border border-blue-400" : ""
              }
            >
              Trash
            </NavLink>
            <NavLink
              to="spam"
              className={({ isActive }) =>
                isActive ? "border border-blue-400" : ""
              }
            >
              Spam
            </NavLink>
          </nav>
        </div>
        {/* outlet - dynamic content side */}
        <div className="w-[80%] p-4">
          <Outlet />
        </div>
      </swction>
    </div>
  );
};

export default DashboardLayout;
