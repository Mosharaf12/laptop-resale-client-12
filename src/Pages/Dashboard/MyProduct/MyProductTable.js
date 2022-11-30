import React from "react";
import toast from "react-hot-toast";

const MyProductTable = ({ myproduct }) => {
  const { name,advertising, picture, resaleprice, _id } = myproduct;


  const handleDeleteItem = id =>{
    const getPermission = window.confirm('Are you sure want to delete this product?')
  if(getPermission){
    fetch(`http://localhost:5000/myproduct?id=${id}`,{
      method: "DELETE",

    })
    .then(res=> res.json())
    .then(data=> {
      if(data.deletedCount > 0){
        console.log(data);
        toast.success('deleted success')
      }

    })
  }

  }

  const handleAdvertising = (id) => {
        fetch(`http://localhost:5000/myproduct?id=${id}`, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Advertised success')
            }
            
        })
    
}

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
        <button onClick={()=> handleDeleteItem(_id)} className="btn btn-error btn-md">Delete</button>
      </td>
      <td>
        {
          advertising ?
          <button disabled className="btn btn-error btn-md">Advertising</button>
          :
          <button onClick={()=> handleAdvertising(_id)} className="btn btn-error btn-md">Advertising</button>

        }
      </td>
    </tr>
  );
};

export default MyProductTable;
