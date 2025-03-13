
import {CDN_URL} from "../utils/constants";

const ResCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines = [],
      costForTwo,
      avgRating,
      sla: { deliveryTime } = {}
    } = resData || {};
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={
            CDN_URL+
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4><p>Price: &#8377;{costForTwo/100}</p></h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} min.</h4>
      </div>
    );
  };
 export default ResCard;  