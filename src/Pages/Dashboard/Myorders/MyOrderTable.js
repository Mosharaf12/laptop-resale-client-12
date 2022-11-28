import React from "react";

const MyOrderTable = ({ myorder }) => {
  const { productname, resaleprice } = myorder;
  return (
    <tr>
      <td>{productname}</td>
      <td>{resaleprice}</td>
      <td>
        <button className="btn btn-primary btn-xs">Report</button>
      </td>
      <td>
        <button className="btn btn-error btn-md">X</button>
      </td>
      <td>
        <button className="btn btn-secondary">pay</button>
      </td>
    </tr>
  );
};

export default MyOrderTable;
