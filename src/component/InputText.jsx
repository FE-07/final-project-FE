import React from "react";

function InputText({ title, type, placeholder, id, name, value, onChange }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={id}>{title}</label>
        <input
          className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default InputText;
