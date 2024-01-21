import { useState } from "react";
import FormInput from "../forms/FormInput";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const inputs = [
    {
      id: 1,
      name: "name",
      element:"input",
      type: "text",
      label: "Name:",
      placeholder: "Your name",
      pattern: "^[A-Za-z0-9]+",
      errorMessage:"Name is required.",
      required:true,
    },
    {
      id: 2,
      name: "email",
      element:"input",
      type: "email",
      label: "Email:",
      placeholder: "Your email address",
      pattern: "^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,4})+$",
      errorMessage:"Email address is invalid.",
      required:true,
    },
    { id: 3, 
      name: "message", 
      element:"textarea",
      type: "text",
      label: "Message:",
      placeholder: "Leave a message for me!",
      rows:"10",
      pattern: "[A-Za-z0-9]+",
      errorMessage:"Message is required.",
      required:true,
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
