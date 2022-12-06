import React, { useState } from "react";

function Checkbox({ name, value }) {
  const [checked, setChecked] = useState(value);
  return (
    <>
      <div className="flex gap-2">
        <input type="checkbox" name="" id="" value={value} />
        <label htmlFor="">{name}</label>
      </div>
    </>
  );
}

export default Checkbox;
