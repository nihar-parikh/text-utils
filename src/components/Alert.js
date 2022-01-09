import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const text = word.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <div className="container" style={{height:"50px"}}>
      {props.alert !== null && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
      </div>
      )}
    </div>
  );
}
