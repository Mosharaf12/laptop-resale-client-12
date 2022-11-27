
import React,{useContext} from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {

    const permission = window.confirm('sure to add this product?')
    const {user} = useContext(AuthContext)
    const imageHostingKey = process.env.REACT_APP_imgbb_key;

    const handleSubmit=event=>{
        event.preventDefault()
        const form = event.target;
        const brandname = form.brandname.value;
        const image = form.image.files[0]
        const sellername = form.sellername.value;
        const location = form.location.value;
        const resaleprice = form.resaleprice.value;
        const originalprice = form.originalprice.value;
        const yearsofuse = form.yearsofuse.value;
        const description = form.description.value;
        const categorey = form.categorey.value;
        // console.log(brandname,image,sellername,location,resalerprice,originalprice,yearsofuse,description,categorey);

        
         
        const formData = new FormData()
        formData.append('image',image)
        const url =`https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url,{
           method: "POST",
           body: formData
   
        })
        .then(res=> res.json())
        .then(imgData=> {
            console.log(imgData)
            if(imgData.success){

                const newdata={
                    name: brandname,
                    picture: imgData.data.url,
                    sellername,
                    location,
                    resaleprice,
                    originalprice,
                    yearsofuse,
                    categorey,
                    description,
                    user: user.email,
                }
                if(permission){
                    fetch(`http://localhost:5000/usedlaptop`,{
                        method: "POST",
                        headers:{
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newdata)
                    })
                    .then(res=> res.json())
                    .then(data=> {
                        console.log(data)
                    })
                }
            }

        })

    }
    return (
      <div>
          <div className='flex mb-12 mt-5'>
        <div className='shadow-xl p-10 border border-2'>
            <h3 className='text-3xl text-bold text-center'>Please Add Product</h3>
            <form onSubmit={handleSubmit}>
             <div className='md:flex gap-10'>
                   {/* left side  */}
               <div className='md:w-1/2 '>
               <div className="form-control w-full">
                    <label className="label"> <span className="label-text">BrandName</span></label>
                    <input name='brandname' type='text' className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Picture</span></label>
                    <input name='image' type='file' className="file-input file-input-bordered file-input-info w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">SellerName</span></label>
                    <input name='sellername' type='text' className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input name='location' type='text' className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Categorey</span></label>
                    <select required name='categorey' className="select select-bordered w-full"> 
                         <option value='Dell'>Dell</option>
                         <option value='Lenovo'>Lenovo</option>
                         <option value='Acer'>Acer</option>
                    </select>
                </div>
               </div>
               {/* Right side  */}
               <div className='md:w-1/2'>
               <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input name='resaleprice' type='text' className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">OriginalPrice</span></label>
                    <input name='originalprice' type='text' className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Years of Use</span></label>
                    <input name='yearsofuse' type='text' className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea  name='description' type='text' className="input input-bordered w-full h-32" required />
                </div>
              
               </div>
             </div>
               
                <input className='btn btn-primary text-white w-full mt-5' type="submit" value='Add new product'/>
       
            </form>
           

        </div>
    </div>
      </div>
    );
};

export default AddProduct;