import { useState } from "react";
import mennuData from "../utils/mennuData.json";
import { ResCategory } from "./ResCategory";
// import { MENU_URL } from "../utils/constant";

// We can read resId here using usePraams hook given by react-router-dom and substitute it in api

const RestaurantMenu = () => {
  const { name, cuisines } =
    mennuData?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    mennuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  const categories =
    mennuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

const [showIndex , setShowIndex] = useState(null)

  return (
    <>
      <div className="m-4 p-4 text-center bg-gray-100 w-8/12 mx-auto">
        <h1 className="text-lg font-bold text-left">{name}</h1>
        <h3 className="text-left">Cuisines : {cuisines.join(", ")}</h3>

        {categories.map((category , index) => (
          <ResCategory
            key={category?.card?.card?.categoryId}
            itemList={category?.card?.card}
            showItems = {index === showIndex ? true : false}
            setShowIndex = {() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;

// This below code can be put into a CUSTOM HOOK like useRestaurantMenu() so that the code follows SINGLE RESPONSIBILITY PRINCIPLE which makes the code more modular, maintainable, resuable and testable.

// const {resId} = useParams()

// const resInfo = useRestaurantMenu(resId)

// const useRestaurantCard = () => {

// const [resInfo,setResInfo] = usestate(null)

// useEffect(() => {
// fetchMenu()
// }, []);

// const fetchMenu = async () => {
//   const data = await fetch(MENU_URL + resId);
//   const fetchedMenuData = await data.json();
//   console.log(fetchedMenuData);
//    setResInfo(fetchedMenuData)

// return resInfo
//   // Swiggy rejecting the above api call
// };
// }
