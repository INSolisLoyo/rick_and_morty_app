import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards({characters, onClose}) {
   return (
   <div className={style.container}>
      {characters.map((personaje) => {
         return <Card 
         id= {personaje.id}
         name={personaje.name} 
         status={personaje.status}
         species={personaje.species}
         gender={personaje.gender}
         origin={personaje.origin}
         image={personaje.image}
         onClose = {onClose}
         />
      })}
   </div>)
}
