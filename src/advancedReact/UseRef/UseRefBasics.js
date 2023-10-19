import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <div>
      <h1>UseRef Basics</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="" id="" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UseRefBasics;
