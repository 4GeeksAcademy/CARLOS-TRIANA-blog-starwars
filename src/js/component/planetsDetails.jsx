import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const PlanetsDetails = (props) => {

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
                                <p>rotation period: {store.detailed?.properties?.rotation_period}</p>
                                <p>orbital_period: {store.detailed?.properties?.orbital_period}</p>
                                <p>gravity: {store.detailed?.properties?.gravity} </p>
                                <p>population: {store.detailed?.properties?.population}</p>
                                <p>climate: {store.detailed?.properties?.climate}</p>
                                <p>terrain: {store.detailed?.properties?.terrain}</p>
                                <p>surface water: {store.detailed?.properties?.surface_water}</p>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )

}