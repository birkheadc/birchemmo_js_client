import * as React from 'react';
import Credentials from '../../../../types/credentials/Credentials';
import WorkingWrapper from '../../../shared/workingWrapper/WorkingWrapper';
import './LoginForm.css'

interface ILoginFormProps {
  submit: (credentials: Credentials) => void
}

/**
 * Displays a form for requesting login credentials (username and password) from the user.
 * @param {(credentials: Credentials) => void} props.submit - The function to call when submitting the form.
 * @returns 
 */
function LoginForm(props: ILoginFormProps): JSX.Element {

  const [credentials, setCredentials] = React.useState<Credentials>({
    username: '',
    password: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.submit(credentials);
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    let newCredentials = {...credentials};
    newCredentials[event.currentTarget.id as keyof Credentials] = event.currentTarget.value;
    setCredentials(newCredentials);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className='inline-label-input-wrapper'>
        <label htmlFor='username'>Username</label>
        <input id='username' onChange={handleChange} value={credentials.username}></input>
      </div>
      <div className='inline-label-input-wrapper'>
        <label htmlFor='password'>Password</label>
        <input id='password' onChange={handleChange} type='password' value={credentials.password}></input>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default LoginForm;