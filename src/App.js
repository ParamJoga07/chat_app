import "./App.css";
import React, { useEffect } from "react";
import "./images/peakpx-2.jpg";
import gallery from "./images/gallery.png";

function App() {
  useEffect(() => {
    const container = document.getElementById("container");
    container.classList.add("sign-in");
    return () => {
      container.classList.remove("sign-in");
      container.classList.remove("sign-up");
    };
  }, []);

  const toggle = () => {
    const container = document.getElementById("container");
    container.classList.toggle("sign-in");
    container.classList.toggle("sign-up");
  };

  return (
    <div className="App">
      <div id="container" className="container">
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                  <img className="profilepic" src={gallery} alt="profilepic" />
                  <label htmlFor="profile-picture" className="add-button">
                    <i className="bx bx-image-add"></i>
                    <p>Add Profile Picture</p>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="profile-picture"
                    style={{ display: "none" }}
                  />
                </div>

                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Confirm password" />
                </div>
                <button>Sign up</button>
                <p>
                  <span>Already have an account?</span>
                  <b className="pointer" onClick={toggle}>
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>

          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <button>Sign in</button>
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don't have an account?</span>
                  <b className="pointer" onClick={toggle}>
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>

        <div className="row content-row">
          <div className="col flex-col">
            <div className="text sign-in">
              {/* <div className="logo">
                <img src={logo} alt="React Logo" />
              </div> */}
              {/* <h2>
                Welcome
                to <br></br> ChatHub
              </h2> */}
            </div>
            <div className="img sign-in"></div>
          </div>

          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
