import React from "react";

export default function facebook_login() {
  return (
    <div>
      {/* For Heading and Login Form */}
      <div className="container">
        <div className="box1">
          <div className="row">
            <div className="col-lg-6">
              {/* HEADING OF FACEBOOK */}
              <h1 className="heading-facebook">Facebook</h1>
              <p className="sub-heading-facebook">
                Facebook helps you connect and share with the people in your
                life.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row-box2">
                <div className="form-data">
                  <input
                    type="text"
                    className="input"
                    name=""
                    id="email"
                    placeholder="Email address or Phone Number"
                  />{" "}
                  <br />
                  <input
                    type="password"
                    className="input"
                    name=""
                    id="Password"
                    placeholder="Password"
                  />
                  <button className="btn btn-primary" id="login">
                    Log In
                  </button>{" "}
                  <br />
                  <a className="fgp" href="http://facebook.com/smmunna21">
                    Forgotten password?
                  </a>
                  <hr />
                  <button className="create-account">
                    Create New Account
                  </button>{" "}
                  <br />
                </div>
              </div>

              <div className="extralink">
                <p className="create-page-link">
                  <a
                    href="http://facebook.com/smmunna21"
                    className="extralink1"
                  >
                    Create a page
                  </a>{" "}
                  for celebrity, brand or business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
