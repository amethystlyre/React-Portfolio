import { useState } from "react";
import FormInput from "../forms/FormInput";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      label: "Name:",
      placeholder: "Your name",
      pattern: "^[A-Za-z0-9]+",
      errorMessage:"",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      label: "Email:",
      placeholder: "Your email address",
      pattern: "^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,4})+$",
      errorMessage:"",
    },
    { id: 3, 
      name: "message", 
      type: "text",
      label: "Message:",
      placeholder: "Leave a message for me!",
      rows:"10",
      errorMessage:"",
     },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // setAlert('');
  };

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div>
      <h1>Amethyst</h1>
      <div>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          {inputs.map(input=> (
            <FormInput key={input.id} {...input} value={formData[input.name]} onChange={handleChange}/>
          ))}   
          <button className="form btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
