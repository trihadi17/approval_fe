import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="account-pages"></div>
      <div className="clearfix"></div>
      <div className="wrapper-page">
        <div className="text-center">
          <Link to="" className="logo">
            <span>
              Appro<span>val</span>
            </span>
          </Link>
          <h5 className="text-muted mt-0 font-600">Sistem Pengajuan Izin</h5>
        </div>
        <div className="m-t-40 card-box">
          <div className="text-center">
            <h4 className="text-uppercase font-bold mb-0">Sign In</h4>
          </div>
          <div className="p-20">
            <form className="form-horizontal m-t-20" action="">
              <div className="form-group">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="text"
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

              <div className="form-group text-center m-t-30">
                <div className="col-xs-12">
                  <Link
                    className="btn btn-custom btn-bordred btn-block waves-effect waves-light"
                    to="/"
                  >
                    Log In
                  </Link>
                </div>
              </div>

              <div className="form-group m-t-30 mb-0">
                <div className="col-sm-12">
                  <Link to="" className="text-muted">
                    <i className="fa fa-lock m-r-5"></i> Forgot your password?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-center">
            <p className="text-muted">
              Don't have an account?
              <Link to="/register" className="text-primary m-l-5">
                <b>Sign Up</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
