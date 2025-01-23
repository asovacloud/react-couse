import { useState } from 'react';
import Input from './Input';

const initialEnteredValues = {
  email: '',
  password: '',
};

const initialDidEditValues = {
  email: false,
  password: false,
};

export default function Login() {
  const [enteredValues, setEnteredValues] = useState(initialEnteredValues);

  const [didEdit, setDidEdit] = useState(initialDidEditValues);

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.length < 6;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!emailIsInvalid && !passwordIsInvalid) {
      console.log('Submit: ', enteredValues);
    }
  };

  const handleEnteredValues = (key, event) => {
    setEnteredValues((state) => ({
      ...state,
      [key]: event.target.value,
    }));

    setDidEdit((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          type="text"
          name="email"
          label="Email"
          onBlur={() => {
            handleInputBlur('email');
          }}
          onChange={(event) => {
            handleEnteredValues('email', event);
          }}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email'}
        />

        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          onBlur={() => {
            handleInputBlur('password');
          }}
          onChange={(event) => {
            handleEnteredValues('password', event);
          }}
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password'}
        />

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => {
              handleEnteredValues('password', event);
            }}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
