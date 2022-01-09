import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";

      showAlert("Light mode enabled!", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";

      showAlert("Dark mode enabled!", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          changeMode={changeMode}
          home="Home"
          about="About TextUtils"
        />
        <Alert alert={alert} />
        <br />
        <Switch>
          <Route path="/about">
            <div className="container">
              <About mode={mode} />
            </div>
          </Route>

          <Route path="/">
            <div className="container">
              <Form
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
