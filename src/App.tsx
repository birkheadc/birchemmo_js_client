import * as React from 'react';
import { ServicesContainer } from './api/servicesContainer/servicesContainer';
import SessionApi from './api/sessionApi';
import './App.css'
import LoginPage from './components/features/login/loginPage/LoginPage';

import './styles/reset.css';
import './styles/shared.css';
import './styles/vars.css';

interface IAppProps {
  
}

/**
 * Runs the application.
 * 
 * @returns {JSX.Element}
 */
function App(props: IAppProps): JSX.Element {
  return (
    <div id='client-wrapper'>
      <LoginPage login={SessionApi.login} />
    </div>
  );
}

export default App;