import { useState } from "react";
import "./form.css";

function From() {
  let [name, setName] = useState({
    fName: "",
    lName: "",
  });

  const inputEvent = event => {
    event.preventDefault();
    // console.log(event.target.value);
    // console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const {name , value} = event.target

    setName(preValue => {
      // console.log(value)
      return {
        ...preValue,
        [name]: value,
      };
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: preValue.l,
      //   }
      // }else if (name === "lName") {
      //   return {
      //     fName: preValue.fName,
      //     lName: value,
      //   }
      // }
    });
  };

  return (
    <>
      <form>
        <div id="page1">
          <h1>
            hello {name.fName} {name.lName}
          </h1>
          <input
            id="inputName"
            type="text"
            placeholder="Enter Your First Name"
            onChange={inputEvent}
            name="fName"
            // value={name.fName}
          />
          <input
            id="lastName"
            type="text"
            placeholder="Enter Your Last Name"
            name="lName"
            onChange={inputEvent}
          />
          {/* <button id="clickMe">Click Me</button> */}
        </div>
      </form>
    </>
  );
}

export default From;
