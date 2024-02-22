import React, { useState } from 'react'
import styled from "styled-components";


const testimonial = [
    {
        id : 1,
        image : "https://24carrots.com/wp-content/uploads/2023/10/4.2-Lorely-Meza.jpg",
        desc : "“The staff was top-notch – professional, hardworking, and just a pleasure to work&nbsp;with.”",
        owner : "Robin",
        tag : "Executive Assistant, Corelogic",
    },
    {
        id : 2,
        image : "https://24carrots.com/wp-content/uploads/2023/10/4.1-Kay-McCoy.jpg",
        desc : "“I could not stop getting compliments on how delicious the food was! My [guests] still texted me the day after to tell me that the food was amazing.”",
        owner : "Amanda & Jethro",
        tag : "The Colony House",
    },
    {
        id : 3,
        image : "https://24carrots.com/wp-content/uploads/2023/10/4.3-Desert-Born-Studios.jpg",
        desc : "“From the moment we inquired with the venue, through all the planning, execution, and clean-up of the wedding day, we had an amazing experience working with the team.”",
        owner : "Kellie & Paul",
        tag : "Franciscan Gardens",
    },
    {
        id : 4,
        image : "https://24carrots.com/wp-content/uploads/2023/10/4.4-Lorely-Meza.jpg",
        desc : "“24 Carrots made our week-long event a stress-free and successful one!”",
        owner : "Kimberly",
        tag : "Creston",
    }
]

function TestimonialSec() {
    const [selectedImage, setSelectedImage] = useState(0)
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const handleNextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonial.length )
    }

    const handlePrevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => {
            if(prevIndex === 0){
                return testimonial.length - 1;
            }else {
                return prevIndex - 1;
            }
        })
    }

  return (
    <>
        <Container className=' mt-20 relative '>
            <div className=' -z-20 absolute bg-[#1A4122] w-full h-full'></div>
            <img
                className=' z-10 absolute -top-14 left-[50%] -translate-x-1/2'
                src='https://24carrots.com/wp-content/themes/24carrots/img/24cemblem.svg'
                alt='logo24'
            />
            <div className=' z-10 p-10 pt-20 text-white flex flex-col gap-16'>
                <div className=' flex flex-col justify-center items-center gap-7'>
                    <h1 className=' font-semibold text-[60px]'>Our Happy Clients</h1>
                    <p className=' font-sans text-center w-[50%] text-[#96ba9d]'>Food may be our love language, but words of affirmation always make us ecstatic! Read what our happy clients have to say about how we made their day great.</p>
                </div>

                <div className=' z-10 flex '>
                    <div className='testimonial-container flex flex-col md:flex-row gap-10'>
                        <div className=' w-full md:w-1/2'>
                            <img
                                className='testimonial-image w-full h-[300px] md:h-[500px] object-cover'
                                src={testimonial[currentTestimonialIndex].image} alt='testimonial'
                            />
                        </div>

                        <div className=' w-full md:w-1/2 testimonial-content flex flex-col justify-center items-center md:items-start gap-5 md:gap-10'>
                            <h2 className=' font-bold text-[30px] text-center md:text-start'>{testimonial[currentTestimonialIndex].desc}</h2>
                            <div className=' flex flex-col justify-center items-center md:items-start md:justify-start gap-1'>
                                <h2 className='tracking-widest font-semibold text-lg uppercase font-medium'>{testimonial[currentTestimonialIndex].owner}</h2>
                                <p className=' tracking-wide text-[#96ba9d]' >{testimonial[currentTestimonialIndex].tag}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=' z-10 md:w-1/2 md:px-5 md:absolute right-0 bottom-14 flex justify-between items-center'>

                    <div className=' flex md:hidden items-center gap-3 content-end'>
                        <button
                            onClick={handlePrevTestimonial}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34" fill='#fff'><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                        </button>
                    </div>

                    <ol className=' flex gap-3 justify-center m-4 content-start'>
                        {testimonial.map((_, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer w-[30px] h-[2px] ${currentTestimonialIndex === index ? 'bg-[#f9f9f9]' : 'bg-[#627969] '}`}
                                onClick={() => setCurrentTestimonialIndex(index)}
                            />
                        ))}
                    </ol>

                    <div className=' flex items-center gap-3 content-end'>
                        <h3 className=' hidden md:block uppercase font-mono'>next testimonial</h3>
                        <button
                            onClick={handleNextTestimonial}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34" fill='#fff'><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

const Container = styled.div`
`;

export default TestimonialSec




























// {testimonial.map((item) => (
//     <div
//         key={item.id}
//         className=' flex gap-10'
//     >
//         <img src={item.image}  alt='image'/>

//         <div className=' flex gap-6 flex-col justify-start'>
//             <h2 className=' font-bold'>{item.desc}</h2>
//             <div className=' flex flex-col justify-start gap-1'>
//                 <h2 className=' font-medium'>{item.owner}</h2>
//                 <p>{item.tag}</p>
//             </div>
//         </div>
//     </div>
// ))}