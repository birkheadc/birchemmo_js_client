import * as React from 'react';
import Credentials from '../../../../types/Credentials';
import WorkingWrapper from '../../../shared/workingWrapper/WorkingWrapper';
import './LoginForm.css'

interface ILoginFormProps {
  submit: (credentials: Credentials) => void
}

function LoginForm(props: ILoginFormProps): JSX.Element {

  const handleSubmit = () => {
    props.submit({ username: 'Colby', password: 'passw0rd' });
  }

  return (
    <>
      <h1>Test</h1>
      <button onClick={handleSubmit} type='button'>Click</button>
    </>
  );
}

export default LoginForm;