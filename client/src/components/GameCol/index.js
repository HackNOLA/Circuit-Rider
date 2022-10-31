// @ts-nocheck
import React, { useContext, useState } from "react";
import Typist from "react-typist";
import StoryContext from "../../utils/StoryContext";
import PlayerContext from "../../utils/PlayerContext";

function GameCol(props) {
    const { image, title, text, options, progress, id } = useContext(StoryContext);
    const { inventory, money } = useContext(PlayerContext);
    const [showTyping, setShowTyping] = useState(0);

    let stateId = id;
    // let id2 = 0;
    const [typistCheckBool, setTypistCheckBool] = useState(false);


    const typistCheck = (state_id) => {
        // id2 = state_id
        if (state_id === stateId) {
            setTypistCheckBool(true);
            setShowTyping(showTyping + 1)
        } else {
            setTypistCheckBool(false);
            setShowTyping(showTyping + 1)
        }
        console.log("StateID: " + stateId)
        console.log("NextText: " + state_id)
        console.log("BoolCheck: " + typistCheckBool)
    }

    const pageWithTypist = (
        <>
            <p className="event-text" style={{ fontFamily: 'Arcade', textTransform: 'initial' }}>{text}</p>
            {options.map(opt => {
                return <button className="option-button" key={opt.text} onClick={() => { props.actionMethod(opt.action, opt.nextText); typistCheck(opt.nextText); }}>{opt.text}</button>
            }
            )}
        </>
    )

    const pageWithoutTypist = (
        <>
            <p className="event-text" style={{ fontFamily: 'Arcade', textTransform: 'initial' }}>{text}</p>
            {options.map(opt => {
                if (!opt.showIfInventoryHas) {
                    if (!opt.cost) {
                        if (!opt.hideIfAlreadyHas) {
                            return <button className="option-button" key={opt.text} onClick={() => { props.actionMethod(opt.action, opt.nextText); typistCheck(opt.nextText); }}>{opt.text}</button>
                        }
                    }
                    else if (inventory.map((x) => x.item_id).indexOf(opt.hideIfAlreadyHas) >= 0) {
                        return;
                    } else if (money >= opt.cost) {
                        return <button className="option-button" key={opt.text} onClick={() => { props.actionMethod(opt.action, opt.nextText); typistCheck(opt.nextText); }}>{opt.text}</button>
                    }
                }
                else if (inventory.map((x) => x.item_id).indexOf(opt.showIfInventoryHas) > -1) {
                    if (!opt.cost) {
                    } else if (money >= opt.cost) {
                        return <button className="option-button" key={opt.text} onClick={() => { props.actionMethod(opt.action, opt.nextText); typistCheck(opt.nextText); }}>{opt.text}</button>
                    }
                }
            }
            )}
        </>
    )

    // const Switch = () => {
    //     props.storyState({ text: text, options: options })
    // }

    // function useForceUpdate() {
    //     const [value, setValue] = useState(0); // integer state
    //     return () => setValue(value => ++value); // update the state to force render
    // }

    // function updateText() {
    //     this.setStory({ text: text })
    // }
    return (
        <div className="col s6 game-col">
            <div className="event-image">
                <img className="event-img-file" src={image} alt="event-x" />
            </div>
            <div className="progress">
                <div className="determinate" style={{ width: progress + "%" }}></div>
            </div>
            <div className="text-window">
                <p className="event-text" style={{ color: "gold" }}>{title}</p>

                {typistCheckBool ? pageWithoutTypist : pageWithTypist}
            </div>
        </div >
    );
}

export default GameCol;
