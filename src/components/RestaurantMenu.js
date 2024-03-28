import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuAPI from "../utils/Constants";



const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState({});

    const [menuItems, setMenuItems] = useState([]);

    const {res} = useParams();

    useEffect(() =>{
fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const url = MenuAPI + res;
       const resMenuResponse = await fetch(url);
       const resMenu = await resMenuResponse.json();
       console.log(resMenu?.data);
       setResInfo(resMenu?.data?.cards[2]?.card?.card?.info);
       //console.log(resInfo?.data);
       setMenuItems(resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
       console.log(resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

       const categories = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

       console.log(categories);
    }

return(
    <div className="text-center">
        <h2 className="font-bold my-6 text-2xl" >{resInfo?.name}</h2>
        <h2 className="font-bold text-lg">{resInfo?.cuisines?.join(', ')} - {resInfo?.costForTwoMessage}</h2>
        
        
        
    </div>
)
}

export default RestaurantMenu;