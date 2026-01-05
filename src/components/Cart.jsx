import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.itemList);
 

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 m-auto">
      <div className="flex justify-around my-4 py-4 shadow-blue-100 shadow-lg  bg-gray-100">
        <div className="text-2xl font-bold ">Cart</div>
        <button
          onClick={handleClearCart}
          className="bg-lime-200 px-3 py-1 rounded-2xl cursor-pointer"
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <h2 className="text-center">Your cart is empty, please add items!</h2>
      )}
      <CategoryItems items={cartItems} />
    </div>
  );
};

export default Cart;
