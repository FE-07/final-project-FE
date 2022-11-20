import React from "react";


function Button({ name, bgcolor, hover, }) {

  return (
    <>
      <button type="submit"
        className={"w-full py-2 rounded-md text-white " + bgcolor + " " + hover}
      >
        {name}
      </button>
    </>
  );
}

export default Button;