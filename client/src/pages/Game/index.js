import React, { useState, useEffect, useRef } from 'react'
import Row from '../../components/Row'
import PlayerCol from '../../components/PlayerCol'
import GameCol from '../../components/GameCol'
import InventoryCol from '../../components/InventoryCol'
import PlayerContext from '../../utils/PlayerContext'
import StoryContext from '../../utils/StoryContext'
import GameStory from '../../data/GameStory'
import useableItems from '../../data/useableItems'
import playableCharacters from '../../data/Characters'
import { useCookies } from 'react-cookie'

for (let i = 0; i < GameStory.length; i++) {
  console.log(i + ' - ' + GameStory[i].id)
}

function Game() {
  // The code below is intended to load the player's state from MongoDB and then set that as the view state.
  // Eventually, if you die or win it loads a new storyState and you can choose a new character by clicking and option that
  // takes you to the character selection menu

  // const setGameState = () => {
  //If Logged in = true
  //GET player profile where token equal player_id
  //playerProfile = player file that was retrieved
  //setPlayerState(playerProfile)

  // for (let i =0; i < GameStory.length; i++){
  //     if (playerProfile.state === GameStory[i].id){
  //         setStoryState(GameStory[i])
  //     }
  // }
  // }

  // let playerProfile;

  const [storyState, setStoryState] = useState(GameStory[0])
  // console.log(storyState.text)
  const [cookies, setCookie] = useCookies(['character'])
  const [playerState, setPlayerState] = useState(cookies.character)
  const audioPlayer = useRef(null)
  const [progress, setProgress] = useState(80)
  const [isPlay, setPlay] = useState(true)
  // const [playerState, setPlayerState] = useState(playerProfile);
  // console.log(storyState.text);
  // const { hp,
  //     money,
  //     horse,
  //     occupation,
  //     food,
  //     image } = cookies.character;
  // const getProgress = (state_id) => {
  //     let progressPercent = 0;
  //     progressPercent = Math.round(GameStory.length / GameStory.indexOf(state_id));
  //     console.log(progressPercent);
  //     return progressPercent;
  // }

  const fetchState = (nextText) =>
    GameStory.filter((instance) => nextText === instance.id)[0]

  const actions = (actions, nextText) => {
    let player = playerState
    let health = playerState.hp
    let food = playerState.food
    let horse = playerState.horse
    let money = playerState.money
    let inventoryArr = playerState.inventory
    let stateNum = storyState.id
    console.log(stateNum)
    for (let i = 0; i < actions.length; i++) {
      const action = actions[i]
      console.log('actionnnn', action)
      switch (action) {
        case 1:
          if (inventoryArr.filter((e) => e.item_id === 0).length === 0) {
            inventoryArr = playerState.inventory.concat([useableItems[0]])
          }
          break
        case 2:
          if (inventoryArr.filter((e) => e.item_id === 1).length === 0) {
            inventoryArr = playerState.inventory.concat([useableItems[1]])
          }
          break
        case 3:
          if (inventoryArr.filter((e) => e.item_id === 2).length === 0) {
            inventoryArr = playerState.inventory.concat([useableItems[2]])
          }
          break
        case 4:
          if (inventoryArr.filter((e) => e.item_id === 3).length === 0) {
            inventoryArr = playerState.inventory.concat([useableItems[3]])
          }
          break
        case 5:
          console.log(playerState.inventory)
          if (inventoryArr.filter((e) => e.item_id === 4).length === 0) {
            // console.log(playerState.inventory)
            inventoryArr = playerState.inventory.concat([useableItems[4]])
          }
          break
        case 6:
          if (inventoryArr.filter((e) => e.item_id === 5).length === 0) {
            inventoryArr = playerState.inventory.concat([useableItems[4]])
          }
          break
        case 7:
          food = food - 15
          break
        case 8:
          food = food - 5
          break
        case 9:
          food = food + 10
          break
        case 10:
          food = food + 4
          break
        case 11:
          food = food + 5
          break
        case 12:
          // horse = horse - 1;
          console.log(playerState.inventory)
          if (inventoryArr.filter((e) => e.item_id === 1).length === 0) {
            inventoryArr = playerState.inventory.concat([useableItems[1]])
          }
          break
        case 13:
          horse = horse + 1
          break
        case 14:
          horse = horse + 1
          break
        case 15:
          health = health - 10
          break
        case 16:
          health = health - 15
          break
        case 17:
          health = health - 5
          break
        case 18:
          health = health + 1
          break
        case 19:
          health = health + 10
          break
        case 20:
          health = health + 5
          break
        case 21:
          money = money + 10
          break
        case 22:
          money = money + 20
          break
        case 23:
          money = money + 25
          break
        case 24:
          money = money + 5
          break
        case 25:
          money = money - 5
          break
        case 26:
          money = money - 10
          break
        case 27:
          money = money - 15
          break
        case 28:
          money = money - 20
          break
        case 29:
          money = money - 25
          break
        case 30:
          money = money - 50
          break
        case 31:
          food = food + 10
          break
        case 32:
          horse = horse + 2
          break
        case 33:
          player = playableCharacters.filter(
            (character) => character.name === playerState.name
          )[0]
          health = player.hp
          money = player.money
          food = player.food
          horse = player.horse
          inventoryArr = []
          break
        case 34:
          //Removes Axe
          inventoryArr.splice(inventoryArr.map((x) => x.item_id).indexOf(0), 1)
          break
        case 35:
          //Removes Dog
          inventoryArr.splice(inventoryArr.map((x) => x.item_id).indexOf(1), 1)
          break
        case 36:
          //Removes Flashlight
          inventoryArr.splice(inventoryArr.map((x) => x.item_id).indexOf(2), 1)
          break
        case 37:
          //Removes Gun
          inventoryArr.splice(inventoryArr.map((x) => x.item_id).indexOf(3), 1)
          break
        case 38:
          //Removes Bone
          inventoryArr.splice(inventoryArr.map((x) => x.item_id).indexOf(4), 1)
          break
        case 39:
          //Removes Medicine
          inventoryArr.splice(inventoryArr.map((x) => x.item_id).indexOf(4), 1)
          break
        case 40:
          //Removes Medicine and Gains HP
          health = health + 50
          inventoryArr.splice(inventoryArr.map((x) => x.item_id).indexOf(4), 1)
        default:
          break
      }
    }
    // console.log(fuel);
    // console.log(money);

    if (health <= 0) {
      setPlayerState({
        ...playerState,
        food: food,
        hp: health,
        inventory: inventoryArr,
        money: money,
        horse: horse,
        state: stateNum,
      })
      setStoryState(GameStory[80])
      return
    } else if (horse <= 0) {
      console.log(player)
      setPlayerState({
        ...playerState,
        food: food,
        hp: health,
        inventory: inventoryArr,
        money: money,
        horse: horse,
        state: stateNum,
      })
      setStoryState(GameStory[81])
      return
    } else if (food <= 0) {
      setPlayerState({
        ...playerState,
        food: food,
        hp: health,
        inventory: inventoryArr,
        money: money,
        horse: horse,
        state: stateNum,
      })
      setStoryState(GameStory[82])
      return
    } else {
      let storyStatus = fetchState(nextText)
      setStoryState(storyStatus)
    }
    setPlayerState({
      ...playerState,
      food: food,
      hp: health,
      inventory: inventoryArr,
      money: money,
      horse: horse,
      state: stateNum,
    })
  }

  useEffect(() => {
    console.log(progress, audioPlayer.current.duration)
  }, [progress])

  const toggleAudio = () => {
    if (isPlay) {
      audioPlayer.current.play()
      setPlay(false)
    } else {
      audioPlayer.current.pause()
      setPlay(true)
    }
  }

  return (
    <div>
      <StoryContext.Provider value={storyState}>
        <PlayerContext.Provider value={playerState}>
          <Row>
            <PlayerCol />
            <GameCol actionMethod={actions} storyState={setStoryState} />
            <InventoryCol actionMethod={actions} />
          </Row>
          <div>
            <div className="audio">
              <div className="player">
                <div className="play-indicator" onClick={toggleAudio}>
                  <b>{isPlay ? '▶' : '▮▮'}</b>
                </div>
              </div>
              {/* <div className="progress">
          <div className="loading" style={{ width: `${progress}%` }} />
        </div> */}
            </div>
            <audio
              src="https://res.cloudinary.com/https-pilot-tune-herokuapp-com/video/upload/v1668096891/Christ_The_Lord_Has_Risen_Today_seyctu.mp3"
              ref={audioPlayer}
              onTimeUpdate={(e) => {
                setProgress(
                  (audioPlayer.current.currentTime * 100) /
                    audioPlayer.current.duration
                )
              }}
            />
          </div>
        </PlayerContext.Provider>
      </StoryContext.Provider>
    </div>
  )
}

export default Game
