import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div class="account-pages"></div>
      <div class="clearfix"></div>
      <div class="wrapper-page">
        <div class="text-center">
          <Link to="/register" class="logo">
            <span>
              Appro<span>val</span>
            </span>
          </Link>
          <h5 class="text-muted mt-0 font-600">Sistem Pengajuan Izin</h5>
        </div>
        <div class="m-t-40 card-box">
          <div class="text-center">
            <h4 class="text-uppercase font-bold mb-0">Register</h4>
          </div>
          <div class="p-20">
            <form class="form-horizontal m-t-20" action="">
              <div class="form-group ">
                <div class="col-xs-12">
                  <input
                    class="form-control"
                    type="email"
                    required=""
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="form-group ">
                <div class="col-xs-12">
                  <input
                    class="form-control"
                    type="text"
                    required=""
                    placeholder="Username"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-12">
                  <input
                    class="form-control"
                    type="password"
                    required=""
                    placeholder="Password"
                  />
                </div>
              </div>

              <div class="form-group text-center m-t-40 mb-0">
                <div class="col-xs-12">
                  <button
                    class="btn btn-custom btn-bordred btn-block waves-effect waves-light"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 text-center">
            <p class="text-muted">
              Already have account?
              <Link to="/login" class="text-primary m-l-5">
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
