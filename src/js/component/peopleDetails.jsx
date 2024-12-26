import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const PeopleDetails = (props) => {

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
                                <p>gender: {store.detailed?.properties?.gender}</p>
                                <p>birht year: {store.detailed?.properties?.birht_year}</p>
                                <p>eye color: {store.detailed?.properties?.eye_color} </p>
                                <p>hair color: {store.detailed?.properties?.hair_color}</p>
                                <p>heigth: {store.detailed?.properties?.height}</p>
                                <p>mass: {store.detailed?.properties?.mass}</p>
                                <p>skin color: {store.detailed?.properties?.skin_color}</p>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )

}