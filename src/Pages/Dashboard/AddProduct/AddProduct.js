import React from 'react';

const AddProduct = () => {
    const handleSubmit=event=>{
        event.preventDefault()
        const form = event.target;
        const brandname = form.brandname.value;
        const image = form.image.files[0]
        console.log(brandname,image);

    }
    return (
        <div className='flex mb-12 mt-5'>
        <div className='shadow-xl p-10'>
            <h3 className='text-3xl text-bold text-center'>Please Add Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">BrandName</span></label>
                    <input name='brandname' type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Picture</span></label>
                    <input name='image' type='file' className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">SellerName</span></label>
                    <input name='sellername' type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input name='location' type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resaler Price</span></label>
                    <input name='resalerprice' type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">OriginalPrice</span></label>
                    <input name='originalprice' type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Years of Use</span></label>
                    <input name='yearsofuse' type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <input name='description' type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Categorey</span></label>
                    <select name='categorey' className="select select-bordered w-full max-w-xs">
                         <option>Dell</option>
                         <option>Lenovo</option>
                         <option>Acer</option>
                    </select>
                </div>
               
                <input className='btn btn-accent w-full mt-5' type="submit" value='Add new product'/>
       
            </form>
           

        </div>
    </div>
    );
};

export default AddProduct;