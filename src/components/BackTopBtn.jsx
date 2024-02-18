import React, { useEffect, useState } from 'react'

function BackTopBtn() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const scrollFunction = () => {
            if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", scrollFunction);

        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };

    },[])

    const toTopFunction = () => {
        window.scrollTo({top : 0, behavior : 'smooth'});
    }

  return (
    <>
        <button className={`${isVisible ? "block" : "hidden"} fixed bottom-[-2px] left-[50%] transform -translate-x-[50%] cursor-pointer`}
            onClick={toTopFunction}
        >
            <img src='https://24carrots.com/wp-content/themes/24carrots/img/back_to_top.svg' alt='backToTop'/>
        </button>
    </>
  )
}

export default BackTopBtn
