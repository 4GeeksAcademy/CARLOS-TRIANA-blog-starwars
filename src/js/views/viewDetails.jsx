import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { PeopleDetails } from "../component/peopleDetails.jsx";
import { PlanetsDetails } from "../component/planetsDetails.jsx";
import { SpeciesDetails } from "../component/speciesDetails.jsx";
import { StarshipsDetails } from "../component/starshipsDetails.jsx";
import { VehiclesDetails } from "../component/vehiclesDetails.jsx";


export const ViewDetails = () => {

    const { store, actions } = useContext(Context);

    const params = useParams()

    useEffect(() => {
        actions.getOne(params.type, params.uid)
    }, [])

    return (
        <div className="container">
            {params.type==='people' && <PeopleDetails type={'characters'} uid={params.uid} />}
            {params.type==='species' && <SpeciesDetails type={params.type} uid={params.uid} />}
            {params.type==='planets' && <PlanetsDetails type={params.type} uid={params.uid} />}
            {params.type==='starships' && <StarshipsDetails type={params.type} uid={params.uid} />}
            {params.type==='vehicles' && <VehiclesDetails type={params.type} uid={params.uid} />}
        </div>
    )

}