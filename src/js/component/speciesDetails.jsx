import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const SpeciesDetails = (props) => {

    const { store, actions } = useContext(Context);


    return (
        <div className="container">
            <div className="card bg-transparent">
                <div className="d-flex justify-content-center p-3">
                    <figure className="text-white d-flex">
                        <div>
                            <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`} alt="" />
                        </div>
                        <div className="ms-5">
                            <figcaption className="mb-3">
                                <h3>
                                    {store.detailed?.properties?.name}
                                </h3>
                            </figcaption>

                            <div>
                                <p>designation: {store.detailed?.properties?.designation}</p>
                                <p>average height: {store.detailed?.properties?.average_height}</p>
                                <p>average lifespan: {store.detailed?.properties?.average_lifespan} </p>
                                <p>hair colors: {store.detailed?.properties?.hair_colors}</p>
                                <p>skin colors: {store.detailed?.properties?.skin_colors}</p>
                                <p>eye colors: {store.detailed?.properties?.eye_colors}</p>
                                <p>language: {store.detailed?.properties?.language}</p>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )

}