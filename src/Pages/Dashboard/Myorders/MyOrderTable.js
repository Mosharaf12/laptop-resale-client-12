import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";

const MyOrderTable = ({ myorder }) => {
  const {user} = useContext(AuthContext);
  const { _id, productname, resaleprice} = myorder;
 
 

  const handleRemoveItem = (id)=>{

      fetch(`http://localhost:5000/booking?id=${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
        toast.success('Product deleted!')
        
        }
      })
    
  }
  return (
    <tr>
      <td>{productname}</td>
      <td>{resaleprice}</td>
      <td>
        <button className="btn btn-primary btn-xs">Report</button>
      </td>
      <td>
        <button onClick={()=> handleRemoveItem(_id)} className="btn btn-error btn-md">X</button>
      </td>
      <td>
        <button className="btn btn-secondary">pay</button>
      </td>
    </tr>
  );
};

export default MyOrderTable;
