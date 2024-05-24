import LinkButton from "../linkbutton/LinkButton";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import './Nav.modules.css';

const Nav = ({ onSearch }) => {

    const navigate = useNavigate();

    const generateRandomId = () => {
        const num = Math.floor(Math.random() * 826) + 1;
        onSearch(num);
    };

    const performLogout = () => {
        localStorage.clear();
        console.log("LOGOUT CLICK " + localStorage.getItem('access'));
        navigate('/login');
    }

    const style={
        "--content": "'Log Out'"
    }

    return (
        <div className="nav" >
            <div className="logo-container">
                <div className="logo"></div>
            </div>

            <div className="navRouteIndex">
                
                    <LinkButton link={'/home'} text='Home' />

                    <LinkButton link={'/favorites'} text='Favorites' />
                
                    <LinkButton link={'/about'} text='About' />
                
            </div>

            <div className="navSearchbar">
                <div className="searchBar">
                    <SearchBar onSearch={onSearch} />
                </div>
                <div className="rand-button-container">
                   
                        <button className="random-button" onClick={generateRandomId}>?</button>
        
                </div>
            </div>

            <div className="logout-container">
                <button style={style} className="logout-button" onClick={performLogout}>
                <div className="fill"></div>
                    Log Out
                </button>
            </div>

        </div>
    );
}

export default Nav