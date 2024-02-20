import React, { useState } from 'react'
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

  return (
    <Container>
        <section className=' flex flex-col'>
            <div id='img-container' className=' m-10 flex gap-10 cursor-pointer'
                style={{
                    transform: `translateX(-${currentSlide * 39.25}%)`,
                    transition: `transform 0.5s ease`
                }}
            >
                {images.map((image, index) => (
                    <img
                        src={image}
                        alt='image'
                        className=' max-w-[45%] object-cover'
                    />
                ))}


            </div>
            <input
                className=''
                type='range'
                min={0}
                max={images.length - 1}
                value={currentSlide}
                onChange={handleSlideChange}
            />
        </section>
    </Container>
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
