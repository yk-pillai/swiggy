import { IMG_CDN_URL } from "../constants";
const CartItem = ({ name, imageId, description, defaultPrice, price }) => {
  return (
    <div className="card w-56 m-4 p-2">
      <img
        className="w-48 h-48 rounded-md"
        src={IMG_CDN_URL + imageId}
      ></img>
      <h2 className="text-lg font-semibold m-2 text-orange-700 text-ellipsis whitespace-nowrap overflow-hidden">
        {name}
      </h2>
      <h4 className="">{description}</h4>
      <h3 className="">
        {(defaultPrice !== undefined)?defaultPrice/100:price/100 } Rs
      </h3>
    </div>
  );
};

export default CartItem;
