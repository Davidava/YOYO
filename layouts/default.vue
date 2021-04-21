<template>
  <div class="app">
    <div class="header">
      <Header @showSidebar="showSidebar" />
    </div>
    <Sidebar
      :sidebar-active="sidebarActive"
      @hideSidebar="hideSidebar"
    />
    <main class="main">
      <Nuxt />
      <ScrollTop />
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>

export default {
  components: {
    Header: () => import('../components/Header'),
    Sidebar: () => import('../components/Sidebar'),
    Footer: () => import('../components/Footer'),
    ScrollTop: () => import('../components/Scroll-top'),
  },

  data() {
    return {
      sidebarActive: false,
    };
  },
  beforeUnmount() {
    window.removeEventListener('click', () => {});
  },

  methods: {
    showSidebar() {
      document.body.classList.add('show-sidebar');
      this.sidebarActive = true;
      window.addEventListener('click', this.clickOutside);
    },

    hideSidebar() {
      document.body.classList.remove('show-sidebar');
      this.sidebarActive = false;
      window.removeEventListener('click', this.clickOutside);
    },

    clickOutside(ev) {
      const area = document.querySelector('.sidebar');
      const burger = document.querySelector('.burger');
      if (!burger.contains(ev.target)) {
        if (!area.contains(ev.target)) {
          this.hideSidebar();
        }
      }
    },
  },
};
</script>
