import React from 'react'

function Imgcarousel() {
  return (
    <section className="text-gray-600 body-font bg-[#FEFFD2]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20" >
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">SIMPLE RECIPES MADE FOR REAL, ACTUAL, EVERYDAY LIFE.</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/imgslider1.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-[#FC4100] mb-1">HEALTHY FOOD</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">- Karen Salmansohn</h1>
                <p className="leading-relaxed">Healthy does NOT mean starving yourself EVER. Healthy means eating the right food in the right amount.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/imgslider2.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-[#FC4100] mb-1">HEALTHY FOOD</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">- Edward Stanley</h1>
                <p className="leading-relaxed">Those who think they have no time for healthy eating will sooner or later have to find time for illness.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/imgslider3.webp" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-[#FC4100] mb-1">HEALTHY FOOD</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">- Ann Wigmore</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Imgcarousel
