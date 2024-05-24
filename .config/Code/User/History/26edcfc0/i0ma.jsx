import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './Detail.modules.css'
import Card from "../Card/Card";
import axios from "axios";


const Detail = () => {

    const [character, setCharacter] = useState({});
    const [infoCharged, setIsInfoCharged] = useState(false);

    const { id } = useParams();

    useEffect(() => {

        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
                setIsInfoCharged(true);
            } else {
                console.log('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, []);

    return (
        <div>
            <img className="detail-background" src="https://wallpapercave.com/wp/wp6358805.png"></img>
            <div className="spacer"></div>
            <div className="flex-info">
                <div className="detail-card">
                    <Card 
                        id={character.id}
                        name={character.name}
                        onClose={null}
                        image={character.image}
                        gender={character.gender}>

                    </Card>
                </div>

                <div className={`aditional-info ${infoCharged ? "infoCharged" : ""}`}>
                    <h2>CHARCTER DETAIL</h2>
                    <h2>Name: {character.name}</h2>
                    <h2>Status: {character.status}</h2>
                    <h2>Specie: {character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Origin: {character.origin?.name}</h2>
                    <h2>Location: {character.location?.name}</h2>
                    

                </div>

            </div>

        </div>
    );
}

export default Detail;