import * as React from 'react';
import './Game.css'
import { HubConnection } from '@microsoft/signalr';
import { FromServer } from '../../../types/message/FromServer';
import { ToServer } from '../../../types/message/ToServer';
import IGameState from './GameState/IGameState';
import GameState from './GameState/GameState';
import GameUI from './GameUI/GameUI';
import GameView from './GameView/GameView';
import IPawnsState from './GameState/PawnsState/IPawnsState';

interface IGameProps {
  connection: HubConnection
}

/**
* The element that controls the actual game.
* @param {HubConnection} props.connection The connection to the game hub on the server. Should already be open, active, and session token confirmed.
* @returns {JSX.Element | null}
*/
export default function Game(props: IGameProps): JSX.Element | null {

  const connection = props.connection;

  const [gameState, setGameState] = React.useState<IGameState>(new GameState());

  React.useEffect(function requestPawnsOnMount() {
    connection.on(FromServer.SEND_PAWNS_STATE, (pawnsState: IPawnsState) => {
      const newState = new GameState();
      newState.copyState(gameState);
      newState.setPawnsState(pawnsState);
      setGameState(newState);
    });
    connection.send(ToServer.REQUEST_PAWNS_STATE);
  }, []);

  return (
    <div className='game-wrapper'>
      <div className='game-wrapper-section'>
        <GameUI connection={connection} gameState={gameState} />
      </div>
      <div className='game-wrapper-section'>
        <GameView />
      </div>
    </div>
  );
}