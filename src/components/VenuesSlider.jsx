import React, { useEffect, useState } from 'react'
import styled from "styled-components";

const images = [
    "https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg",
    "https://24carrots.com/wp-content/uploads/2023/09/MAIN.jpg",
    "https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-4.jpg",
    "https://24carrots.com/wp-content/uploads/2023/08/7-31-5.png",
    "https://24carrots.com/wp-content/uploads/2023/08/9-7.jpg",
    "https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-3.jpg",
    "https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN.jpg"
]

function VenuesSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (event) => {
        setCurrentSlide(parseInt(event.target.value));
    }

    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {
        setIsPlaying(true);
    };
    
    useEffect(() => {
        
    }, [isPlaying]);


  return (
    <div className=' relative w-full'>
        <div className=' absolute -z-20 bg-[#cbedd1] w-full h-[75%] md:h-[65%] md:mt-[25%]'></div>
        <Container className=' flex flex-col h-full'>
            <section className=' flex flex-col z-10'>
                <div id='img-container' className=' m-10 flex gap-10 cursor-pointer'
                    style={{
                        transform: `translateX(-${currentSlide * 39.25}%)`,
                        transition: `transform 0.5s ease`
                    }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt='image'
                            className=' max-w-[45%] object-cover'
                        />
                    ))}


                </div>
                <input
                    className=' bg-transparent'
                    type='range'
                    min={0}
                    max={images.length - 1}
                    value={currentSlide}
                    onChange={handleSlideChange}
                />
            </section>

            <section className=' flex flex-col mt-20 z-10'>
                <div className=' flex flex-col gap-10 justify-center items-center'>
                    <h1 className='text-green-900 text-center font-bold text-[50px] md:text-[70px]'>Far More Than<br/> Just Business</h1>
                    <p className=' font-light font-sans text-center w-[60%]'>The way you do anything is the way you do everything. We haven’t cracked the code on catering; we simply care unreasonably about every aspect of what we do. We care about people as much as we care about details, and we absolutely refuse to compromise on making your day anything but the best. We’ve got your back from the initial idea to the final farewell!</p>
                </div>
            </section>

 

            <section className=" relative flex justify-center items-center m-20 z-10">
                    {/* Image as background */}
                    <img
                        src="https://i.ytimg.com/vi/7gPP9hsV4a0/maxresdefault.jpg"
                        className={`w-full h-full object-cover cursor-pointer z-10`}
                        alt="YouTube Video Background"
                        onClick={playVideo}
                    />

                    {/* Video container */}
                    <div className={` absolute inset-0 ${isPlaying ? "z-20" : "-z-20"}`}>
                    {isPlaying && (
                        <div className="absolute inset-0 top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 w-full h-full">
                            <div className=" w-full h-full">
                                <iframe
                                    title="YouTube Video"
                                    src="https://www.youtube.com/embed/7gPP9hsV4a0?autoplay=1&amp;enablejsapi=1&amp;cc_load_policy=0&amp;iv_load_policy=1&amp;loop=0&amp;modestbranding=1&amp;fs=1&amp;playsinline=0&amp;controls=1&amp;color=red&amp;cc_lang_pref=&amp;rel=0&amp;autohide=2&amp;theme=dark&amp;"
                                    frameBorder="0"
                                    allowFullScreen
                                    className=' w-full h-full'
                                >
                                </iframe>
                            </div>
                        </div>
                    )}
                    </div>

                    {/* Button to play video */}
                    {!isPlaying && (
                        <button
                            onClick={playVideo}
                            className= {` absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
                            aria-label="Play"
                        >
                            <svg data-no-lazy="1" height="100%" version="1.1" viewBox="0 0 68 48" width="50%">
                            {/* <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#ffffff00"></path> */}
                                <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                            </svg>
                        </button>
                    )}
                </section>

        </Container>
    </div>
  )
}



const Container = styled.div`

    img {
        transition: filter 1s ease;
    }

    img:hover {
        filter: sepia(50%) contrast(100%) saturate(200%) hue-rotate(45deg);
    }

    input[type=range] {
        height: 0.75rem;
        -webkit-appearance: none;
        margin: 0 auto;
        width: 20%;
        cursor: grab;
    }
    input[type=range]:focus {
        outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        /* cursor: pointer; */
        animate: 0.2s;
        box-shadow: 1px 1px 1px #50555C;
        background: #21321C;
        border-radius: 12px;
        border: 0px solid #000000;
    }
    input[type=range]::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 0px solid #000000;
        height: 8px;
        width: 50px;
        border-radius: 10px;
        background: #21321C;
        /* cursor: pointer; */
        -webkit-appearance: none;
        margin-top: -3px;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #21321C;
    }

    input[type=range]::-moz-range-track {
        width: 100%;
        height: 2px;
        /* cursor: pointer; */
        animate: 0.2s;
        box-shadow: 1px 1px 1px #50555C;
        background: #21321C;
        border-radius: 12px;
        border: 0px solid #000000;
    }
    input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 8px;
    width: 50px;
    border-radius: 10px;
    background: #21321C;
    cursor: pointer;
    }
    input[type=range]::-ms-track {
    width: 100%;
    height: 2px;
    /* cursor: pointer; */
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
    }
    input[type=range]::-ms-fill-lower {
    background: #21321C;
    border: 0px solid #000000;
    border-radius: 24px;
    box-shadow: 1px 1px 1px #50555C;
    }
    input[type=range]::-ms-fill-upper {
    background: #21321C;
    border: 0px solid #000000;
    border-radius: 24px;
    box-shadow: 1px 1px 1px #50555C;
    }
    input[type=range]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 8px;
    width: 50px;
    border-radius: 10px;
    background: #21321C;
    /* cursor: pointer; */
    }
    input[type=range]:focus::-ms-fill-lower {
    background: #21321C;
    }
    input[type=range]:focus::-ms-fill-upper {
    background: #21321C;
    }

`;





export default VenuesSlider
