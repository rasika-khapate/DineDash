import { LOGO_URL } from "../utils/constant";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const CategoryItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (items) => {
    // console.log(items);
    dispatch(addItem(items));
  };

  return (
    <div>
      {items.map((c) => (
        <div
          key={`${c?.card?.info?.id}-${Math.random()}`}
          // to avoid duplicate keys in cart component
          className="bg-gray-150 my-[4px] px-2 py-4 text-left shadow-md flex justify-between"
        >
          <div className="w-10/12">
            <div className="font-semibold">{c?.card?.info?.name}</div>
            <div>₹ {c?.card?.info?.price / 100}</div>
            <p className="text-xs line-clamp-2">{c?.card?.info?.description}</p>
          </div>
          <div className="w-2/12 pl-3 ">
            <img
              src={LOGO_URL + c?.card?.info?.imageId}
              alt="Image"
              className="rounded-lg"
            />

            <button
              className="relative bottom-3 left-6 bg-white text-green-700 px-4 rounded-md cursor-pointer"
              onClick={() => handleAddItem(c)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;

// ✅ Summary Table
// Syntax	Executes on Click?	         Passes Argument?	       Correct?	   Notes
// onClick={handleAddItem}	           ✅ Yes	                ❌ No	    ✅	Best when no args needed
// onClick={handleAddItem(item)}	     ❌ No (runs on render)	✅ Yes	    ❌	Don't call the function directly
// onClick={() => handleAddItem}	     ❌ No	                  ❌ No	    ❌	Returns function, doesn't call it
// onClick={() => handleAddItem(item)} ✅ Yes	                ✅ Yes	    ✅	Best when args needed
