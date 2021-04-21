<template>
  <button
    v-show="visible"
    class="scroll-top"
    @click="scrollTop"
  >
    <UpArrow />
  </button>
</template>

<script>
export default {
  components: {
    UpArrow: () => import('/static/up-arrow-svgrepo-com.svg'),
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    if (window.innerWidth > 1200) {
      window.addEventListener('scroll', this.scrollListener);
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    scrollListener() {
      this.visible = window.scrollY > 350;
    },
  },
};
</script>
