<template>
  <button
    class="scroll-top"
    @click="scrollTop"
    v-show="visible"
  >
  <UpArrow/>
  </button>
</template>

<script>
export default {
  components: {
    UpArrow:() => import('/static/up-arrow-svgrepo-com.svg')
  },
  data () {
    return {
      visible: false,
      image: '/scroll-top.png',
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    scrollListener(e) {
      console.log(window.innerWidth)
        this.visible = window.scrollY > 350
      }
  },
  mounted() {
    if(window.innerWidth>1200) {
      window.addEventListener('scroll', this.scrollListener)
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>