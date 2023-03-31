import * as React from 'react';
import Credentials from '../../../../types/Credentials';
import WorkingWrapper from '../../../shared/workingWrapper/WorkingWrapper';
import LoginForm from '../loginForm/LoginForm';
import './LoginPage.css'

interface ILoginPageProps {

}

function LoginPage(props: ILoginPageProps): JSX.Element {

  const [isWorking, setWorking] = React.useState(false);

  const login = (credentials: Credentials) => {
    console.log('Login with: ', credentials);
    setWorking(true);
  }

  return (
    <div className='full-page'>
      <WorkingWrapper isWorking={isWorking} >
        <LoginForm submit={login} /> 
      </WorkingWrapper>
    </div>
  );
}

export default LoginPage;