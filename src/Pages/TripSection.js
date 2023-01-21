import React from "react";

const TripSection = () => {
  return (
    <div
      className="hero mb-14"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/1124643920/photo/computer-laptop-and-mobile-phone-on-black-color-office-desk-banner.jpg?s=170667a&w=0&k=20&c=gdk3WIqycYb8ECawrnh0dui99mnrnlDVY2HBy-L6Xmg=")`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
     <div className="py-20">
     <div className="hero-content text-center text-neutral-content py-2">
       
       <h1 className="mb-5 text-2xl font-bold">Laptop Market</h1>
    
   </div>
   <div className="input-group">
      
 <input type="text" placeholder="Search…" className="input w-full input-bordered text-black" />
 <button className="btn btn-square bg-[#1D59A0]">
   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
 </button>
</div>
     </div>
    </div>
  );
};

export default TripSection;
