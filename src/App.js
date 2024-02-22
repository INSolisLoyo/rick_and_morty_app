import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


function App() {

   let [characters, setCharacters] = useState([]);
   let { pathname } = useLocation();
   const navigate = useNavigate();
   const [ access, setAccess ] = useState();
   const EMAIL = 'mimisolisloyo@gmail.com';
   const PASSWORD = 'Cacapopo4'

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
         ({ data }) => {
            const char = characters?.find( e => e.id === data.id)
            if(char) {
               alert('Already in the list!')
            }
            else if(data.id !==undefined){
               setCharacters(characters => [
                  ...characters,
                  data
               ])
            }
            else {
               alert('Character not found')
            }
         }
      );
   }

   const onClose = (id) => {
      setCharacters((oldChars) => oldChars.filter((character) => character.id !== Number(id)));
   };

   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } 
   }
   

   return (
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         
            { pathname !== '/' && <Nav onSearch={onSearch} />}
            
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />         
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>

      </div>
   );
}

export default App;
