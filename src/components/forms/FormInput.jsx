export default function FormInput(props) {
  const { id, label, errorMessage, onChange, ...inputProps } = props;
  console.log(props);

  return (
    <div>
      <label className="form-label">
        {label}
      </label>
      <input className="form-input" {...inputProps} onChange={onChange} />
      <span className="alert">{errorMessage}</span>
    </div>
  );
}
