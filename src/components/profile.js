


import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { urls } from "../services/apiurls";
import webservices from "../services/apiurls";

export default function Profile() {
  const id = useSelector((state) => state.user.value);
  const list = useSelector((state) => state.ulist.value);
  const photo = useRef();

  useEffect(() => {
    // Execute any initial actions here (if needed)
  }, []);

  const imgupload = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("userId", id);
    formData.append("profileImage", photo.current.files[0]);

    try {
      // Make an API request to upload the image
      const response = await webservices.postapicall(urls.IMAGE_UPLOAD, formData);
      console.log("Image upload response:", response);

      // Handle success or display a message to the user
    } catch (error) {
      console.error("Image upload error:", error);
      // Handle error or display an error message to the user
    }
  };

  const user = list.find((obj) => obj.id === id);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h1>Profile</h1>
          <form onSubmit={imgupload}>
            <div className="mb-3">
              <label htmlFor="inputGroupFile01" className="form-label">
                Upload Profile Picture
              </label>
              <input
                type="file"
                ref={photo}
                className="form-control"
                id="inputGroupFile01"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Upload Image
            </button>
          </form>
        </div>
        <div className="col-md-8">
          {user && (
            <div className="card">
              <div className="card-header">User Information</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Name:</strong> {user.name}
                  </li>
                  <li className="list-group-item">
                    <strong>Email:</strong> {user.email}
                  </li>
                  <li className="list-group-item">
                    <strong>Mobile:</strong> {user.mobile}
                  </li>
                  <li className="list-group-item">
                    <strong>Address:</strong> {user.address}
                  </li>
                  <li className="list-group-item">
                    <strong>City:</strong> {user.city}
                  </li>
                  <li className="list-group-item">
                    <strong>State:</strong> {user.state}
                  </li>
                  <li className="list-group-item">
                    <strong>Password:</strong> {user.password}
                  </li>
                  <li className="list-group-item">
                    <strong>Type:</strong> {user.type}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
