import { LOGO_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
   
  return (
    <>
      <div className=" bg-gray-200 m-2 p-2 w-48 rounded-lg hover:bg-gray-300 hover:border shadow-md">
        <img
          alt="image"
          className="rounded-lg h-[170px] w-full"
          src={LOGO_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>Cuisines : {cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    </>
  );
};



export const WithVegLabel = (RestaurantCard) => {
  return (props) => {
  
    return <>

    <label className="text-xs bg-green-300 rounded-md m-2 px-2 py-[4px] absolute">Veg</label>
    <RestaurantCard {...props}/>
    
    </>
  }
}

export default RestaurantCard;
