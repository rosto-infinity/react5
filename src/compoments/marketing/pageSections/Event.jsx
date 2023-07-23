import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel'
import '../../../css/carousel.css'
import Image1 from '../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg'
import Image2 from '../../../medias/images/products/Product-1.jpg'
import Image3 from '../../../medias/images/products/Product-2.jpg'
import Heading from '../../elements/DisplayTitles/Heading'

const Slide = ({children, category, title, image, alt }) => {
  return(
    <div className="grid md:grid-cols-2 p-3 md:p-6">
      <div className="p-5 md:p-10 md:mb-10">
        <Heading variant="h4">
          {category}
        </Heading>
        <Heading theme="secondary" variant="h3" className="mb-5">
          {title}
        </Heading>
        <p className="tracking-wide text-lg leading-relaxed font-light text-gray-800 mb-0 md:mb-10">
          {children} 
        </p>
      </div>
      <div className="relative w-full h-96 md:h-full">
        <img src={image} alt={alt} className="bg-primary absolute top-0 left-0 w-full h-full object-cover object-bottom z-0" />
      </div>
    </div>
  )
}

export default function Event() {

  const items = [
    <Slide
      image={Image1}
      alt="description de l'image"
      category="événement à venir"
      title="vivez la demi-finale"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
    </Slide>,
    <Slide
      image={Image2}
      alt="description de l'image"
      category="Nouveau burger"
      title="découvrez le killer burger"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
    </Slide>,
    <Slide
      image={Image3}
      alt="description de l'image"
      category="Nouvelle recette"
      title="Le végéBurger arrive"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
    </Slide>
  ];

  return (
    <Container>
      <div className="shadow-2xl mb-20 border border-white-rosto-200">
        <AliceCarousel 
          mouseTracking 
          items={items} 
          autoPlay
          infinite
          autoPlayInterval="4000"
          disableButtonsControls
          animationType="fadeout" 
        />
      </div>
    </Container>
  )
}
