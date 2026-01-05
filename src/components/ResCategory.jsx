import { useState } from "react";
import CategoryItems from "./CategoryItems";

export const ResCategory = ({ itemList, showItems, setShowIndex }) => {
 

  const [showCategoryToggle, setShowCategoryToggle] = useState(false);

  const { title, itemCards } = itemList;

  const handleHide = () => {
    setShowIndex();
    setShowCategoryToggle(!showCategoryToggle);
  };
  return (
    <>
      <div className="bg-gray-200 m-3 p-3  shadow-md">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleHide}
        >
          <div className="font-bold">
            {title} ({itemCards.length})
          </div>
          <span> {showItems && showCategoryToggle ? "🔺" : "🔻"}</span>
        </div>
        <div>
          {showItems && showCategoryToggle && (
            <CategoryItems items={itemCards} />
          )}
        </div>
      </div>
    </>
  );
};
export default ResCategory;
