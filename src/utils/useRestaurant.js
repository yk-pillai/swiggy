import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_DETAILS } from "../constants";
const useRestaurant = (resId) => {

  const [menu, setMenu] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      FETCH_RESTAURANT_DETAILS +
        resId
    );
    const json = await data.json();
    // console.log(json.data.cards[0].card.card.info);
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    setRestaurantDetails(json?.data?.cards?.[0]?.card?.card?.info);
    setMenu(
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards
    );
  }

  return [menu, restaurantDetails];
}

export default useRestaurant
