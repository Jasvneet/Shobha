import React from 'react'
import Carousel from 'better-react-carousel'

const MainCarousel = () => {
    const arrowStyles = {
        background: 'black', // Set the background color to black
        color: 'white', // Set the color of the arrow to white    
      };
  return (
    <Carousel cols={2} rows={1} gap={10} loop >
      <Carousel.Item>
        <img width="100%" height="100%" src="https://www.sephora.com/contentimages/2023-6-17-multibranded-fathers-day-bundle-c-site-desktop-home-page-rwd-hero-banner-1200x800-en-us.jpg?imwidth=315" srcset="https://www.sephora.com/contentimages/2023-6-17-multibranded-fathers-day-bundle-c-site-desktop-home-page-rwd-hero-banner-1200x800-en-us.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2023-6-17-multibranded-fathers-day-bundle-c-site-desktop-home-page-rwd-hero-banner-1200x800-en-us.jpg?imwidth=630 2x" role="presentation" alt="" class="css-z3vs2m eanm77i0" data-comp="StyledComponent BaseComponent "/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="100%" src="https://www.sephora.com/contentimages/2023-6-9-isle-of-paradise-body-collection-site-desktop-mobile-home-page-rwd-hero-banner-new-1200x800-en-us-can.jpg?imwidth=315" srcset="https://www.sephora.com/contentimages/2023-6-9-isle-of-paradise-body-collection-site-desktop-mobile-home-page-rwd-hero-banner-new-1200x800-en-us-can.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2023-6-9-isle-of-paradise-body-collection-site-desktop-mobile-home-page-rwd-hero-banner-new-1200x800-en-us-can.jpg?imwidth=630 2x" role="presentation" alt="" class="css-z3vs2m eanm77i0" data-comp="StyledComponent BaseComponent "/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="100%" src="https://www.sephora.com/contentimages/2023-06-11-slotting-just-arrived-v2-standard-site-rwd-home-page-hero-banner-4-product-english-US-CA-handoff_01.jpg?imwidth=315" srcset="https://www.sephora.com/contentimages/2023-06-11-slotting-just-arrived-v2-standard-site-rwd-home-page-hero-banner-4-product-english-US-CA-handoff_01.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2023-06-11-slotting-just-arrived-v2-standard-site-rwd-home-page-hero-banner-4-product-english-US-CA-handoff_01.jpg?imwidth=630 2x" role="presentation" alt="" class="css-z3vs2m eanm77i0" data-comp="StyledComponent BaseComponent "/>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="100%" src="https://www.sephora.com/contentimages/2023-june-spf-site-home-page-hero-banner-under-25-us1.jpg?imwidth=315" srcset="https://www.sephora.com/contentimages/2023-june-spf-site-home-page-hero-banner-under-25-us1.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2023-june-spf-site-home-page-hero-banner-under-25-us1.jpg?imwidth=630 2x" loading="lazy" role="presentation" alt="" class="css-z3vs2m eanm77i0" data-comp="Image StyledComponent BaseComponent "/>
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}

export default MainCarousel;