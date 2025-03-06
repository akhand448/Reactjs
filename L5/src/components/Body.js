
import ResCard from "./ResCard";

import resList from "../utils/mockData"
import {useState} from "react"



const Body = () => {
  
 //state variable example
 const [restaurantList, setRestaurantList] = useState(resList)
    return (
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating>4
              );
              setRestaurantList(filteredList)
            }}
          >Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {restaurantList.map((restaurant) => (
            <ResCard key = {restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;