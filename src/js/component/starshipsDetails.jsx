import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const StarshipsDetails = (props) => {


    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="card bg-transparent">
                <div className="d-flex justify-content-cente p-3">
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
                                <p>starship class: {store.detailed?.properties?.starship_class}</p>
                                <p>manufacturer: {store.detailed?.properties?.manufacturer}</p>
                                <p>cost in credits: {store.detailed?.properties?.cost_in_credits} </p>
                                <p>length: {store.detailed?.properties?.length}</p>
                                <p>crew: {store.detailed?.properties?.crew}</p>
                                <p>passengers: {store.detailed?.properties?.passengers}</p>
                                <p>max_atmosphering_speed: {store.detailed?.properties?.max_atmosphering_speed}</p>
                                <p>hyperdrive_rating: {store.detailed?.properties?.hyperdrive_rating}</p>
                                <p>MGLT: {store.detailed?.properties?.MGLT}</p>
                                <p>cargo_capacity: {store.detailed?.properties?.cargo_capacity}</p>
                                <p>consumables: {store.detailed?.properties?.consumables}</p>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )

}
