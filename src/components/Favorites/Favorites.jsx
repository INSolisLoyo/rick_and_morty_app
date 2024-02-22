import { connect } from "react-redux";
import Card from "../Card/Card";
import style from './Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {

    const [ aux, setAux ] = useState(false)

    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>My Favorites</h1> 
                <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknow</option>
                </select>
            </div>

            {
                myFavorites?.map( personaje =>    
                        <Card 
                            id= {personaje.id}
                            name={personaje.name} 
                            status={personaje.status}
                            species={personaje.species}
                            gender={personaje.gender}
                            origin={personaje.origin}
                            image={personaje.image}
                            onClose={personaje.onClose}
                        />                   
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
} 

export default connect(mapStateToProps, null)(Favorites);