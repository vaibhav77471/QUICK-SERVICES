

import React from "react";
import webservices from "../services/apiurls";
import { urls } from "../services/apiurls";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { Booking } from "../adminredux/bookingslice";

function Myorder() {

   // var id=useSelector(state=>state.user.value)
   var dispatch=useDispatch()
   var booking=useSelector(state=>state.booking.value)

  var remove=async(id)=>{
   const response = await webservices.putApiCall(urls.BOOKING_CANCEL,id)
   console.log(response.data)
   if(response.data.status===true){
       var book=booking.filter(obj=>obj.items.id!=id)
     
       dispatch(Booking(book))
   }
  }

  return (
    <div>
      <h1>My Orders</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Booking Date</th>
            <th>Service Name</th>
            <th>Booking Status</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Item Image</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((obj) => (
            <>
              <tr>
                <td>{obj.itemId}</td>
                <td>{obj.items.itemName}</td>
                <td>{obj.providedDate}</td>
                <td>{obj.bookingStatus}</td>
                <td>{obj.personQty}</td>
                <td>{obj.items.price}</td>
                <td>
                  <img src={obj.items.itemImage} width={100} height={100}></img>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => remove(obj.itemId)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Myorder;
