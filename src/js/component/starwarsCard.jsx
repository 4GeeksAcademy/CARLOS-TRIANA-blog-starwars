import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarwarsCard = (props) => {

  const { store, actions } = useContext(Context);

 
  const isFavorite = store.favorites.some(fav => fav.uid === props.uid);

  const handleFavorites = () => {
    const favorites = { ...props };
    actions.addRemoveFavorites(favorites);
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
      <div className="card border-0 bg-dark text-white">
        <figure className="mb-0">
          <Link to={`/details/${props.type}/${props.uid}`} className="text-decoration-none">
            <img src={props.img} className="card-img-top" alt={props.name} />
          </Link>
          <div className="d-flex justify-content-between m-3">
            <figcaption className="text-start">{props.name}</figcaption>
            <button 
              className="bg-transparent border-0 text-white" 
              onClick={handleFavorites}
            >
              {}
              <i 
                className={`fa-star fa-lg ${isFavorite ? 'fa-solid text-danger' : 'fa-regular'}`} 
              ></i> 
            </button>
          </div>
        </figure>
      </div>
    </div>
  );
};
