import React, { useContext } from "react";
import "../../styles/home.css";
import { StarwarsCard } from "../component/starwarsCard.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {

	const { store, actions } = useContext(Context)

	return (
		<div className="container text-center mb-5 mt-5">
			


			<div className="accordion bg-transparent" id="accordionExample">

				<div className="accordion-item bg-transparent  text-white">
					<h2 className="accordion-header  text-white">
						<button className="accordion-button bg-transparent border-bottom text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							<h2 className="text-start text-white">Pleoples</h2>
						</button>
					</h2>
					<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
						<div className="accordion-body text-white">
							<div className="row">
								{
									store.people?.map(el => <StarwarsCard key={el.uid} type={'people'} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`} />)
								}
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item bg-transparent  text-white">
					<h2 className="accordion-header">
						<button className="accordion-button bg-transparent border-bottom text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							<h2 className="text-start text-white">Species</h2>
						</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div className="accordion-body text-white">
							<div className="row">
								{
									store.species?.map(el => <StarwarsCard key={el.uid} type={'species'} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/species/${el.uid}.jpg`} />)
								}
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item bg-transparent  text-white">
					<h2 className="accordion-header">
						<button className="accordion-button bg-transparent border-bottom text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							<h2 className="text-start text-white">Planets</h2>
						</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div className="accordion-body text-white">
							<div className="row">
								{
									store.planets?.map(el => <StarwarsCard key={el.uid} type={'planets'} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`} />)
								}
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item bg-transparent  text-white">
					<h2 className="accordion-header">
						<button className="accordion-button bg-transparent border-bottom text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
							<h2 className="text-start text-white">Starships</h2>
						</button>
					</h2>
					<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div className="accordion-body text-white">
							<div className="row">
								{
									store.starships?.map(el => <StarwarsCard key={el.uid} type={'starships'} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/starships/${el.uid}.jpg`} />)
								}
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item bg-transparent  text-white">
					<h2 className="accordion-header">
						<button className="accordion-button bg-transparent border-bottom text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
							<h2 className="text-start text-white">vehicles</h2>
						</button>
					</h2>
					<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div className="accordion-body text-white">
							<div className="row">
								{
									store.vehicles?.map(el => <StarwarsCard key={el.uid} type={'vehicles'} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/vehicles/${el.uid}.jpg`} />)
								}
							</div>
						</div>
					</div>
				</div>
		
			</div>



		</div>


	);
}
