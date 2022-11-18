import React from "react";

function InputText({ name, type, placeholder }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="">{name}</label>
        <input
          className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
          type={type}
          name=""
          id=""
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default InputText;
