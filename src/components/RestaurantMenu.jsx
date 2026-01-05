import { useState } from "react";
import mennuData from "../utils/mennuData.json";
import { ResCategory } from "./ResCategory";



const RestaurantMenu = () => {
  const { name, cuisines } = mennuData?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    mennuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  const categories =
    mennuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const [showIndex, setShowIndex] = useState(null);

  return (
    <>
      <div className="m-4 p-4 text-center bg-gray-100 w-8/12 mx-auto">
        <h1 className="text-lg font-bold text-left">{name}</h1>
        <h3 className="text-left">Cuisines : {cuisines.join(", ")}</h3>

        {categories.map((category, index) => (
          <ResCategory
            key={category?.card?.card?.categoryId}
            itemList={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
