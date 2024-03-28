import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {

    const [restaurantList,setRestaurantList] = useState([]);
    const [filteredRestaurantList,setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
  
    useEffect(()=>{
        fetchData();
    },[])
  
    async function fetchData() {
      const resData = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5967587&lng=73.896851&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const resList = await resData.json();
      setRestaurantList(resList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurantList(resList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(resList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
  
    if (filteredRestaurantList.length === 0){
        return <Shimmer/>
    }

    return (
      <div className="body">
        <div className="filter flex">
        <div className="m-4 p-4">
          <input className="border border-solid border-black" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button className="bg-green-100 px-4 m-4 py-2 rounded-lg" onClick={() => setFilteredRestaurantList(restaurantList.filter((r) => r.info.name.toLowerCase().includes(searchText.toLowerCase())))}>Search</button>
          </div>
          <div className="m-3 p-3 flex">
          <button className="bg-gray-100 px-4 m-4 py-2 flex items-center rounded-lg" onClick={() => setRestaurantList(restaurantList.filter((r) => r.info.avgRating > 4))}>Top Rated Restaurants</button>
          </div>
        </div>
        
        <div className="flex flex-wrap">
          {filteredRestaurantList.map((res) =>
            <Link to={"/restaurant/" + res.info.id}><RestaurantCard key={res.info.id} restData={res.info} /></Link>
          )}
        
        </div>
      </div>
    );
  };


  export default Body;