import React, { useContext, useState } from "react";
import RestaurantCard, { WithVegLabel } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const {
    listOFRestaurants,
    filteredRestaurantDisplay,
    setFilteredRestaurantsDisplay,
  } = useRestaurantMenu();

  const { loggedInUser, setUserName } = useContext(UserContext);

  

  const handleFilteredRestaurants = () => {
    const filtered = filteredRestaurantDisplay.filter(
      (res) => res.info.avgRating > 4.1
    );
    setFilteredRestaurantsDisplay(filtered);
  };

  const handleSearch = () => {
    const filteredRestaurants = listOFRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantsDisplay(filteredRestaurants);
  };

  console.log("==>", searchText);

  if (!onlineStatus) {
    return (
      <h1>
        {" "}
        Looks like youre Offline! Please check your internet connectivity!{" "}
      </h1>
    );
  }

  const RestaurantVeg = WithVegLabel(RestaurantCard);

  return listOFRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="flex">
        <div className="py-4">
          <input
            type="text"
            className="border border-e-black border-solid ml-4"
            value={searchText}
            onChange={(e) => {
              
              setSearchText(e.target.value);
            }}
          />

          <button
            className="bg-blue-300 px-4 py-1.5 mx-4 rounded-md cursor-pointer"
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
        <div className="py-4">
          <button
            onClick={handleFilteredRestaurants}
            className=" bg-blue-200 px-4 py-1.5 mx-4 rounded-md cursor-pointer"
          >
            Top‑Rated Restaurants
          </button>
        </div>
        <div className="py-4">
          <input
            type="text"
            className="border border-e-black border-solid my-1"
           
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantDisplay.map((i, index) => (
          <Link
            to={"restaurant/" + i.info.id ?? index}
            key={i.info.id ?? index}
          >
            {i?.info?.veg ? (
              <RestaurantVeg resData={i} />
            ) : (
              <RestaurantCard resData={i} />
            )}
          </Link>
        ))}
      </div>
      ``
    </>
  );
};

export default Body;


