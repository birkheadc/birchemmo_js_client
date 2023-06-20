import * as React from 'react';
import './GamePage.css'
import { ISessionToken } from '../../../types/sessionToken/SessionToken';
import { AuthenticationConfig, GameConfig } from '../../../types/config/config';
import { HubConnection, HubConnectionBuilder, MessageHeaders } from '@microsoft/signalr';
import { ToServer } from '../../../types/message/ToServer';
import { FromServer } from '../../../types/message/FromServer';
import Game from '../game/Game';

enum ConnectionStatus {
  INITIAL = "Waiting",
  CONNECTING = "Connecting...",
  CONNECTED = "Connected!",
  ERROR = "Failed to connect to server."
}

interface IGamePageProps {
  sessionToken: string,
  gameConfig: GameConfig
}

/**
* The page that displays the game.
* @param {string} props.sessionToken The session token for the current user, assumed to be validated.
* @param {GameConfig} props.gameConfig How the game should be configured.
* @returns {JSX.Element | null}
*/
export default function GamePage(props: IGamePageProps): JSX.Element | null {

  const [connection, setConnection] = React.useState<HubConnection | null>(null);

  const [status, setStatus] = React.useState<ConnectionStatus>(ConnectionStatus.INITIAL);

  React.useEffect(function connectToAuthenticationServerOnMount() {
    setStatus(ConnectionStatus.CONNECTING);
    console.log(`Sending token: ${props.sessionToken}`);
    const newConnection: HubConnection = new HubConnectionBuilder()
      .withUrl(props.gameConfig.serverUrl, { accessTokenFactory: () => props.sessionToken })
      .withAutomaticReconnect()
      .build();
    setConnection(newConnection);
  }, [ props.sessionToken, props.gameConfig ]);

  React.useEffect(function authenticateConnection() {
    if (connection == null) return;
    connection.start()
      .then(() => {
        setStatus(ConnectionStatus.CONNECTED);
      })
      .catch((error) => {
        setStatus(ConnectionStatus.ERROR);
        console.log(`Error connecting to server: ${error}`);
      })
  }, [ connection ]);

  return (
    <div className='full-page'>
      <h1>GAME</h1>
      <span>{ status }</span>
      { connection != null && status == ConnectionStatus.CONNECTED ? <Game connection={connection} /> : null }
    </div>
  );
}