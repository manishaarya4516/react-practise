import React from "react";
import { HeaderStyle } from "./headerstyle";

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="header">
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo"/>
        <h3>Keep Notes</h3>
        
      </div>
    </HeaderStyle>
  );
};
