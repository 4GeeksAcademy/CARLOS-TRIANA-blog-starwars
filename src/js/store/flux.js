const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			url: 'https://www.swapi.tech/api/',
			favorites: []
			
		},
		actions: {
			getData: async (type) => {
				try {
					const respuesta = await fetch(`${getStore().url}/${type}`);
					if (!respuesta.ok) throw new Error('error al obtener los datos');
					const data = await respuesta.json();
					setStore({[type]: data.results});
				} catch (error) {
					console.error(error);
				}
			},

			getOne: async (type , uid) => {
				try {
					const respuesta = await fetch(`${getStore().url}/${type}/${uid}`);
					if (!respuesta.ok) throw new Error('error al obtener datalles');
					const data = await respuesta.json();
					setStore({detailed: data.result});
				} catch (error) {
					console.error(error);
				}
			},

			addRemoveFavorites: (favorites) => {
				const store = getStore();
				const isFavorite = store.favorites.some(el=> el.uid === favorites.uid && el.type === favorites.type);
				if (isFavorite)  {
                    setStore({
						favorites: store.favorites.filter(el=> !(el.uid === favorites.uid && el.type === favorites.type))
					})
				} else {
				setStore({favorites: [...store.favorites, favorites]})
				}
			}
		}
	};
};

export default getState;
