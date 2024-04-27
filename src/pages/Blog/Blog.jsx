import React from 'react';

const Blog = () => {
    return (
        <main className="sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto">
            <div className='mt-40 w-max mx-auto blog-container  relative pb-40'>
                <div className="sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1210px] lg:container grid md:grid-cols-2 grid-cols-1 gap-y-52 gap-x-5 justify-between items-start">
                    <div className='w-[300px] md:w-[340px] lg:w-[400px] xl:w-[550px] h-[185px] lg:h-[365px] rounded-lg'>
                        <img className='' src="https://kofe.al/storage/images/users_posts/1wtFgyIKxPvorJtbX9LwMvG2gCZMHASwFSXKBwt1.jpg" alt="Kassir Qızın Təbəssümü" />
                        <h1 className='text-[33px] font-semibold'>Kassir Qızın Təbəssümü</h1>
                        <p className='text-[15px] font-medium'>Daha çox →</p>
                    </div>
                    <div className='justify-end items-start flex flex-col gap-y-4'>
                        <div className='flex justify-center items-center'>
                            <img className='w-[150px] lg:w-[200px] xl:w-[350px] h-[119px] xl:h-[198px] lg:h-[142px] rounded-lg' src="https://kofe.al/storage/images/users_posts/ki8myVKIHvfJIFM0jyrwCBcMRFTuNMqy9oKdTXgO.jpg" alt="Kassir Qızın Təbəssümü" />
                            <div className='flex flex-col ml-5'>
                                <h1 className='text-sm lg:text-[20px] font-bold'>Təyyarənin Apardığı Yer</h1>
                                <p className='text-[15px] font-medium'>Daha çox →</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img className='w-[150px] lg:w-[200px] xl:w-[350px] h-[119px] xl:h-[198px] lg:h-[142px] rounded-lg' src="https://kofe.al/storage/images/users_posts/ax69iwr4r2mgvbCjmD3X5AIY2khndu6KYQafHbld.jpg" alt="Kassir Qızın Təbəssümü" />
                            <div className='flex flex-col ml-5'>
                                <h1 className='text-sm lg:text-[20px] font-bold'>Təyyarənin Apardığı Yer</h1>
                                <p className='text-[15px] font-medium'>Daha çox →</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img className='w-[150px] lg:w-[200px] xl:w-[350px] h-[119px] xl:h-[198px] lg:h-[142px] rounded-lg' src="https://kofe.al/storage/images/users_posts/FlFpXwCFxyIuHvqwAdDVifiUDr2trRn0I7dQdsHP.jpg" alt="Kassir Qızın Təbəssümü" />
                            <div className='flex flex-col ml-5'>
                                <h1 className='text-sm lg:text-[20px] font-bold'>Təyyarənin Apardığı Yer</h1>
                                <p className='text-[15px] font-medium'>Daha çox →</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Blog;

