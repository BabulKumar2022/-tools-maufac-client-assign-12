import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <h2 className="text-4xl font-bold text-purple-500 text-center">
          WELCOME to DASHBOARD
        </h2>
        <Outlet></Outlet>
        <label
          for="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
        
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/myReview">My Review</Link>
          </li>
          <li>
            <Link to="/dashboard/userProfile">User Profile</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/addProduct">Add Product</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/manageProduct">Manage Product</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
