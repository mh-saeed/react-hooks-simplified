import React, { useImperativeHandle } from "react";

function CustomInput({ style, ...props }, ref) {
  useImperativeHandle(
    ref,
    () => {
      return { alertHi: () => alert("Hi") };
    },
    []
  );

  return (
    <input
      ref={ref}
      {...props}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: ".25em",
        borderBottom: ".1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        ...style,
      }}
    />
  );
}

// ! This will produce error: Function components cannot be given refs
// export default (CustomInput);

// ** React.forwardRef will remove the error, however our functionality for focus on input field will still not work unless we pass ref to input
export default React.forwardRef(CustomInput);
