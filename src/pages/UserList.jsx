import { Link } from "react-router-dom";

function UserList() {
  return (
    <div>
      {/* Title */}
      <div className="row">
        <div className="col-sm-12">
          <h4 className="page-title">User List</h4>
        </div>
      </div>

      {/* Content */}
      <div className="row">
        <div className="col-12">
          <div className="card-box">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Id Card</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>147111</td>
                  <td>Alexandra Clarkson</td>
                  <td>alexclark@example.com</td>
                  <td>08123</td>
                  <td>
                    <div className="btn-group">
                      <Link
                        to="/user/detail"
                        className="btn btn-sm btn-primary"
                      >
                        View
                      </Link>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>147112</td>
                  <td>Thornto Jacob</td>
                  <td>thorntojacob@example.com</td>
                  <td>08124</td>
                  <td>
                    <div className="btn-group">
                      <Link
                        to="/user/detail"
                        className="btn btn-sm btn-primary"
                      >
                        View
                      </Link>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>147113</td>
                  <td>Larry Bird</td>
                  <td>larrybird@example.com</td>
                  <td>08125</td>
                  <td>
                    <div className="btn-group">
                      <Link
                        to="/user/detail"
                        className="btn btn-sm btn-primary"
                      >
                        View
                      </Link>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End Content */}
    </div>
  );
}

export default UserList;
