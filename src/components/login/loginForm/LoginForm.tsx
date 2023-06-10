import * as React from 'react';
import './LoginForm.css'
import { Credentials, ICredentials } from '../../../types/credentials/Credentials';

interface ILoginFormProps {
  submit: (credentials: ICredentials) => void
}

/**
 * Displays a form for requesting login credentials (username and password) from the user.
 * @param {(credentials: ICredentials) => void} props.submit - The function to call when submitting the form.
 * @returns {JSX.Element}
 */
function LoginForm(props: ILoginFormProps): JSX.Element {

  const [credentials, setCredentials] = React.useState<ICredentials>(new Credentials('', ''));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.submit(credentials);
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    let newCredentials = {...credentials};
    newCredentials[event.currentTarget.id] = event.currentTarget.value;
    setCredentials(new Credentials(newCredentials.username, newCredentials.password));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Please Login</h2>
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