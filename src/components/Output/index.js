import React from "react";

export const Button = ({children, isvalid, ...rest}) => {
  //console.log(isvalid, typeof isvalid)
  return (
    <button {...rest} disabled={!isvalid}>
      {children}
    </button>
  );
}