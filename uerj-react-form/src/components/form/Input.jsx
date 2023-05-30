/* eslint-disable react/prop-types */
import { useState } from "react";
import { FieldError } from "./FieldError";

export const Input = ({
  name,
  type = "text",
  placeholder = "",
  onChange,
  value,
  label,
  validation,
}) => {
  const [untouched, setUntouched] = useState(true);
  const handleOnChange = (event) => {
    setUntouched(false);
    onChange(event);
  };
  return (
    <>
      <label>{label}</label>
      <input
        className="input"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
      <FieldError
        fieldName={name}
        validation={validation}
        untouched={untouched}
      />
    </>
  );
};
