import React from "react";

const UserDetail = () => {
  return (
    <div>
      {/* Title */}
      <div className="row">
        <div className="col-sm-12">
          <h4 className="page-title">User Detail</h4>
        </div>
      </div>

      {/* Content */}
      <div className="row">
        <div className="col-12">
          <div className="card-box">
            <div className="bg-picture">
              <div className="profile-info-name">
                <img
                  src="/assets/images/profile.jpg"
                  className="img-thumbnail"
                  alt="profile-image"
                />

                <div className="profile-info-detail">
                  <h4 className="m-0">Alexandra Clarkson</h4>
                  <p className="text-muted m-b-20">
                    <i>Web Designer</i>
                  </p>
                  <p>
                    Hi I'm Alexandra Clarkson,has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type.Contrary to popular belief, Lorem
                    Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC,making it over 2000
                    years old.Contrary to popular belief, Lorem Ipsum is not
                    simplyrandom text. It has roots in a piece of classical
                    Latin literature from 45 BC.
                  </p>

                  <div className="button-list m-t-20">
                    <button
                      type="button"
                      className="btn btn-facebook btn-sm waves-effect waves-light"
                    >
                      <i className="fa fa-facebook"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-sm btn-twitter waves-effect waves-light"
                    >
                      <i className="fa fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-sm btn-linkedin waves-effect waves-light"
                    >
                      <i className="fa fa-linkedin"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-sm btn-dribbble waves-effect waves-light"
                    >
                      <i className="fa fa-dribbble"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Content */}
    </div>
  );
};

export default UserDetail;
