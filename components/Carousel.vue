<template>
  <VueSlickCarousel v-bind="settings">
    <div
      v-for="item in carouselItems"
      :key="item"
      :style="{ backgroundImage: `url('${item}')` }"
    >
    </div>
</VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'slick-vuejs'
import 'slick-vuejs/dist/slick-vuejs.css'
export default {
  components: { VueSlickCarousel },

  data () {
    return {
      settings:{
        lazyLoad: 'progressive',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 6000,
        infinite: true,
        arrows: false,
        pauseOnHover: false,
      },
      carouselItems: [
      '/images/carousel/3.jpg',
      '/images/carousel/2.jpg',
      '/images/carousel/1.jpg'
      ],
    };
  },
}
</script>
