import Cards from "../Cards/Cards";
import { orderCards, filterCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

import './Favorites.modules.css';


const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleChange = (event) => {

        //console.log(event.target);
        if (event.target.name === 'filter') {
            dispatch(filterCards(event.target.value));
        }
        else {
            setAux(!aux);
            dispatch(orderCards(event.target.value));
            // console.log(event.target);
        }

    }


    return (
        <div>
            <div className="select">
                <div className="op-1">
                    <select name="order" onChange={handleChange}>
                        <option value="A">Acendente</option>
                        <option value="D">Decendente</option>
                    </select>

                </div>
                <div className="op-2">
                    <select name="filter" onChange={handleChange}>
                        <option value="All">All Characters</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>

                    </select>

                </div>

            </div>

            <div className="spacer"></div>
            <Cards characters={myFavorites} />
        </div>

    );

}

export default Favorites


