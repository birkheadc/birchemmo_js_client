import * as React from 'react';
import ApiResult from '../../../../types/apiResult/ApiResult';
import Credentials from '../../../../types/credentials/Credentials';
import SessionToken from '../../../../types/sessionToken/SessionToken';
import ApiResultDisplay from '../../../shared/apiResultDisplay/ApiResultDisplay';
import WorkingWrapper from '../../../shared/workingWrapper/WorkingWrapper';
import LoginForm from '../loginForm/LoginForm';
import './LoginPage.css'

interface ILoginPageProps {
  login: (credentials: Credentials) => Promise<ApiResult<SessionToken>>
}

/**
 * Shows the login page for the game.
 * @param {(credentials: Credentials) => Promise<ApiResult<SessionToken>>} props.login - The function to be called when logging in.
 * @returns {JSX.Element}
 */
function LoginPage(props: ILoginPageProps): JSX.Element {

  const [isWorking, setWorking] = React.useState(false);
  const [result, setResult] = React.useState<ApiResult<SessionToken> | null>(null);

  const login = async (credentials: Credentials) => {
    console.log('Login with: ', credentials);
    setWorking(true);
    const result = await props.login(credentials);
    setResult(result);
    setWorking(false);
  }

  return (
    <div className='full-page'>
      <h1>Birche Online</h1>
      <WorkingWrapper isWorking={isWorking} >
        <div className='centered'><ApiResultDisplay apiResult={result} /></div>
        <LoginForm submit={login} /> 
      </WorkingWrapper>
    </div>
  );
}

export default LoginPage;