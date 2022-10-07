import React, { useState, useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import API from "../../utils/API"
import playableCharacters from '../../data/Characters'
import { UserContext } from '../../context/UserContext';
import { Link } from "react-router-dom";
import PlayerContext from '../../utils/PlayerContext';
import "../../pages/Home/style.css";

function CharSelection(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['character']);
    const [character, setCharacter] = useState(null);
    const [user] = useContext(UserContext)
    let playerObject;

    const charSelect = (name) => {
        for (let i = 0; i < playableCharacters.length; i++) {
            if (name === playableCharacters[i].name)
                playerObject = playableCharacters[i]
        }
        // playerObject.player_id = /* USERNAME COOKIE ID OR WHATEVER */
        removeCookie("character");
        setCookie('character', playerObject, { path: '/' });
        setCharacter(playerObject)
        // console.log(playerObject);
    }

    const setStartState = () => {
        console.log(character)
        if (character === undefined) {
            console.log("Pick a character first")
            alert("Pick a character before your continue");
            //Modal or alert that tells you to pick a character first
        } else {
            console.log("You chose: " + character.name)
            //save to MongoDB and then switch to game page
        }
    }

    // function handleCharcterSelection(event) {
    //     event.preventDefault();
    //     const { charcter, value } = event.target;
    //     set
    // }

    return (
        <div className="container">
            <div className="row center-align">
                <h4 style={{ marginTop: 30 + "px" }}>CHOOSE YOUR CHARACTER</h4>
            </div>
            <div  style={{marginLeft: 0}} className="row center-align">
                {playableCharacters.map(el =>
                    <button className="char-select col s5ths s2" key={el.name} id={el.name} onClick={() => {
                        console.log(el.name);
                        charSelect(el.name)
                    }}>
                        <img style={{ paddingTop: 15 + "px" }} src={el.image} alt={el.name} className="player-pic" />
                        {/* <h4>{el.name}</h4> */}
                        <h4 className="player-job" style={{ color: "goldenrod" }}>{el.occupation}</h4>
                        <p className="event-text">HP: {el.hp}</p>
                        <p className="event-text">Money: {el.money}</p>
                        <p className="event-text">Fuel: {el.fuel}</p>
                        <p className="event-text">Food: {el.food}</p>
                    </button>
                )}
            </div>
            <div className="row center-align">
            <Link to={"/game"}>                <button className="continue-btn" onClick={() => { setStartState() }}><h4>CONTINUE</h4></button></Link>
            </div>
        </div>
    );
}

export default CharSelection;