// components/Report.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Report() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/report')
      .then(res => setReport(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Parking Report</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Plate Number</th>
              <th>Driver Name</th>
              <th>Phone Number</th>
              <th>Entry Time</th>
              <th>Exit Time</th>
              <th>Duration</th>
              <th>Slot Number</th>
              <th>Amount Paid</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {report.map((row, index) => (
              <tr key={index}>
                <td>{row.plateNumber}</td>
                <td>{row.DriveName}</td>
                <td>{row.PhoneNumber}</td>
                <td>{row.EntryTime}</td>
                <td>{row.ExitTime}</td>
                <td>{row.Duration}</td>
                <td>{row.slotNumber}</td>
                <td>{row.AmountPaid}</td>
                <td>{row.PaymentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Report;
