import React from 'react'

function Imgcarousel3() {
  return (
    <section className="text-gray-600 body-font bg-[#FEFFD2]">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-2/6 h-full bg-[#FC4100]"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Dinner Recipes</h1>
                        <p className="sm:w-3/5 leading-relaxed sm:pl-10 pl-0 text-[#FF7D29]">Easy Dinner Ideas Because Everything Else Is Hard Some nights a quick, simple meal is what’s in order</p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="/images/dinnerimg1.jpg" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Yogurt and Spice Roasted Salmon</h2>
                        <p className="text-base leading-relaxed mt-2 mb-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        <button type="button" class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FF7D29] text-black hover:bg-[#FFBF78] disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-scroll-inside-viewport-modal">
                            Learn More
                        </button>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="/images/dinnerimg2.jpg" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Grilled-Greens-and-Cheese-on-Toast</h2>
                        <p className="text-base leading-relaxed mt-2 mb-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        <button type="button" class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FF7D29] text-black hover:bg-[#FFBF78] disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-scroll-inside-viewport-modal">
                            Learn More
                        </button>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="/images/dinnerimg3.jpg" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Easy Grilled Salmon in Foil With Lemon-Garlic-Herb Butter</h2>
                        <p className="text-base leading-relaxed mt-2 mb-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        <button type="button" class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FF7D29] text-black hover:bg-[#FFBF78] disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-scroll-inside-viewport-modal">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section> 
  )
}

export default Imgcarousel3
