import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="account-pages"></div>
      <div className="clearfix"></div>
      <div className="wrapper-page">
        <div className="text-center">
          <Link to="/register" className="logo">
            <span>
              Appro<span>val</span>
            </span>
          </Link>
          <h5 className="text-muted mt-0 font-600">Sistem Pengajuan Izin</h5>
        </div>
        <div className="m-t-40 card-box">
          <div className="text-center">
            <h4 className="text-uppercase font-bold mb-0">Register</h4>
          </div>
          <div className="p-20">
            <form className="form-horizontal m-t-20" action="">
              <div className="form-group ">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="email"
                    required=""
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="password"
                    required=""
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="form-group ">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    required=""
                    placeholder="Id Card"
                  />
                </div>
              </div>

              <div className="form-group ">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    required=""
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-12">
                  <select name="" id="" className="form-control">
                    <option value="" disabled selected>
                      Select Gender
                    </option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                  </select>
                </div>
              </div>

              <div className="form-group ">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    required=""
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-12">
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    className="form-control"
                    placeholder="Address"
                  ></textarea>
                </div>
              </div>

              <div className="form-group text-center m-t-40 mb-0">
                <div className="col-xs-12">
                  <button
                    className="btn btn-custom btn-bordred btn-block waves-effect waves-light"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-center">
            <p className="text-muted">
              Already have account?
              <Link to="/login" className="text-primary m-l-5">
                <b>Sign In</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
