import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("Enter your text"); //default value of text is "Enter your text"
  // console.log(useState);
  // console.log(text);
  // console.log(setText);
  let customStyle = {
    color: "black",
    backgroundColor: "white",
  };
  const [setBkg] = useState(customStyle);
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const handleSTD = () => {
    text.replace(/\s+/g, "");
  };

  const handleUpClick = () => {
    console.log("uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper case Enabled!", "success");
  };

  const handleLoClick = () => {
    console.log("lowercase clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lower case Enabled", "success");
  };

  const handleChange = (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);

    setText(event.target.value);
  };

  const countWords = (text) => {
    // const newArray = [];
    // const array = text.split(" ");
    // //console.log(array);
    // for (let i = 0; i < array.length; i++) {
    //   const element = array[i];
    //   if (element !== "" && element !== ".") {
    //     newArray.push(element);
    //   }
    // }
    // return newArray.length;
    //const array = text.split(" ");
    const array = text.split(/\s+/); //removing whitespaces and new lines also.
    const newArray = array.filter((i) => {
      return i !== "";
    });
    return newArray.length;
  };

  const countCharacters = (text) => {
    // const newArray = [];
    // const array = text.split("");
    // //console.log(array);

    // for (let i = 0; i < array.length; i++) {
    //   const element = array[i];

    //   if (element !== " " && element !== ".") {
    //     newArray.push(element);
    //   }
    //   //console.log(newArray);
    // }
    // return newArray.length;
    const array = text.split("");
    const newArray = array.filter((i) => {
      return i !== " ";
    });
    return newArray.length;
  };


  //not working
  // const handleWhiteSpaces = () => {
  //   let newText = text.split(/[]+/);
  //   console.log(newText);
  //   setText(newText.join(" "));
  // };

  const handleBkgClick = () => {
    if (btnText === "Enable Dark Mode") {
      setBkg({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setBkg({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <>
      <div
        className="mb-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "grey" : "white",
          }}
          //placeholder="Enter your text"
          value={text}
          onChange={handleChange} //enable to write in textarea with every updated values stored in text.
        ></textarea>
        <br />
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2`}
          onClick={handleSTD}
        >
          Change to STD Format
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          //onClick={handleWhiteSpaces}
        >
          Remove White Spaces
        </button>
        {/* <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleBkgClick}
        >
          {btnText}
        </button> */}
        <div
          className="form-check form-switch my-2 mx-2"
          onClick={handleBkgClick}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {btnText}
          </label>
        </div>

        {/* <button
          type="button"
          classNameName="btn btn-primary mx-2"
          onClick={handleLightClick}
        >
          Enable Light Mode
        </button> */}
      </div>
      {/*margin in y: my-3*/}
      <div className="container my-4">
        <h2
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Your text summary
        </h2>
        <p
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {countCharacters(text)} Characters
        </p>
        <p
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {countWords(text)} Words
        </p>
      </div>
    </>
  );
}
