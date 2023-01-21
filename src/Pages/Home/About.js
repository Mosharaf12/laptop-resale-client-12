import React from 'react';
import { Zoom } from 'react-reveal';
const About = () => {
    return (
        <div className='py-32 min-h-screen'>
            <Zoom>
            {/* <h3 className='text-center text-3xl font-bold text-blue-600 mb-12'>coming soon...</h3> */}
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-blue-100 text-gray-800">
            <Zoom>
		   <h3 className='text-center text-3xl font-bold pt-0 pb-14 text-blue-600'>ABOUT</h3>
		   </Zoom>
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://w0.peakpx.com/wallpaper/440/261/HD-wallpaper-keyboard-laptop-gradient-colorful-technology.jpg" alt="" className="w-full rounded-md h-60 sm:h-96 bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Laptop Market</a>
				<p className="text-xs text-gray-600">A resale market, also known as a secondary market, is a market where goods that were previously owned by someone else are bought and sold. This can include items such as clothing, furniture, electronics, and even cars and real estate. Resale markets can take place online, through platforms such as eBay and Craigslist, or offline, through garage sales, flea markets, and cons
				</p>
			</div>
			<div className="text-gray-800">
				<p>Thanks for with us!</p>
			</div>
		</div>
	</div>
</div>
            </Zoom>
        </div>
    );
};

export default About;