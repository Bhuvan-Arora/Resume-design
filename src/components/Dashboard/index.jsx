import React from "react";
import "./dashboard.css";
import { TextField } from "@mui/material";
import ICON_Profile from "../../assets/icons/ICON_Profile.jpg";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Banner Section Start */}
      <div className="premium-banner">
        <div className="banner-icon">
          <div className="icon"></div>
        </div>
        <div className="banner-body">
          <div className="banner-heading">Premium Account</div>
          <div className="banner-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            adipisci beatae quasi dicta aperiam sequi enim officia facilis,
            explicabo impedit ullam unde provident placeat ea quas pariatur qui
            totam dolor amet, minus rerum harum laborum repellendus quis. Cum,
            rerum asperiores mollitia architecto similique quia libero quos hic
            cupiditate perspiciatis aliquam.
          </div>
        </div>
      </div>
      {/* Banner Section End */}

      {/* Form Section Start */}
      <div className="form-container">
        <div className="image-container">
          <img src={ICON_Profile} alt="" className="user-image" />
        </div>
        <div className="form-heading">Personal Information</div>
        <div className="form-section">
          <form>
            <div className="field-row">
              <div className="form-field">
                <TextField
                  id="outlined-basic"
                  className="form-input"
                  label="First Name"
                  variant="outlined"
                />
              </div>
              <div className="form-field">
                <TextField
                  id="outlined-basic"
                  className="form-input"
                  label="Last Name"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="field-row">
              <div className="form-field">
                <TextField
                  id="outlined-basic"
                  className="form-input"
                  label="City"
                  variant="outlined"
                />
              </div>
              <div className="form-field">
                <TextField
                  id="outlined-basic"
                  className="form-input"
                  label="Postal Code"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="field-row">
              <div className="form-field-full">
                <TextField
                  id="outlined-basic"
                  className="form-input"
                  label="Address"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="field-row">
              <div className="form-field">
                <TextField
                  id="outlined-basic"
                  className="form-input"
                  label="Email"
                  variant="outlined"
                />
              </div>
              <div className="form-field">
                <TextField
                  id="outlined-basic"
                  className="form-input"
                  label="Phone"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="field-row">
              <div className="form-field">
                <TextField
                  id="outlined-basic"
                  className="form-input"
                  label="Password"
                  variant="outlined"
                />
              </div>
            </div>

            {/* Disclaimer Section Start */}
            <div className="disclaimer">
              Use this email to log in to your <a href="#"> resumedone.io </a>
              account and receive notifications.
            </div>
            {/* Disclaimer Section End */}

            {/* Submit Button */}
            <button className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
      {/* Form Section End */}

      {/* Agreement Checkbox */}
      <div className="agreement-check">
        <label>
          <input type="checkbox" />
          Show my profile to serious employers on <a href="">
            hirethebest.io
          </a>{" "}
          for free
        </label>
      </div>

      {/* Delete Account Seciton Start */}
      <div className="delete-section">
        <div className="heading">Delete Account</div>
        <div className="delete-text">
          If you delete your account you'll be permanently removing it from our
          systems - you can't undo it.
        </div>
        <div className="delete-btn">Yes, Delete my account</div>
      </div>
      {/* Delete Account Seciton End */}

      {/* COntact Us Section Start */}
      <div className="contact-us">
        <div className="contact">
          Get in touch with our supoort team if you have any questions or want
          to leave some feedback.
        </div>
        <div className="disclaimer">We'll be happy to hear from you.</div>
      </div>
      {/* COntact Us Section End */}

      {/* Footer Section Start */}
      <div className="footer-section">
        <span className="footer-options">Term & Conditions</span>
        <span className="footer-options">Privacy Policy</span>
        <span className="footer-options">FAQ</span>
        <span className="footer-options">Contact Us</span>
      </div>
      {/* Footer Section End */}
    </div>
  );
};

export default Dashboard;
