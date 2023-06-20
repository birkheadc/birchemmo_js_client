import * as React from 'react';
import ApiResultDisplay from '../../shared/apiResultDisplay/ApiResultDisplay';
import ProcessingWrapper from '../../shared/processingWrapper/ProcessingWrapper';
import LoginForm from '../loginForm/LoginForm';
import './LoginPage.css'
import { ICredentials } from '../../../types/credentials/Credentials';
import { ISessionToken } from '../../../types/sessionToken/SessionToken';
import { IApiResult } from '../../../types/apiResult/ApiResult';
import { AuthenticationConfig } from '../../../types/config/config';
import authentication from '../../../api/authentication/authentication';

interface ILoginPageProps {
  authenticationConfig: AuthenticationConfig,
  login: (token: string) => void
}

/**
 * Shows the login page for the game.
* @param {AuthenticationConfig} props.authenticationConfig Configuration for authentication.
* @param {(ISessionToken) => void} props.login The function to call after receiving a session token, to signal the app to login.
* @returns {JSX.Element}
 */
function LoginPage(props: ILoginPageProps): JSX.Element {

  const [isProcessing, setProcessing] = React.useState(false);
  const [result, setResult] = React.useState<IApiResult<string | null> | null>(null);

  React.useEffect(function loginWhenResultChangeIfSuccess() {
    if (result && result.isSuccess && result.data) {
      props.login(result.data);
    }
  }, [ result ]);

  const login = async (credentials: ICredentials) => {
    setProcessing(true);
    const result = await authentication.login(props.authenticationConfig, credentials);
    setResult(result);
    setProcessing(false);
  }

  return (
    <div className='full-page'>
      <h1>Birche Online</h1>
      <ProcessingWrapper isProcessing={isProcessing} >
        <div className='centered'><ApiResultDisplay apiResult={result} /></div>
        <LoginForm submit={login} /> 
      </ProcessingWrapper>
    </div>
  );
}

export default LoginPage;