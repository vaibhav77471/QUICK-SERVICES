import React from 'react';

const Dashboard = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-12 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(45deg, #ff5733, #f5ff33, #33ff57, #33f5ff)', minHeight: '100vh' }}>
          <div className="text-center">
            <h1 className="dashboard-title text-white">
              <span className="text-primary">Q</span>
              <span className="text-danger">U</span>
              <span className="text-warning">I</span>
              <span className="text-success">C</span>
              <span className="text-info">K</span> SERVICES Dashboard
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
