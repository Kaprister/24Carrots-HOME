import React from 'react'

function Footer() {
  return (
    <>
        <footer className=' bg-[#E9E4E0] flex flex-col gap-5 px-5 pb-16'>
            <section className=' flex flex-col md:flex-row gap-5 pt-20 pb-10 items-center pl-10'>
                <div className=' w-full md:w-1/3 flex flex-col items-center md:items-start gap-5 '>
                    <div className=' flex flex-col w-[220px]'>
                        <h1 className=' tracking-widest uppercase font-semibold text-[30px]'>24 Carrots</h1>
                        <p className=' tracking-wider text-center uppercase text-gray-400'>catering & events</p>
                    </div>
                    <p className=' font-light text-center md:text-start text-gray-700 font-sans'>The event specialists at our Southern California headquarters are available to help with every aspect of your event.</p>
                    <div className=' h-[1px] bg-green-600'></div>
                </div>
                <div className=' w-full md:w-2/3 flex flex-wrap gap-16 justify-center items-center md:items-start'>
                    <div className=' flex flex-col gap-5'>
                        <h2 className=' font-medium'>About <span className=' text-[#b8562c]'>→</span></h2>
                        <div className=' font-sans'>
                            <p>About 24 Carrots</p>
                            <p>Meet the Team</p>
                            <p>Awards & Press</p>
                            <p>Blog</p>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <h2 className=' font-medium'>Services <span className='text-[#b8562c]'>→</span></h2>
                        <div className=' font-sans'>
                            <p>Gourmet Catering</p>
                            <p>Bar Service</p>
                            <p>Staffing</p>
                            <p>Production</p>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <h2 className=' font-medium'>Events <span className='text-[#b8562c]'>→</span></h2>
                        <div className=' font-sans'>
                            <p>Weddings</p>
                            <p>Corporate</p>
                            <p>Social</p>
                            <p>Gallery</p>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <h2 className=' font-medium'>Venues <span className='text-[#b8562c]'>→</span></h2>
                        <h2 className=' font-medium'>Careers <span className='text-[#b8562c]'>→</span></h2>
                        <h2 className=' font-medium'>Contact <span className='text-[#b8562c]'>→</span></h2>
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <h2 className=' font-medium'>Follow Us <span className='text-[#b8562c]'>→</span></h2>
                        <div className=' font-sans'>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Pinterest</p>
                            <p>Linkedin</p>
                        </div>
                    </div>
                </div>
            </section>

                <div className=' h-[1px] bg-green-600 w-full'></div>
                <div className=' flex flex-col md:flex-row gap-8 md:gap-0 justify-center items-center md:items-start md:justify-between'>
                    <p className=' font-thin'>© 2023 24 Carrot Catering & Events. All rights reserved.</p>
                    <p>ADA Accessibility Policy . Privacy Policy</p>
                </div>
        </footer>
    </>
  )
}

export default Footer
