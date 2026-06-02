import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Fetch cart items
  const fetchCartItems = async () => {
    try {
      const resp = await axios.get("https://zyntra-backend-6.onrender.com/cartitems");
      setCartItems(resp.data);
    } catch (error) {
      console.log("Error fetching cart items:", error);
      toast.error("Failed to load cart items");
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Delete item
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Do you want to delete this product?"
    );

    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:4000/cartitems/${id}`);
        toast.success("Product deleted successfully");

        // refresh cart after delete
        fetchCartItems();
      } catch (error) {
        console.log(error);
        toast.error("Failed to delete product");
      }
    } else {
      toast.info("Product not deleted");
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + Number(item.price || 0);
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart Items</h2>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <>
          <table
            border="1"
            cellPadding="10"
            width="100%"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price (INR)</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt="" width="60" />
                  </td>

                  <td>{item.title}</td>

                  <td>{item.category}</td>

                  <td>₹{Math.floor(item.price * 95.72)}</td>

                  <td>
                    {item.rating?.rate} ⭐ ({item.rating?.count})
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      DELETE <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Section */}
          <h3 style={{ marginTop: "20px" }}>
            Total Price: ₹{Math.floor(totalPrice * 95.72)}
          </h3>

          <button
            onClick={() => navigate("/userportal/products")}
            style={{
              marginTop: "10px",
              padding: "10px 15px",
              background: "green",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartItems;