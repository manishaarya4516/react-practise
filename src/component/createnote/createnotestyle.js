import { styled } from "styled-components";

export const CreateNoteStyle= styled.div`
.create {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  margin: 0 auto;
}

.create input,
.create textarea {
  border: none;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 14px;
  background-color: #f7f7f7;
  resize: none;
  transition: background-color 0.3s ease-in-out;
}

.create input:focus,
.create textarea:focus {
  outline: none;
  background-color: #fff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}

.create button.btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.create button.btn:hover {
  background-color: #0056b3;
}


`