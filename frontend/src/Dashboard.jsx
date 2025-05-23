import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <nav className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <h3 className="mb-4">PSSMS Dashboard</h3>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink
              to="/parkingslots"
              className={({ isActive }) =>
                isActive ? 'nav-link active text-white' : 'nav-link text-secondary'
              }
            >
              <i className="bi bi-box-seam me-2"></i> Parking Slots
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                isActive ? 'nav-link active text-white' : 'nav-link text-secondary'
              }
            >
              <i className="bi bi-car-front-fill me-2"></i> Cars
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink
              to="/parkingrecords"
              className={({ isActive }) =>
                isActive ? 'nav-link active text-white' : 'nav-link text-secondary'
              }
            >
              <i className="bi bi-clock-history me-2"></i> Parking Records
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink
              to="/payments"
              className={({ isActive }) =>
                isActive ? 'nav-link active text-white' : 'nav-link text-secondary'
              }
            >
              <i className="bi bi-currency-dollar me-2"></i> Payments
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/report"
              className={({ isActive }) =>
                isActive ? 'nav-link active text-white' : 'nav-link text-secondary'
              }
            >
              <i className="bi bi-bar-chart-line me-2"></i> Report
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Main content area */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Top Navbar */}
        <nav className="navbar navbar-expand navbar-light bg-white shadow-sm px-4">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <span className="navbar-brand mb-0 h1">Parking Slot System Management</span>
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center">
                <i className="bi bi-person-circle fs-4 me-2"></i>
                <span>Admin</span>
              </div>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa', overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
