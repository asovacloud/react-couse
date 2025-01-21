import { useState } from 'react';

const initialValues = {
  email: '',
  password: '',
};

export default function Login() {
  const [enteredValues, setEnteredValues] = useState(initialValues);

  const emailIsInvalid =
    enteredValues.email !== '' && !enteredValues.email.includes('@');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submit: ', enteredValues);
  };

  const handleEnteredValues = (key, event) => {
    setEnteredValues((state) => ({
      ...state,
      [key]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => {
              handleEnteredValues('email', event);
            }}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => {
              handleEnteredValues('password', event);
            }}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
