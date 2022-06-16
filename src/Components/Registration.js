import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [flag, setFlag] = useState(false);
  const [passwordFlag, setPasswordFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    const digitRegex = new RegExp(
      /\d/
    );
    const specialCharacterRegex = new RegExp(
      /[!@#$%^&*_]/
    );

    if(specialCharacterRegex.test(firstname)) {
      setPasswordFlag(true);
      return setErrorMsg("Firstname should not include any special characters!")
    }

    if(specialCharacterRegex.test(lastname)) {
      setPasswordFlag(true);
      return setErrorMsg("Lastname should not include any special characters!")
    }

    if(!digitRegex.test(password)){
      setPasswordFlag(true);
      return setErrorMsg("Include some digits!")
    }

    if(!specialCharacterRegex.test(password)){
      setPasswordFlag(true);
      return setErrorMsg("Include some special characters!")
    }
    const usernameRegex = new RegExp(
      /^[a-zA-Z]+$/,
    );
    if(!usernameRegex.test(username))
    {
      setPasswordFlag(true);
      return setErrorMsg("Username not valid!!")
    }
    const passwordRegex = new RegExp(
      /^(?=.{8,}$)(?=.*[a-zA-z])(?=.*[0-9])(?=.*\W).*$/,
    );

    if (!passwordRegex.test(password)) {
      return setPasswordFlag(true);
    }
    
    if (!firstname || !lastname || !email || !phone || !username || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("anushkaEmail", JSON.stringify(email));
      localStorage.setItem("anushkaPassword", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
    /*if(password.search(/[0-9]/)==-1)
      {
        JSON.innerHTML="pease write 1 digit";
        return false;
      }*/
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <div>
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                name="name"
                maxLength="50"
                onChange={(event) => setFirstName(event.target.value)}
                onkeyup="this.value=this.value.replace(/[^a-zA-Z0-9]/g, '')"
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                maxLength="50"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone No.</label>
              <input
                type="Phone"
                className="form-control"
                placeholder="Enter contact no"
                maxLength="10"
                minLength="10"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                minLength="5"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                minLength={8}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>

            <button type="reset" className="btn btn-dark btn-lg btn-block">
              Reset
            </button>

            <p onClick={handleClick} className="forgot-password text-right">
              Already registered log in?
            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
            {passwordFlag && (
              <Alert color="primary" variant="danger">
               {errorMsg && errorMsg}
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}
export default Registration;
