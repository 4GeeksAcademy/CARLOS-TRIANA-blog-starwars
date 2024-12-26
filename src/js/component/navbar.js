import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	const favoritesCount = store.favorites.length;
	

	return (
		<>
			<nav className="container-fluid navbar navbar-light bg-black text-white d-flex justify-content-around border-bottom">
				<div className="d-flex">
					<i className="fa-brands fa-tiktok py-1 mx-1"></i>
					<i className="fa-brands fa-instagram py-1 mx-1"></i>
					<i className="fa-brands fa-x-twitter py-1 mx-1"></i>
					<i className="fa-brands fa-facebook py-1 mx-1"></i>
					<i className="fa-brands fa-youtube py-1 mx-1"></i>
					<p className="m-0 ms-4 rounded bg-white text-dark">KIDS</p>
				</div>
				<div className="d-flex justify-content-center">
					<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" className="d-block w-50 my-3" alt="..." />
				</div>
				<div className="mx-5">
					<div className="dropdown">
						<button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							favoritos<span className="badge text-bg-secondary bg-danger ms-3">{favoritesCount}</span>
						</button>
						<ul className="dropdown-menu bg-dark text-white mt-2">
							{store.favorites.length > 0 ? (
								store.favorites.map((favorite, index) => (
									<li key={index}>
										<Link to={`/details/${favorite.type}/${favorite.uid}`} className="dropdown-item text-white">
											{favorite.name}
										</Link>
									</li>
								))
							) : (
								<li>
									<span className="dropdown-item text-white">No favorites</span>
								</li>
							)}
						</ul>
					</div>
				</div>
			</nav>

		</>
	);
};
