<template>
  <div class="app">
     <div class="header">
       <Header/>
     </div>
    <Sidebar id="sidebar"/>
    <main class="main">
      <Nuxt />
    </main>
    <ScrollTop/>
    <footer class="footer">
      <Footer/>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components:{
    Header:() => import('../components/Header'),
    Sidebar:() => import('../components/Slidebar'),
    Footer:() => import('../components/Footer'),
    ScrollTop:() => import('../components/Scroll-top')
  },

  computed:{
    ...mapGetters({
      sidebarActive:'sidebar/active',
    })
  },

  watch:{
    sidebarActive() {
      if (this.sidebarActive) {
        window.addEventListener('click', this.somefunc )
        document.body.style.overflow = 'hidden';
      } else if(!this.sidebarActive) {
        document.body.style.overflow = '';
        window.removeEventListener('click', this.somefunc )
      }
    }
  },

  beforeDestroy() {
        window.removeEventListener('click', function(){});
    },

  methods:{
    ...mapActions({
      closeSIdebar: 'sidebar/close',
    }),
    somefunc(ev) {
      const area = document.getElementById('sidebar')
      const burger = document.getElementById('burger')
      if (!burger.contains(ev.target)) {
        if (!area.contains(ev.target)) {
          this.closeSIdebar();
        }
      }
    }
  }
}
</script>

