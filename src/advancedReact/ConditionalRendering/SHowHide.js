import React, { useEffect, useState } from "react";

const SHowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setShow(!show)}>
        Show/hide
      </button>
      {show && <Item />}
    </div>
  );
};
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return window.removeEventListener("resize", checkSize);
  });
  return (
    <div>
      <h1>Window</h1>
      <h3>size:{size}</h3>
    </div>
  );
};

export default SHowHide;
