import useInput from '../hooks/useInput';
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation';
import Input from './Input';

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: hasEmailError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: hasPasswordError,
  } = useInput('', (value) => hasMinLength(value, 6));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (hasEmailError || hasPasswordError) {
      return;
    }

    console.log('Submit email: ', emailValue);
    console.log('Submit password: ', passwordValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      {console.log({ hasPasswordError })}

      <div className="control-row">
        <Input
          id="email"
          type="text"
          name="email"
          label="Email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={hasEmailError && 'Please enter a valid email'}
        />

        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={hasPasswordError && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
