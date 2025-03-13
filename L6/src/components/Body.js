import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  //state variable example
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");
  // useEffect example
  useEffect(() => {
    fetchData();
  }, []);

  // console.log("re-rendered")

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9204334&lng=77.63571390000001&str=North%20Indian&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=b5e96d2d-e146-f31f-7417-2153202f7139&metaData=%7B%22type%22%3A%22CUISINE%22%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Cuisine%22%7D"
    );

    const json = await data.json();
    // Optional Chaining
    setRestaurantList(
      json.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredRestaurantList(restaurantList);
  };
  //conditional rendering
  if (restaurantList.length == 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const dynamicList = restaurantList.filter((res)=>{
                return res.card?.card?.info.name.toLowerCase().includes(e.target.value.toLowerCase());
              });
              setFilteredRestaurantList(dynamicList);
            }}
          />
          <button className="search-btn" onClick={()=>{
            const searchMatchedResList = restaurantList.filter((res)=>{
              return res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
            });
            setFilteredRestaurantList(searchMatchedResList);
          }}>search</button>
          <button
            className="filter-rating-btn"
            onClick={() => {
              
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <ResCard
            key={restaurant.card?.card?.info.id}
            resData={restaurant.card?.card?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
