import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card w-56 m-4 p-2">
      <img
        className="w-48 h-48 rounded-md"
        src={IMG_CDN_URL + cloudinaryImageId}
      ></img>
      <h2 className="text-lg font-semibold m-2 text-orange-700 text-ellipsis whitespace-nowrap overflow-hidden">
        {name}
      </h2>
      <h4 className="">{avgRating} ⭐️</h4>
      <h3 className="text-ellipsis whitespace-nowrap overflow-hidden">
        {cuisines.join(", ")}
      </h3>
    </div>
  );
};

export default RestaurantCard;
