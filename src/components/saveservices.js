
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { servicelist } from "../adminredux/serviceslice";
import webservices from "../services/apiurls";
import { urls } from "../services/apiurls";
import { useState } from "react";
import { deleteService } from "../adminredux/serviceslice";
import { saveservice } from "../adminredux/serviceslice";

function SaveServiceComponent() {
  const saveservicebox = useRef();
  const dispatch = useDispatch();

  // Use useSelector to directly access data from Redux store
  const list = useSelector((state) => state.slist.value);

  const [responseMsg, setResponseMsg] = useState("");

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ob = {
      "serviceType" : saveservicebox.current.value,
    };

    try {
      const response = await webservices.postapicall(urls.SAVE_SERVICES, ob);

      if (response.data.status === true) {

        dispatch(saveservice(response.data.data))

        setResponseMsg("Service type is successfully saved.");

      } else {
        setResponseMsg("Error: " + response.data.msg);
      }
    } catch (error) {
      setResponseMsg("An error occurred: " + error.message);
    }
  };


  const handleDelete = async (Id) => {
    console.log(Id)
    const confirmed = window.confirm("Are You Sure Want To Delete !");
    console.log(confirmed)
    if (confirmed) {
      try {
        const response = await webservices.deleteapicall(urls.DELETE_SERVICE,Id);
  console.log(response)
        if (response.data.status === true) {
          console.log(response.data.status)
          dispatch(deleteService(Id));
        } else {
          
          alert("Failed to delete service");
        }
      } catch (error) {
        alert("An error occurred while deleting service:" + error);
      }
    }
  };
  
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Save Service Type</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="serviceType" className="form-label">
                Service Type:
              </label>
              <input
                type="text"
                className="form-control"
                id="serviceType"
                ref={saveservicebox}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
          <p className="mt-3">{responseMsg}</p>
        </div>
      </div>
     

      <div className="card mt-4">
        <div className="card-body">
          <h2 className="card-title">Service Type List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Service Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {list && list.map((obj) => (
                <tr>
                  <td>{obj.id}</td>
                  <td>{obj.serviceType}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(obj.id)}>Delete</button>
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

export default SaveServiceComponent;




