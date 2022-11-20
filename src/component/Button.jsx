import React from "react";

<<<<<<< HEAD

function Button({ name, bgcolor, hover, }) {

=======
function Button({ name, bgcolor, hover, evt }) {
>>>>>>> dev
  return (
    <>
      <button
        type="submit"
        className={"w-full py-2 rounded-md text-white " + bgcolor + " " + hover}
        onClick={evt}
      >
        {name}
      </button>
    </>
  );
}

export default Button;