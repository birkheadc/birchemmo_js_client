import * as React from 'react';
import './App.css'
import LoginPage from './components/login/loginPage/LoginPage';

import './styles/reset.css';
import './styles/shared.css';
import './styles/vars.css';
import { Config } from './types/config/config';
import AuthenticationService from './api/authentication/authenticationService';

interface IAppProps {
  config: Config
}

/**
 * Runs the application.
 * @returns {JSX.Element}
 */
function App(props: IAppProps): JSX.Element {

  const authenticationService = new AuthenticationService(props.config);

  return (
    <div id='client-wrapper'>
      <LoginPage authenticationService={authenticationService} />
    </div>
  );
}

export default App;