import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';

function Card(props) {
   const { id, name, gender, species, image, status, origin, onClose, addFav, removeFav, myFavorites } = props;

   const [ isFav, setIsFav ] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav)
   }

   return (
      <div className={style.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => onClose(id)} className={style.btn}>X</button>
         <img src={image} alt='personaje' className={style.img} />
         <Link to={`/detail/${id}`}>
            <p>{name}</p>
         </Link>
         <p>{status}</p>
         <p>{species}</p>
         <p>{gender}</p>
         <p>{origin.name}</p>       
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect( mapStateToProps, mapDispatchToProps)(Card);
