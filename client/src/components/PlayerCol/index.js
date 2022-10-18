import React, { useContext, useEffect } from 'react';
import PlayerContext from '../../utils/PlayerContext';
import { UserContext } from '../../context/UserContext';
import { useCookies } from 'react-cookie';



function PlayerCol() {
    const [cookies, setCookie] = useCookies(['character']);
    // const { hp, money, horse, name, occupation, food, image } = useContext(PlayerContext);
    const [user] = useContext(UserContext);
    const { hp, money, horse, occupation, food, image } = cookies.character;
    const { username } = cookies.user;

    return (
        <div className="col s2 offset-s1 player-col center-align">
            <div className="player-pic-container">
                <img alt="Profile" className="player-pic" src={image} />
            </div>
            <div className="row">
                <h2 id="player-name" style={{ marginTop: "20px" }}>{username}</h2>
                <h4 className="player-job" style={{ color: "goldenrod" }}>{occupation}</h4>
                <div className="row" id="stat-container" style={{ margin: 0 + "auto" }}>
                    {/* <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 40 + "px" }} alt="HP" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/beatingheart.gif" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="hp-value">{hp}</h5>
                        </div>
                    </div> */}
                </div>
                <div className="row" style={{ margin: 0 + "auto" }}>
                    {/* <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 40 + "px" }} alt="HP" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/spinning-coin-2.gif" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="money-value">{money}</h5>
                        </div>
                    </div> */}
                </div>
                <div className="row" style={{ margin: 0 + "auto" }}>
                    {/* <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 80 + "px"  }} alt="HP" src="https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1665177138/tinywow_horse_6453537_rr0frm.png" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="gas-value">{horse}</h5>
                        </div>
                    </div> */}
                </div>
                <div className="row" style={{ margin: 0 + "auto" }}>
                    {/* <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 40 + "px" }} alt="HP" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/food-icon.png" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="food-value">{food}</h5>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    );
}

export default PlayerCol;