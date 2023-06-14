import * as React from 'react';
import './Game.css'
import { HubConnection } from '@microsoft/signalr';
import { FromServer } from '../../../types/message/FromServer';
import { ToServer } from '../../../types/message/ToServer';
import IGameState from './GameState/IGameState';
import GameState from './GameState/GameState';
import IPawn from './GameState/Pawn/IPawn';

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
    connection.on(FromServer.SEND_OWNED_PAWNS, (pawns: IPawn[], currentPawn: number | null) => {
      const newState = new GameState();
      newState.copyState(gameState);
      newState.setPawns(pawns);
      newState.setCurrentPawn(currentPawn);
      setGameState(newState);
    });
    connection.send(ToServer.REQUEST_OWNED_PAWNS);
  }, []);

  return (
    <div className='world-wrapper'>
      Number of pawns: { gameState.pawns.length }
    </div>
  );
}