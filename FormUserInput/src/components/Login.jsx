import { useState } from 'react';

const initialValue = {
  email: '',
  password: '',
};

export default function Login() {
  const [enteredValue, setEnteredValue] = useState(initialValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submit: ', enteredValue);
  };

  const handleInputChange = (identifier, event) => {
    setEnteredValue(prevValue => ({
      ...prevValue,
      [identifier]: event.target.value,
    }));
  }

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
            onChange={event => {
              handleInputChange('email', event);
            }}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={event => {
              handleInputChange('password', event);
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
