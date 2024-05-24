/* Componentes a renderizar */
import Nav from '<div className="" />
<components />
<Nav></Nav>/Nav';
import Form from './components/form/Form';
import Cards from './components/cards/Cards';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Favorites from './components/favorites/Favorites';
import Error from './components/error/Error'

/* Hooks */
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector';

/* Dependencias */
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const myFavorites = useSelector((state) => state.myFavorites);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
   
    try {
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;

      setAccess(data);
      
      access && navigate('/home');
    } catch (error) {
      throw Error(error.message);
    }
  }

  useEffect(() => {

    if (!access) {
      navigate('/login');
    }
    else {
      navigate('/home');
    }
  }, []);

  const onSearch = async (id) => {

    try {
      
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`) 

      if (data.name) {
       
        if (!characters.find(char => char.id ==id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          //change the color of shadow box in nav bar
          document.documentElement.style.setProperty('--nav-shadow-status','#00eeff');
        }
      }
    } catch (error) {
      //change the color shadow box in nav bar
      document.documentElement.style.setProperty('--nav-shadow-status','#ff0000');
      throw Error(error.message);
    }
  }

  const onClose = (id) => {

    const filterCharacters = characters.filter((character) => character.id != parseInt(id));
    setCharacters(filterCharacters);
  }

  return (
    <div className='App'>

      {useLocation().pathname !== '/login' ? <Nav onSearch={onSearch} /> : null}

      <Routes>
        <Route path="/home" element={
          <Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites myFavorites={myFavorites} />} />
        <Route path='/login' element={<Form onLogin={login} />} />
        <Route path='/*' element={<Error />} />

      </Routes>

    </div>
  );
}

export default App
