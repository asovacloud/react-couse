import InputField from './InputField';
import InputGroup from './InputGroup';

const UserInput = () => {
  return (
    <div id="user-input">
      <InputGroup>
        <>
          <InputField label="Initial investment" name="initial-investment" />
          <InputField label="Annual investment" name="annual-investment" />
        </>
      </InputGroup>
      <InputGroup>
        <>
          <InputField label="Expected return" name="exprected-return" />
          <InputField label="Duration" name="duration" />
        </>
      </InputGroup>
    </div>
  );
};

export default UserInput;
