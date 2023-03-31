import * as React from 'react';
import './App.css'
import LoginPage from './components/features/login/loginPage/LoginPage';

interface IAppProps {

}

function App(props: IAppProps): JSX.Element {
  return (
    <div id='client-wrapper'>
      <LoginPage />
    </div>
  );
}

export default App;