const InputField = ({ label, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="number" id={name} name={name} />
    </div>
  );
};

export default InputField;
