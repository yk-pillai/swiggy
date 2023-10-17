import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer  from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurants } from "../utils/Helper";
import useIsOnline from "../utils/useIsOnline";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  const [restaurantList, setrestaurantList] = useState([]);
  const isOnline = useIsOnline();

  useEffect(() => {
    getRestaurantData();
  }, []);


  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setfilteredRestaurantList(
      json?.data?.cards?.[5].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setrestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // const restRepeat =
    //   json?.data?.cards?.[5].card?.card?.gridElements?.infoWithStyle?.restaurants.concat(
    //     json?.data?.cards?.[5].card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants
    //   );
    // setfilteredRestaurantList(restRepeat);
    // setrestaurantList(restRepeat);
  }

  if(!isOnline) return <h1>You are offline. Please check your internet connection!</h1>;

  //sometimes the swiggy api doesn't return proper response in terms of array structure or sequence. So the filteredRestaurantList can be undefined instead of the empty array as initialized due to optional chaining.
  //to avoid rendering error we use the below condition
  if (!filteredRestaurantList) return <h1>Swiggy did not give proper response.</h1>;
  return filteredRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container m-1 p-2 justify-center flex">
        <input
          className="input border border-orange-500 w-96 rounded focus:border-black outline-none placeholder:pl-5"
          value={searchText}
          placeholder="Search"
          // defaultValue="test" //enable this to make this a uncontrolled component
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="bg-orange-500 text-white rounded p-2 ml-2"
          onClick={() => {
            setfilteredRestaurantList(
              filterRestaurants(searchText.toLowerCase(), restaurantList)
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list flex flex-wrap justify-center">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
