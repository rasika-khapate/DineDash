import { LOGO_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const CategoryItems = ({ items }) => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h1>{loggedInUser}</h1>
      {/* above H1 works only when you click on category items */}
      {items.map((c) => (
        <div
          key={c?.card?.info?.id}
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

            <button className="relative bottom-3 left-6 bg-white text-green-700 px-4 rounded-md cursor-pointer">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;
