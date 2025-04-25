import "./App.css";
import ProductTab from "./ProductTab.jsx";
// import MsgBox from "./MsgBox.jsx";
// import Button from './Button.jsx';
import Form from './Form.jsx';

function App() {
  return (
    <>
      {/* <MsgBox userName="krishna" textColor="blue"/>
      <MsgBox userName="krish" textColor="green"/>
      <MsgBox userName="Apna College" textColor="pink"/> */}
      <h2>Blockbuster Deals | Shop Now</h2>
      <ProductTab />
      {/* <Button/> */}
      {/* <Form/> */}
    </>
  );
}
export default App;

/*   undersatnding react app/flow

    index.html --->  main.jsx   <----  App.jsx
    root <--. app this will come from main.jsx



    // Re-Write App

import "./App.css";

function App() {
  return <button>Hello world</button>
}

export default App;


// our 1st component


import "./App.css";

function Title(){
    return <h1> IAm the title</h1>
}


function App() {
    return (
          <div>
            <Title/>
          </div>
    );
       
}
export default App;

function Title(){
    return <h1> IAm the title</h1>
}
function Description(){
    return <h3>Iam the Description</h3>
}

function App(){
    return (
        <div>
        <Title/>
        <Description/>
        </div>
    );
}

export default App;


//React Fragment

return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  )


  But using a <div> just for grouping can unnecessarily clutter your HTML, 
  which can mess with your CSS or layout.

  React.Fragment lets you group elements without adding extra DOM nodes below is the example

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>World</p>
    </React.Fragment>
  )

  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  )

  This is exactly the same as using React.Fragment, just cleaner.


  🔹 When Should You Use React.Fragment?

When you don’t want extra nodes in the DOM

Inside components that return lists of elements

When using CSS frameworks where extra divs break styling/layout


function Title(){
    let name="krishna";
    return (
        <div>
         <p> 2 * 2 =  { 2 * 2 }</p>
         <p>Hi, {name.toUppercase()}</p>
        </div>                       
    );
    
}
//  you have written code in cruly braces it willconsider as js code
export default Title;


// check once  structuring compoments
 */

/*
   import User from "./User.jsx";

function App() {
    return (
      <div>
        <h1>Welcome to the user INfo</h1>
        <User name="krishna" age={24} />
        <User name="Emily" age={30} />
      </div>
    );
}

export default App;


import "./App.css";   // Passing Arrays to props
import ProductTab from "./ProductTab.jsx";

function App(){
    return (
      <div>
        <ProductTab/>
      </div>
    );
}

export default App;

*/