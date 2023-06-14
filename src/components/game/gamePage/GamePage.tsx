import * as React from 'react';
import './GamePage.css'
import { ISessionToken } from '../../../types/sessionToken/SessionToken';
import { GameConfig } from '../../../types/config/config';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ToServer } from '../../../types/message/ToServer';
import { FromServer } from '../../../types/message/FromServer';
import Game from '../game/Game';

interface IGamePageProps {
  sessionToken: ISessionToken | null,
  gameConfig: GameConfig
}

/**
* The page that displays the game.
* @param {ISessionToken | null} props.sessionToken The session token for the current user, assumed to be validated.
* @param {GameConfig} props.gameConfig How the game should be configured.
* @returns {JSX.Element | null}
*/
export default function GamePage(props: IGamePageProps): JSX.Element | null {

  const [isSessionConfirmed, setSessionConfirmed] = React.useState<boolean>(false);
  const [connection, setConnection] = React.useState<HubConnection | null>(null);

  React.useEffect(function connectToServerOnMount() {
    const newConnection: HubConnection = new HubConnectionBuilder()
      .withUrl(props.gameConfig.serverUrl)
      .withAutomaticReconnect()
      .build();
    setConnection(newConnection);
  }, []);

  React.useEffect(function setupConnection() {
    if (connection == null) return;
    connection.start()
      .then(() => {
        connection.on(FromServer.REQUEST_SESSION_TOKEN, () => {
          connection.send(ToServer.SEND_SESSION_TOKEN, props.sessionToken);
        });
        connection.on(FromServer.CONFIRM_SESSION_TOKEN, (isValid: boolean) => {
          setSessionConfirmed(isValid);
        })
      })
  }, [ connection ]);

  return (
    <div className='full-page'>
      <h1>GAME</h1>
      <span>{ isSessionConfirmed ? 'Connected!' : 'Connecting...'}</span>
      { connection != null && isSessionConfirmed ? <Game connection={connection} /> : null }
    </div>
  );
}