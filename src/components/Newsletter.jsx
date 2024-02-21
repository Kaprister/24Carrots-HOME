import React from 'react'

function Newsletter() {
  return (
    <section className=' flex flex-col md:flex-row mt-20'>
        <div className=' w-full md:w-[50%] bg-[#dc6431] flex flex-col gap-10 justify-center items-center pb-12 pt-10 md:pb-0 md:pt-0'>
            <div className=' w-[80%] text-white flex flex-col gap-7'>
                <h2 className=' text-[55px] font-semibold'>Endless Inspiration</h2>
                <p className=' text-left font-light'>Sign up to our newsletter for fresh updates, encouragement, and exclusive insights.</p>
                <div className=' flex gap-5'>
                    <input
                        type='text'
                        placeholder='Enter your Email'
                        className=' rounded-3xl p-2 w-[70%] text-black text-center placeholder:text-[#d56231]'
                        id='email'
                    />
                    <button className=' feature-btn flex justify-center items-center font-sans w-[30%] bg-[#9c4823] text-center uppercase hover:bg-[#b8562c] rounded-3xl'>sign up 
                    <span className='arrow-animation'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </span>
                    </button>
                </div>
                <p className=' font-thin'>By clicking Sign Up you’re confirming that you agree with our Terms and Conditions.</p>
            </div>
        </div>
        <div className=' w-full md:w-[50%] '>
            <img
                src="https://24carrots.com/wp-content/uploads/2023/08/signup.png"
                alt='img'
            />
        </div>
    </section>
  )
}

export default Newsletter
