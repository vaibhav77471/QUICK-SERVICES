import React from "react";
import { useRef} from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import webservices from "../services/apiurls";
import { urls } from "../services/apiurls";
import { loginstatus } from "../adminredux/adminslice";
import { User } from "../adminredux/user";
import { UserType } from "../adminredux/utype";
import { Booking } from "../adminredux/bookingslice";
// import { setUserLoginStatus } from "../adminredux/userslice";



function LoginForm() {

  const emailbox = useRef();
  const pass = useRef();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlesubmit = async (event) => {
    event.preventDefault();
  
    const ob = {
      email: emailbox.current.value,
      password: pass.current.value,
    };
  
     
  
    const response = await webservices.postapicall(urls.ADMIN_LOGIN, ob);
  

    if (response.data.status === true) {
      // if (response.data.data.userid === 126) {
      //   // Navigate to the dashboard for admin
        dispatch(loginstatus(true));
        dispatch(User(response.data.data.userid));
        const response1 = await webservices.getapicall(urls.USER_LIST);
        dispatch(UserType( response1.data.data.find(obj=>obj.id===response.data.data.userid).type ))

        const response2 = await webservices.getapicall(urls.MY_ORDER);
        var book= response2.data.data.filter(obj=>obj.userId=== response.data.data.userid)
        // var book=response2.data.data.filter(obj=>obj.user.id==id)

        dispatch(Booking(book))
        // navigate("/dashboard");

      // }
      //  else if (response.data.data.userid === 120) {
      //   console.log(response.data.data.userid === 120)
      //   dispatch(setUserLoginStatus(true));
      //   dispatch(User(response.data.data.userid));
      //   navigate("/Home");
      // } else {
      //   alert("Invalid user type");
      // }
    } else {
      alert("Invalid ID or Password");
    }
  };
  

  return (
    <>
      <div className="login-container">
        <div className="background" />
        <div className="form-container">
          <h2 className="login-title">Login</h2>
          <form className="login-form" onSubmit={handlesubmit}>
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                ref={emailbox}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                ref={pass}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;

