import React, { useState } from 'react'
import img1 from "../images/illustration-features-tab-1.svg"
import img2 from "../images/illustration-features-tab-2.svg"
import img3 from "../images/illustration-features-tab-3.svg"

const data = [
    {
        id: 1,
        title: "Bookmark in one click",
        desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        link: "More Info",
        button: "Simple Bookmarking",
        image: img1

    },
    {
        id: 2,
        title: "Intelligent search",
        desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        link: "More Info",
        button: "Speedy Searching",
        image: img2

    },
    {
        id: 3,
        title: "Share your bookmarks",
        desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        link: "More Info",
        button: "Easy Sharing",
        image: img3

    }
]

const Tabs = () => {
    const [tabs] = useState(data);
    const [value, setValue] = useState(0);

    const { title, desc, link, image } = tabs[value];

    return (
        <>
            <section className='max-w-7xl mx-auto px-8 py-20'>
                <article className='text-center'>
                    <h2 className='text-3xl mb-8 lg:text-4xl'>Features</h2>
                    <p className='w-96 mx-auto tex'>
                        Our aim is to make it quick and easy for you to access your favourite websites.
                        Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                </article>

                <div>
                    <ul className='flex justify-center flex-col text-center my-10 md:flex-row'>
                        {tabs.map((tab, index) => (
                            <li key={tab.id} className='border-t border-slate-400 last:border-b md:border-t-0 md:border-b'>
                                <button className={`py-3 md:px-6 ${index === value && "border-b-2 border-red-400"}`} 
                                onClick={() => setValue(index)}>{tab.button}</button>
                            </li>
                        ))}
                    </ul>

                    <div className='lg:flex items-center justify-center pt-10 lg:gap-16  max-w-7xl mx-auto'>
                        <article className='lg:flex-1 relative'>
                            <img src={image} className='block mx-auto w-full' alt={title} />
                            <div className="bg-left"></div>
                        </article>

                        <article className='text-center lg:text-left lg:flex-1'>
                            <h2 className='text-3xl my-8 lg:text-4xl mt-16 mb-8'>{title}</h2>
                            <p className='mb-10'>{desc}</p>
                            <button className='btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75'>{link}</button>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tabs
