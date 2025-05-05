import React from "react";

const PermissionDetail = () => {
  return (
    <div>
      {" "}
      {/* Title */}
      <div className="row">
        <div className="col-sm-12">
          <h4 className="page-title">Permission Detail</h4>
        </div>
      </div>
      {/* Content */}
      <div className="row">
        <div className="col-12">
          <div className="card-box task-detail">
            <div className="media m-b-30">
              <img
                className="d-flex mr-3 rounded-circle"
                alt="64x64"
                src="/assets/images/users/avatar-2.jpg"
                style={{ width: "48px", height: "48px" }}
              />
              <div className="media-body">
                <h4 className="media-heading mb-0 mt-0">Larry Bird</h4>
                <span className="badge badge-warning">Revised</span>
              </div>
            </div>

            <h4 className="font-600 m-b-20">Reason</h4>

            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, illo, iste itaque voluptas corrupti ratione
              reprehenderit magni similique? Tempore, quos delectus asperiores
              libero voluptas quod perferendis! Voluptate, quod illo rerum?
              Lorem ipsum dolor sit amet.
            </p>

            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, illo, iste itaque voluptas corrupti ratione
              reprehenderit magni similique? Tempore, quos delectus asperiores
              libero voluptas quod perferendis! Voluptate, quod illo rerum?
              Lorem ipsum dolor sit amet.
            </p>

            <h4 className="font-600 m-b-20">Note</h4>

            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, illo, iste itaque voluptas corrupti ratione
              reprehenderit magni similique? Tempore, quos delectus asperiores
              libero voluptas quod perferendis! Voluptate, quod illo rerum?
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      {/* End Content */}
    </div>
  );
};

export default PermissionDetail;
