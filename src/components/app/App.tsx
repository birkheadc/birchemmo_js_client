import * as React from 'react';

import '../../styles/reset.css';
import '../../styles/shared.css';
import '../../styles/vars.css';


import AuthenticationService from '../../api/authentication/authenticationService';
import { Config } from '../../types/config/config';
import LoginPage from '../login/loginPage/LoginPage';
import GamePage from '../game/gamePage/GamePage';
import { ISessionToken } from '../../types/sessionToken/SessionToken';

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

  const authenticationService = new AuthenticationService(props.config);

  const [page, setPage] = React.useState<ClientPage>(ClientPage.LOGIN);

  const handleLogin = (token: ISessionToken) => {

  }

  const pageMap: Record<ClientPage, JSX.Element> = {
    [ClientPage.LOGIN]: <LoginPage authenticationService={authenticationService} login={handleLogin} />,
    [ClientPage.GAME]: <GamePage />
  };

  return (
    <div id='client-wrapper'>
      {pageMap[page]}
    </div>
  );
}