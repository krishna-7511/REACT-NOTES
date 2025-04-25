import React from "react";
import "./App.css"


// function User(props){
//   return (
//     <div>
//        <h2>hello, {props.name}</h2>
//        <p>age, {props.age}</p>
//     </div>
//   );
// }

// export default User;


// Instead of writing props.name and props.age, you can destructure the props:


function User({ name, age }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default User;


// Default Props (Optional)

// function User({ name = "Guest", age = 0 }) {
//   return (
//     <div>
//       <h2>Hello, {name}!</h2>
//       <p>Age: {age}</p>
//     </div>
//   );
// }