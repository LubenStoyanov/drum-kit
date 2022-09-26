import React from "react";

function SoundsKat({ filterSound }) {
  return (
    <>
      {filterSound.map((item) => {
        const playSound = () => {
          var audio = new Audio("src/assets/sounds/" + item.path);
          audio.play();
        };
        return (
          <div
            onClick={() => playSound()}
            className="item-container"
            key={item.id}
          >
            <p className="item-sounds">{item.filename}</p>
          </div>
        );
      })}
    </>
  );
}

export default SoundsKat;
