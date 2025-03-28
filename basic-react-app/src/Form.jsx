function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form(){
    return (
        <form action="">
            <input type="text" placeholder="write something" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}

//or
// import React from 'react'

// function handleFormSubmit() {
//     event.preventDefault(false)
//     console.log("Form was submitted")
// }

// const Form = () => {
// return (
//     <form onClick={handleFormSubmit}>
//         <input placeholder='write something' />
//         <button>Submit</button>
//     </form>
// )
// }

// export default Form