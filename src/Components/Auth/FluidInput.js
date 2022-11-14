import React from "react";
import { useState, useEffect,forwardRef } from "react";

const FluidInput = forwardRef((props, ref) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     focused: false,
  //     value: ""
  //   };
  // }
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const focusField = () => {
    // const { focused } = focused;
    // if(this.state.value !== ""){
    //   this.setState({
    //     focused:false
    //   })
    // }
    // this.setState({
    //   focused: !focused
    // });
    setFocused(!focused);
  };

  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    // this.setState({
    //   value: value
    // });
    setValue(value);
    props.setFiled(props.field, value);
  };

  // render() {
  const { type, label, style, id } = props;
  // const { focused, value } = this.state;
  // useEffect(() => {  
    let inputClass = "fluid-input";
    if (focused) {
      inputClass += " fluid-input--focus";
    } else if (value !== "") {
      inputClass += " fluid-input--open";
    }
    
  // }, [focused])
  

  return (
    <div className={inputClass} style={style}>
      <div className="fluid-input-holder">
        <input
          ref={ref}
          className="fluid-input-input"
          type={type}
          id={id}
          onFocus={focusField}
          onBlur={focusField}
          onChange={handleChange}
          autoComplete="on"
          onKeyPress= {(event) => {
            if (event.key === 'Enter') {
               props.onSubmitKeyEvent()
            }
        }}
        />
        <label className="fluid-input-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
});
// }

export default FluidInput;
