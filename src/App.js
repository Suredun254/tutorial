import React from "react";
import Booklist from "./Booklist";

const App = () => {
  return (
    <div>
      <Greeting />
    </div>
  );
};
function Greeting() {
  return (
    <div>
      {/* <h3>This is sure and this is my first component.</h3>
      <Hi /> */}
      <Booklist />
    </div>
  );
}
// const Hi = () => {
//   return React.createElement("h1", {}, "Hello world");
// };

export default App;
