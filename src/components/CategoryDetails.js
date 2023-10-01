


import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from "../adminredux/cartslice";
import {urls} from "../services/apiurls"
import webservices from "../services/apiurls"

function CategoryDetails() {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

  const [isItemBooked, setIsItemBooked] = useState(false);
  const [bookedSuccessMessage, setBookedSuccessMessage] = useState("");


  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...item, quantity }));
    setQuantity(quantity + 1);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  const categoryItems = useSelector((state) => state.clist.value);
  const userid = useSelector(( state) => state.user.value);


  const { id } = useParams();

  if (!id) {
    return <div>Loading or error message...</div>;
  }

  const item = categoryItems.find((item) => item.id == id);

  if (!item) {
    return <div>Category not found</div>;
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  const handleBookItem = async (e) => {
    e.preventDefault();

    const today = new Date();
    const ob= {
      userId : userid,
      itemId : id,
      personQty : quantity,
      providedDate : today.toLocaleDateString(),
      time : today.toLocaleTimeString().slice(0,8)

    }
    console.log(ob)

    const response = await webservices.postapicall(urls.SAVE_BOOKING, ob);
    console.log(response)


    // Assuming the booking was successful, update the state and show a success message.
    setIsItemBooked(true);
    setBookedSuccessMessage("Item booked successfully!");
  
    // Optionally, you can clear the success message after a few seconds.
    setTimeout(() => {
      setIsItemBooked(false);
      setBookedSuccessMessage("");
    }, 2000); // Adjust the duration as needed.
  };
  

  return (
    <div className="container mt-4 bg-light p-5">
      <div className="row">
        <div className="col-md-6">
          <img src={item.itemImage} alt={item.itemName} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{item.itemName}</h2>
          <p className="text-muted">ID: {item.id}</p>
          <p className="text-muted">Price: ${item.price}</p>
          <hr />
          <p>{item.description}</p>

          {/* Quantity button */}
          <div className="input-group">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              type="text"
              className="form-control form-control-sm text-center"
              value={quantity}
              readOnly
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          {/* Add to Cart button */}
          <button className="btn btn-primary mt-3 btn-block" onClick={handleAddToCart}>
            Add to Cart
          </button>

           {/* Book item button */}
           <button className="btn btn-primary mt-3 ml-6 btn-block" onClick={handleBookItem}>
            Book Item
          </button>

          {/* Success message */}
          {showSuccessMessage && (
            <div className="alert alert-success mt-3" role="alert">
              Item added to your cart successfully.
            </div>
          )}

                    
          {/* Success message for item booked */}
          {isItemBooked && (
            <div className="alert alert-success mt-3" role="alert">
              {bookedSuccessMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryDetails;

