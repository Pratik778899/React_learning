import React from "react";

const Hook = (props) => {
//   const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="flex justify-center flex-col">
        <h1 className="text-center text-5xl m-8">{props.count}</h1>
        <div className="button flex justify-center gap-4">
          <button
            onClick={props.increase}
            className="border-solid border-2 border-black px-8 py-2"
          >
            Increase {props.count}
          </button>
          <button 
          onClick={props.decrease}
          className="border-solid border-2 border-black px-8 py-2">
            Decrease {props.count}
          </button>
        </div>
      </div>
    </>
  );
};

export default Hook;
