import { useContext, useState } from "react";
import RestaurantCard, { WithVegLabel } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantVeg = WithVegLabel(RestaurantCard);

  const {
    listOFRestaurants,
    filteredRestaurantDisplay,
    setFilteredRestaurantsDisplay,
  } = useRestaurantMenu();

  const { loggedInUser, setUserName } = useContext(UserContext);

  // console.log(listOFRestaurants);

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

  // console.log(searchText);

  if (!onlineStatus) {
    return (
      <h1>
        {" "}
        Looks like youre Offline! Please check your internet connectivity!{" "}
      </h1>
    );
  }

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
              console.log(e.target.value)
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
            // value={loggedInUser}
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

// ====================================================================================================================

//   const fetchedData = await axios.get(
//     "https://api.allorigins.win/raw?url=https://swiggy-api-4c740.web.app/swiggy-api.json"
//   );

//     console.log(fetchedData);

//      const data = fetchedData.data;

// const resList =
//   data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

// console.log("✅ Restaurant List:", resList);

// ====================================================================================================================

// const restaurantCard = fetchedData.data.cards.find(
//   (card) => card?.card?.id === "restaurant_grid_listing_v2"
// );

// const resList =
//   restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
