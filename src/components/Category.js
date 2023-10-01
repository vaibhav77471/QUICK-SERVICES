import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import webservices from "../services/apiurls";
import { urls } from "../services/apiurls";
import { Addcategory } from "../adminredux/categoryslice";
import { DeleteCategory } from "../adminredux/categoryslice";

function Category() {
  const [error, setError] = useState(null);

  const itemnamebox = useRef();
  const ServiceTypeIdbox = useRef();
  const descriptionbox = useRef();
  const pricebox = useRef();
  const itemimagebox = useRef();
  const dispatch= useDispatch();

  const list = useSelector((state) => state.clist.value);
  const service = useSelector((state) => state.slist.value);

 

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
  
    formData.append("itemName", itemnamebox.current.value);
    formData.append("serviceTypeId", ServiceTypeIdbox.current.value);
    formData.append("description", descriptionbox.current.value);
    formData.append("price", pricebox.current.value);
    formData.append("itemImage", itemimagebox.current.files[0]); // Use files[0] to get the selected file
  
    try {
      const response = await webservices.postapicall(
        urls.SAVE_CATEGORY_ITEM,
        formData);
        console.log(response)
      if (response.data.status == true) {
        

        dispatch(Addcategory(response.data.data))
        alert ("Item Successfully Saved")

        itemnamebox.current.value = "";
        ServiceTypeIdbox.current.value = "";
        descriptionbox.current.value = "";
        pricebox.current.value = "";
        itemimagebox.current.value = ""; // Clear input value for file type
        setError(null); // Clear any previous error
      } else {
        setError("failed to save");
      }
    } catch (error) {
      setError("An error occurred while saving the item.");
    }
  };
  
 
  

  const DelCategory = async (id) => {
    var Confirmbox = window.confirm("Are You Sure Want To Delete !");
    console.log("Deleting category with ID:", id);
  
    if (Confirmbox) {
      try {
        const response = await webservices.deleteapicall(urls.delete_category, id);
        console.log(response.data);
      
        if (response.data.status === true) {
          dispatch(DeleteCategory(id));
          alert("Successfully Deleted");
        } else {
          alert(`Deletion failed: ${response.data.msg}`);
        }
      } catch (error) {
        console.error("Error deleting category:", error);
        alert("An error occurred while deleting the category.");
      }
      
    }
  };
  

  return (
    <div className="container mt-4">
      <div className="container mt-4">
        <h2 className="mb-4">Add New Category Item</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="itemName" className="form-label">
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                className="form-control"
                ref={itemnamebox}
                //  onChange={(e) => setItemName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="serviceTypeId" className="form-label">
                Service Type ID
              </label>
              <select
                id="serviceTypeId"
                className="form-select"
                ref={ServiceTypeIdbox}
                required
              >
                <option>Select Service Type ID</option>
                {service.map((serviceItem) => (
                  <option value={serviceItem.id}>
                    {serviceItem.serviceType}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                className="form-control"
                ref={descriptionbox}
                // onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="form-control"
                ref={pricebox}
                // onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="itemImage" className="form-label">
                Item Image
              </label>
              <input
                type="file"
                id="itemImage"
                ref={itemimagebox}
                className="form-control"
                accept="image/*"
                //  onChange={(e) => setItemImage(e.target.files[0])}
              />
            </div>
          </div>
          <button
            type="submit"
            // onClick={savecategory}
            onClick={handleSubmit}
            className="btn btn-primary mt-3"
          >
            Save Category
          </button>
        </form>
      </div>

      <h2 className="mt-4">Item List</h2>
      <table className="table table-bordered table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Service Type</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through list and display items */}
          {list &&
            list.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.itemName}</td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>
                  {item.serviceType ? item.serviceType.serviceType : "N/A"}
                </td>
                <td>
                  {item.itemImage ? (
                    <img
                      src={item.itemImage}
                      alt={item.itemName}
                      style={{ width: "100px", height: "100px" }}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td><button onClick={()=>{DelCategory(item.id)}} className="btn btn-outline-danger mt-2">Delete</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Category;
