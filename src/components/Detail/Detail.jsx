import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import style from './Detail.module.css'


const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
           ({ data }) => {
              if (data.name) {
                 console.log(data.name);
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

    return (
        <>   
            <h1>Detail</h1>
            { 
                character ? (              
                    <div className={style.main_container}>
                        <div className={style.information_container}>
                            <h2>{character.name}</h2>
                            <p>Status: {character.status}</p>
                            <p>Specie: {character.species}</p>
                            <p>Gender: {character.gender}</p>
                            <p>Origin: {character.origin?.name}</p>
                        </div>
                        
                        <div className={style.image_container}>
                        <img src={character.image} alt='personaje' className={style.img} />
                        </div>
                    </div> )
               : ('')
                
            }
        </>
    )
}

export default Detail;