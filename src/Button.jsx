import React from "react";

function Button({ button, filter }) {
  return (
    <>
      {button.map((cat, i) => {
        return (
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={() => filter(cat)}
            >
              <ul>
                <li>{cat}</li>
              </ul>
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Button;
