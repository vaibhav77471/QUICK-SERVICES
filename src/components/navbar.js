import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginstatus } from "../adminredux/adminslice";
import { useEffect } from "react";
import { urls } from "../services/apiurls";
import webservices from "../services/apiurls";
import { userlist } from "../adminredux/userslice";
import { servicelist } from "../adminredux/serviceslice";
import { categoryList } from "../adminredux/categoryslice";
import { UserName } from "../adminredux/usernameslice";
// import { User } from "../adminredux/user";
import { UserType } from "../adminredux/utype";
import { Booking } from "../adminredux/bookingslice";

function Navbar() {
  const login = useSelector((state) => state.islogin.value);
  const type = useSelector((state) => state.utype.value);

  const data = useSelector((state) => state.username.value);
  var id = useSelector((state) => state.user.value);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginfunc = async () => {
    dispatch(loginstatus(false));
    navigate("/");
  };

  useEffect(() => {
    async function fetchData() {
      if (login === true) {
        try {
          const response1 = await webservices.getapicall(urls.USER_LIST);
          if (response1.data.status === true) {
            dispatch(userlist(response1.data.data));
          }

          const response2 = await webservices.getapicall(urls.SERVICES_LIST);
          if (response2.data.status === true) {
            dispatch(servicelist(response2.data.data));
          }

          const response3 = await webservices.getapicall(urls.CATEGORY_LIST);
          if (response3.data.status === true) {
            dispatch(categoryList(response3.data.data));
          }
        } catch (error) {
          console.error("Error fetching API data:", error);
        }

        if (id != "") {
          const res = await webservices.getapicall(urls.USER_LIST);
          dispatch(UserType(res.data.data.find((obj) => obj.id === id).type));
          dispatch(UserName(res.data.data.find((ob) => ob.id === id)));
          const response2 = await webservices.getapicall(urls.MY_ORDER);
          var book = response2.data.data.filter((obj) => obj.user.id == id);
          dispatch(Booking(book));
        }
      }
    }

    fetchData(); // Call the fetchData function when the component mounts
  }, [dispatch, login, type]); // Make sure to include dependencies for useEffect

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="navbar-brand">QUICK SERVICES</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {login === true ? (
            <>
              {type === "User" ? (
                <>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/Home">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cart">
                        Cart
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="/myorder">
                        My Order
                      </Link>
                    </li>

                    {/* user dropdown */}
                    <li className="nav-item dropdown pe-3">
                      <a
                        className="nav-link nav-profile d-flex align-items-center pe-0"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <img
                          style={{ height: "30px" }}
                          src={"./img/profileimage.png"}
                          alt="Profile"
                          className="rounded-circle"
                        />
                        <span className="d-none d-md-block dropdown-toggle ps-2">
                          {data.name}
                        </span>
                      </a>

                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                        <li className="dropdown-header">
                          <h6>{data.name}</h6>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>

                        <li>
                          <i className="bi bi-person"></i>
                          <Link className="nav-link" to="/userprofile">
                            <span>My Profile</span>
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/" onClick={loginfunc}>
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/saveservices">
                        Service List
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Category">
                        Category List
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Userlist">
                        User List
                      </Link>
                    </li>
                    

                    <li className="nav-item dropdown pe-3">
                      <a
                        className="nav-link nav-profile d-flex align-items-center pe-0"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <img
                        className="rounded-circle"
                        src={"../profileimage.png"}
                        style={{ height: "30px" }}
                          // src={data.profileImage}
                        
                          alt="Profile"
                          
                        />
                        <span className="d-none d-md-block dropdown-toggle ps-2">
                          {data.name}
                        </span>
                      </a>

                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                        <li className="dropdown-header">
                          <h6>{data.name}</h6>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>

                        <li>
                          <i className="bi bi-person"></i>
                          <Link className="nav-link" to="/userprofile">
                            <span>My Profile</span>
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/" onClick={loginfunc}>
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </>
              )}
            </>
          ) : (
            <>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </li>
              </ul>
              
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
