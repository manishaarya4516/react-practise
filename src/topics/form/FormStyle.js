import { styled } from "styled-components";

export const FormStyle=styled.div`
/* Styling for the container div */
.container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Styling for the form */
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  /* Styling for labels */
  label {
    font-weight: bold;
  }
  
  /* Styling for input fields */
  input[type="text"],
  input[type="email"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  /* Styling for the button */
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  /* Styling for the button on hover */
  button:hover {
    background-color: #0056b3;
  }
  
  /* Styling for the person div */
  .person {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  /* Styling for the person name */
  .person h2 {
    margin: 5px 0;
  }
  
  /* Styling for the person email */
  .person h3 {
    color: #555;
  }
  
`