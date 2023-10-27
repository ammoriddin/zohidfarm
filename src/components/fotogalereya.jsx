import React, { useState } from 'react'
import gallery1 from '../assets/gallery-slide-1.jpg'
import gallery2 from '../assets/gallery-slide-2.jpg'
import gallery3 from '../assets/gallery-slide-3.jpg'
import gallery4 from '../assets/gallery-slide-4.jpg'
import gallery5 from '../assets/gallery-slide-5.jpg'
import { useTranslation } from "react-i18next"

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

export default function FotoGalereya() {
  const [t, i18n] = useTranslation("global")
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const imageCards = images.map((image) => (
    <img className="h-[100%] rounded-xl w-[100%] object-cover object-center" onClick={() => showImage(image)} src={image} />
  ));

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <div className='py-10' id='photos'>
        <div className='container'>
            <h1 className='text-[22px] sm:text-[25px] md:text-[30px] lg:text-[45px] mb-10 font-[600] text-center text-[#121212] w-[60%] block mx-auto'>{t("photos.h1")}</h1>
            <div className='flex flex-wrap gap-2 w-full items-center'>
                <div className='w-[100%] flex justify-center flex-wrap'>
                    <div className='w-[50%] h-[650px]'>
                        {imageCards[0]}
                    </div>
                </div>
            </div>
            {
            lightboxDisplay ? 
            <div id="lightbox" onClick={hideLightBox}>
            <button className='next' onClick={showPrev}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <img id="lightbox-img" src={imageToShow}></img>
            <button className='prev' onClick={showNext}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            </div>
        : ""
        }
        </div>
    </div>
  )
}
