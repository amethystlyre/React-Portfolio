//Generates individual form fields
import { useState } from "react";

export default function FormInput(props) {
  const { id, element,label, errorMessage, onChange, ...inputProps } = props;
  //console.log(props);

  const [focused, setFocused] = useState(false);
  //set Focused value to true when user clicks on a field and then clicks away
  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div>
      <label className="form-label">
        {label}
      </label>
    {/* Renders multi-line textarea field for message based on props.element value*/}
    {/* onBlur handles user clicking away from form field*/}
    {element=="input" ? 
    (<input className="form-input" {...inputProps} onChange={onChange} onBlur = {handleFocus} focused = {focused.toString()} />) : 
    (<textarea className="form-input" {...inputProps} onChange={onChange} onBlur = {handleFocus} focused = {focused.toString()}/>)}      
      <span className="alert">{errorMessage}</span>
    </div>
  );
}
