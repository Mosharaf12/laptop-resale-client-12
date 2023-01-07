import React from 'react';
import img1 from '../../../../assests/gallery/images1.jpg'
import img2 from '../../../../assests/gallery/images2.jpg'
import img3 from '../../../../assests/gallery/images3.jpg'
import img4 from '../../../../assests/gallery/images4.jpg'
import img5 from '../../../../assests/gallery/images5.jpg'
import img6 from '../../../../assests/gallery/images6.jpg'
import img7 from '../../../../assests/gallery/images7.jpg'
import img8 from '../../../../assests/gallery/images8.jpg'
import Zoom from 'react-reveal/Zoom';


const GallerySection = () => {
	
    return (
        <div>
           <section className="my-16 bg-blue-100 rounded-xl">
           <Zoom>
		   <h3 className='text-center text-3xl font-bold py-5  bg-blue-200 text-blue-600 rounded-t-xl shadow-lg'>LAPTOP GALLERY</h3>
		   </Zoom>
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2 p-6">
			<img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden object-cover w-full" src={img1} />
			<img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden object-cover w-full"  src={img2} />
			<img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src={img3} />
			<img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src={img4} />
			<img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src={img5} />
			<img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src={img6} />
			<img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src={img7} />
			<img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src={img8} />
		</div>
	</div>
</section>
        </div>
    );
};

export default GallerySection;