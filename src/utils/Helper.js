export function filterRestaurants(searchText, restaurantList) {
  const filterData = restaurantList.filter((restaurant) => {
    return restaurant.info.name.toLowerCase().includes(searchText);
  });
  return filterData;
}
