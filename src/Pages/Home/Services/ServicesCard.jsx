import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {

    const {_id,title,img,price} =service
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-500">Price : {price}</p>
          <div className="card-actions">
            <Link to={`booking/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

