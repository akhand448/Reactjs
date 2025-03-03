import React from  "react"
import ReactDOM from "react-dom/client"



//JSX
const jsxHeading = (<h1 id="heading" tabIndex="2">
                    Learning React
                    </h1>);



//Rect functional component

const Title = () => (
  <h1 id="title">This is title</h1>
);
const Heading = () => (
           <h1 id="heading" tabIndex="2">
           <Title/>
            Learning React
            </h1>
);

// We can use any javascript inside JSX using { } braces
// also we can write react elements (javascript objects) inside the JSX in the same way
const alternateHeading = (
  <span>
    {jsxHeading}
  </span>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

//To render a functional component
//root.render(<Heading/>);

root.render(jsxHeading);