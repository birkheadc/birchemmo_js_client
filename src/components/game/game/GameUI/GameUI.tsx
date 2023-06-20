import * as React from 'react';
import './GameUI.css'
import IGameState from '../GameState/IGameState';
import { HubConnection } from '@microsoft/signalr';
import { ToServer } from '../../../../types/message/ToServer';
import { FromServer } from '../../../../types/message/FromServer';

interface IGameUIProps {
  gameState: IGameState,
  connection: HubConnection
}

/**
*
* @returns {JSX.Element | null}
*/
export default function GameUI(props: IGameUIProps): JSX.Element | null {

  const connection = props.connection;

  const handlePing = () => {
    connection.on(FromServer.RETURN_PING, () => {
      console.log("Ping was returned!");
    });
    console.log('Pinged...');
    connection.send(ToServer.PING);
  }

  return (
    <div>
      Game UI
      Game UI
      GAME UI
      <button onClick={handlePing} >Ping</button>
    </div>
  );
}