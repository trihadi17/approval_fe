import { Link } from "react-router-dom";

function PermissionList() {
  return (
    <div>
      {/* Title */}
      <div className="row">
        <div className="col-sm-12">
          <h4 className="page-title">Permission List</h4>
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
                  <th>Name</th>
                  <th>Type</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Note</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Alexandra Clarkson</td>
                  <td>Cuti</td>
                  <td>Cuti Selama 2 Hari</td>
                  <td>
                    <span className="badge badge-primary">Pending</span>
                  </td>
                  <td>....</td>
                  <td>
                    <div className="btn-group">
                      <Link
                        to="/permission/detail"
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
                  <td>Thornto Jacob</td>
                  <td>Sakit</td>
                  <td>Izin tidak masuk dari tanggal 1-2 Mei 2025</td>
                  <td>
                    <span className="badge badge-success">Approved</span>
                  </td>
                  <td>Di Acc</td>
                  <td>
                    <div className="btn-group">
                      <Link
                        to="/permission/detail"
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
                  <td>Larry Bird</td>
                  <td>Keperluan Dinas</td>
                  <td>Dinas ke Jogja</td>
                  <td>
                    <span className="badge badge-warning">Revised</span>
                  </td>
                  <td>Revisi alasannya</td>
                  <td>
                    <div className="btn-group">
                      <Link
                        to="/permission/detail"
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

export default PermissionList;
