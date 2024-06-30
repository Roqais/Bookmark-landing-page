import React from 'react'
import chrome from "../images/logo-chrome.svg"
import opera from "../images/logo-opera.svg"
import firefox from "../images/logo-firefox.svg"
import dots from "../images/bg-dots.svg"


 

const Download = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto px-8 py-20">
                <article className='text-center mb-10'>
                    <h2 className="text-3xl my-8 lg:text-4xl">Download the extension</h2>
                    <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve
                        got a favourite you’d like us to prioritize.</p>
                </article>

                <article className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {/* Chrome */}
                    <div className='bg-white shadow-xl text-center p-8 rounded'>
                        <img src={chrome} className='block mx-auto mb-6' alt="" />
                        <h3 className='text-xl mb-4'>Add to Chrome</h3>
                        <p className='text-sm'>Minimum version 62</p>
                        <img src={dots} className='block mx-auto my-6' alt="" />
                        <button className='btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75'>Add & Install Extension</button>
                    </div>

                    {/* FireFox */}
                    <div className='bg-white shadow-xl text-center p-8 rounded lg:transform lg:translate-y-10'>
                        <img src={firefox} className='block mx-auto mb-6' alt="" />
                        <h3 className='text-xl mb-4'>Add to Firefox</h3>
                        <p className='text-sm'>Minimum version 55</p>
                        <img src={dots} className='block mx-auto my-6' alt="" />
                        <button className='btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75'>Add & Install Extension</button>
                    </div>

                    {/* Opera */}
                    <div className='bg-white shadow-xl text-center p-8 rounded lg:transform lg:translate-y-20'>
                        <img src={opera} className='block mx-auto mb-6' alt="" />
                        <h3 className='text-xl mb-4'>Add to Opera</h3>
                        <p className='text-sm'>Minimum version 46</p>
                        <img src={dots} className='block mx-auto my-6' alt="" />
                        <button className='btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75'>Add & Install Extension</button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Download