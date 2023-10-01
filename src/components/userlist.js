
import React from "react";
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { urls } from "../services/apiurls";
import webservices from '../services/apiurls';

function Userlist(){

  
  const list= useSelector((state) => state.ulist.value);
  
  const dispatch = useDispatch();


  

  const DeleteUser = async (Id) => {
    const Confirmbox = window.confirm("Are You Sure Want To Delete !")

    if (Confirmbox === true) {
      const response = await webservices.deleteapicall(urls.Delete_USER, Id);
      console.log(response)

      if (response.data.status == true) {
        dispatch(DeleteUser(Id));
        alert("Successfully Deleted");
      }
    }
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title">User List</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {list.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td onClick={() => DeleteUser(user.id)}>
                    <button className="btn btn-outline-danger">Delete user</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Userlist;
