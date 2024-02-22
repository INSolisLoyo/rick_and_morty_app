import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {

   const [ id, setId ] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={style.container}>
         <input type='search' onChange={handleChange} className={style.inp} />
         <button onClick={
            () => {
               props.onSearch(id);
            }
         } className={style.btn}>Agregar</button>
      </div>
   );
}
