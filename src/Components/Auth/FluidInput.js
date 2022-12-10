import React from "react";
import { useState, useEffect, forwardRef } from "react";

const FluidInput = forwardRef((props, ref) => {
  const [focused, setFocused] = useState(true);
  const [value, setValue] = useState("");
  const [filedEmpty, setFiledEmpty] = useState(false);
  const [inputClass, setInputClass] = useState("fluid-input")
  const errorstyle = {
    alignSelf: "start",
    marginBottom:" 15px",
    marginTop: "-15px",
    padding: "0 15px",
    color : "red",
  }
  const focusField = () => {
    setFocused(true);
  };
  const { type, label, style, id, setIsEmpty,field,firstEmpty, setFirstEmpty} = props;

  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    setValue(value);
    props.setFiled(field, value);
    if (value === "") {
      setIsEmpty(true);
      setFiledEmpty(true);
    } else {
      setFirstEmpty(false);
      setIsEmpty(false);
      setFiledEmpty(false);
    }
  };
  useEffect(() => {
    if(value!==""){
      setInputClass((inputClass)=>inputClass+" fluid-input--focus");
    }
    return () => {
    }
  }, [])
  useEffect(() => {
    if (focused) {
      setInputClass((inputClass)=>inputClass+" fluid-input--focus")
    } else if (value !== "") {
      setInputClass((inputClass)=>inputClass+" fluid-input--open")
    }
    return () => {
    }
  }, [focused])
    

  return (
    <>
    <div className={inputClass} style={style}>
      <div className="fluid-input-holder">
        <input
          ref={ref}
          className="fluid-input-input"
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={focusField}
          onBlur={focusField}
          autoComplete="off"
          required
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              props.onSubmitKeyEvent();
            }
          }}
        />
        <label className="fluid-input-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
      {(filedEmpty||firstEmpty)&&<p style={errorstyle}>{`${field} field is required`}</p>}
    </>
  );
});
// }

export default FluidInput;
