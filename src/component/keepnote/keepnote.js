import React, { useState } from "react";
import { KeepNoteStyle } from "./keepnotestyle";
import { DeleteTwoTone } from "@ant-design/icons";

export const KeepNote = ({ noteList }) => {
  return (
    <>
      {noteList.map((note, index) => {
        return (
          <KeepNoteStyle key={index}>
            <div className="keep">
              <h2>{note.title}</h2>
              <p>{note.desc}</p>
              <button className="keepbtn">
                <DeleteTwoTone />
              </button>
            </div>
          </KeepNoteStyle>
        );
      })}
    </>
  );
};
