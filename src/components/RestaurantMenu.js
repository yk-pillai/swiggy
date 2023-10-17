import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const param = useParams();
  const [menu, restaurantDetails] = useRestaurant(param.id); //custom hook
  const dispatch = useDispatch()

  const addToCart = (item) => {
    dispatch(addItem(item))
  }

  return (restaurantDetails.length === 0)?(<Shimmer/>):(
    <div className="rest-page flex">
      <div className="rest-details p-40">
        <h1>{restaurantDetails.name}</h1>
        <img className="w-48"src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId}></img>
        <h2>{restaurantDetails.locality}</h2>
        <h2>{restaurantDetails.city}</h2>
        <h2>{restaurantDetails.avgRating} stars</h2>
      </div>
      <div className="rest-menu mt-16">
        <h1 className="font-bold text-orange-700">Menu</h1>
        <ul>
          {console.log(menu)}
          {menu.map((item) => {
            return <li className="flex" key={item.card.info.id}><MenuItem {...item.card.info}/> <button onClick={()=> addToCart(item.card.info)} className="bg-orange-700 rounded-lg p-2 mt-20 text-white h-10">Add</button></li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu
