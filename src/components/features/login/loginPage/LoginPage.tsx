import * as React from 'react';
import ApiResult from '../../../../types/apiResult/ApiResult';
import Credentials from '../../../../types/credentials/Credentials';
import SessionToken from '../../../../types/sessionToken/SessionToken';
import WorkingWrapper from '../../../shared/workingWrapper/WorkingWrapper';
import LoginForm from '../loginForm/LoginForm';
import './LoginPage.css'

interface ILoginPageProps {
  login: (credentials: Credentials) => Promise<ApiResult<SessionToken>>
}

function LoginPage(props: ILoginPageProps): JSX.Element {

  const [isWorking, setWorking] = React.useState(false);

  const login = async (credentials: Credentials) => {
    console.log('Login with: ', credentials);
    setWorking(true);
    await props.login(credentials);
    
  }

  return (
    <div className='full-page'>
      <h1>Birche Online</h1>
      <WorkingWrapper isWorking={isWorking} >
        
        <LoginForm submit={login} /> 
      </WorkingWrapper>
    </div>
  );
}

export default LoginPage;