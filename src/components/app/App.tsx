import * as React from 'react';

import '../../styles/reset.css';
import '../../styles/shared.css';
import '../../styles/vars.css';

import { Config } from '../../types/config/config';
import LoginPage from '../login/loginPage/LoginPage';
import GamePage from '../game/gamePage/GamePage';

interface IMainProps {
  config: Config,
}

enum ClientPage {
  LOGIN,
  GAME
}

/**
* Runs the application.
* @param {Config} props.config The config object that contains many details on how to run the application.
* @returns {JSX.Element | null}
*/
export default function Main(props: IMainProps): JSX.Element | null {
  const [page, setPage] = React.useState<ClientPage>(ClientPage.LOGIN);
  const [sessionToken, setSessionToken] = React.useState<string | null>(null);

  React.useEffect(function changeToGamePageWhenSessionToken() {
    if (sessionToken) setPage(ClientPage.GAME);
  }, [ sessionToken ]);

  const handleLogin = (token: string) => {
    setSessionToken(token);
  }

  const pageMap: Record<ClientPage, JSX.Element | null> = {
    [ClientPage.LOGIN]: <LoginPage authenticationConfig={props.config.authentication} login={handleLogin} />,
    [ClientPage.GAME]: sessionToken == null ? null : <GamePage gameConfig={props.config.game} sessionToken={sessionToken} />
  };

  return (
    <div id='client-wrapper'>
      {pageMap[page]}
    </div>
  );
}