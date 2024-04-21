import React, { useState } from "react";
import data from "./data.js";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(0);
  const [enableMultiselection, setEnableMultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleClick = (getItemid) => {
    setSelected(getItemid === selected ? null : getItemid);
  };

  const handleMultiClick = (getCurrentId) => {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.pop(findIndexOfCurrentId);

    setMultiple(cpyMutiple);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        <button onClick={() => setEnableMultiselection(!enableMultiselection)}>
          Enable mutliselection{" "}
        </button>
        {data && data.length > 0
          ? data.map((dataitem) => (
              <div className="item">
                <div
                  className="title"
                  onClick={
                    enableMultiselection
                      ? () => handleMultiClick(dataitem.id)
                      : () => handleSingleClick(dataitem.id)
                  }
                >
                  <h3>{dataitem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiselection
                  ? multiple.indexOf(dataitem.id) !== -1 && (
                      <div className="content">{dataitem.answer}</div>
                    )
                  : selected === dataitem.id && (
                      <div className="content">{dataitem.answer}</div>
                    )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Accordion;
