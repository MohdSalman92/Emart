import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="form-container d-flex my-3 row">
        <div className="col-md-6">
          <div className="left">
            <img src="./Assets/image (1).jpg" alt="Map" width="80%" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="right text-center">
            <form action="">
              <table>
                <tr>
                  <label htmlFor="name">Name</label>
                  <td>
                    <input type="text" id="name"></input>
                  </td>
                </tr>
                <tr>
                  <label htmlFor="name">Email</label>
                  <td>
                    <input type="text" id="Email"></input>
                  </td>
                </tr>
                <tr>
                  <label htmlFor="name">Phone</label>
                  <td>
                    <input type="text" id="Phone"></input>
                  </td>
                </tr>
                <tr>
                  <label htmlFor="name">Massege</label>
                  <td>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="how can we help you"
                    ></textarea>
                  </td>
                </tr>
              </table>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
