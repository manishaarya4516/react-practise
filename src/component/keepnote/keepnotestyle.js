import { styled } from "styled-components";

export const KeepNoteStyle=styled.div`
.keep {
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px;
  width: 200px;
  margin-right: 16px;
  margin-bottom: 16px;
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.keep h2 {
  font-size: 16px;
  margin: 0;
  margin-bottom: 6px;
  color: #333;
}

.keep p {
  font-size: 14px;
  margin: 0;
  color: #777;
  line-height: 1.4;
  max-height: 60px;
  overflow: hidden;
}

.keep button.keepbtn {
  background-color: transparent;
  border: none;
  position: absolute;
  top: 6px;
  right: 6px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.keep button.keepbtn:hover {
  transform: scale(1.2);
}

`