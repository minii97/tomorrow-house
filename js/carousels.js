const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGallery = tns({
  container: '.user-gallery .slider-list',
  navContainer: '.user-gallery .thumbnail-list',
  gutter: 4,
  edgePadding: 16,
  controls: false,
  controlsContainer: '.user-gallery-controls',
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  responsive: {
    768: {
      edgePadding: 75,
      gutter: 6,
      controls: true,
    },
  },
})
