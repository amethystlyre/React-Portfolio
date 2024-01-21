import { useState } from "react";

export default function FormInput(props) {
  const { id, element,label, errorMessage, onChange, ...inputProps } = props;
  //console.log(props);

  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div>
      <label className="form-label">
        {label}
      </label>
    {element=="input" ? 
    (<input className="form-input" {...inputProps} onChange={onChange} onBlur = {handleFocus} focused = {focused.toString()} />) : 
    (<textarea className="form-input" {...inputProps} onChange={onChange} onBlur = {handleFocus} focused = {focused.toString()}/>)}      
      <span className="alert">{errorMessage}</span>
    </div>
  );
}
