const RestaurantCard = (props) =>{
    return (
      <div className="p-4 m-4 w-[250px] bg-gray-200 hover:border border-solid border-black rounded-lg">
        <img className="rounded-lg" alt="reslogo" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + props.restData?.cloudinaryImageId} />
        <h3 className="font-bold py-4 text-lg">{props.restData?.name}</h3>
        <h4>{props.restData?.cuisines.join(", ")}</h4>
        <h4>{props.restData?.avgRatingString}</h4>
        <h4>{props.restData?.sla?.deliveryTime} mins</h4>
      </div>
    )
  }

  export default RestaurantCard;