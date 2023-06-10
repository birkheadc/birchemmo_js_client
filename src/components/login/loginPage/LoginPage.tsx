import * as React from 'react';
import ApiResultDisplay from '../../shared/apiResultDisplay/ApiResultDisplay';
import ProcessingWrapper from '../../shared/processingWrapper/ProcessingWrapper';
import LoginForm from '../loginForm/LoginForm';
import './LoginPage.css'
import AuthenticationService from '../../../api/authentication/authenticationService';
import { ICredentials } from '../../../types/credentials/Credentials';
import { ISessionToken } from '../../../types/sessionToken/SessionToken';
import { IApiResult } from '../../../types/apiResult/ApiResult';

interface ILoginPageProps {
  authenticationService: AuthenticationService,
  login: (token: ISessionToken) => void
}

/**
 * Shows the login page for the game.
* @param {AuthenticationService} props.authenticationService The service to use to request a session token upon login.
* @returns {JSX.Element}
 */
function LoginPage(props: ILoginPageProps): JSX.Element {

  const [isProcessing, setProcessing] = React.useState(false);
  const [result, setResult] = React.useState<IApiResult<ISessionToken> | null>(null);

  React.useEffect(function loginWhenResultChangeIfSuccess() {
    if (result && result.isSuccess && result.data) {
      props.login(result.data);
    }
  }, [ result ]);

  const login = async (credentials: ICredentials) => {
    setProcessing(true);
    const result = await props.authenticationService.login(credentials);
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