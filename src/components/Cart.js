import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector(state => state.cart);

  return (
    <div className="container mt-4 bg-light">
      <h2>Your Cart</h2>
      <table className="table table-bordered ">
        <thead className="table-dark">
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Date of Booking</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.itemName}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>
                <img src={item.itemImage} alt={item.itemName} className="img-thumbnail" width="100" />
              </td>
              <td>${item.price}</td>
              <td>{item.dateAdded}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6" className="text-right"><strong>Total:</strong></td>
            <td>${calculateTotal(cartItems)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

// Helper function to calculate the total price of items in the cart
function calculateTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

export default Cart;
