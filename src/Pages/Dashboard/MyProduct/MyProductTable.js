import React from "react";

const MyProductTable = ({ myproduct }) => {
  const { name, picture, resaleprice, _id } = myproduct;

  return (
    <tr className="hover">
      <td>
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={picture} alt='' />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{resaleprice}</td>
      <td>
        <button className="btn btn-error btn-md">Delete</button>
      </td>
    </tr>
  );
};

export default MyProductTable;
