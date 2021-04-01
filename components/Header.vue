<template>
  <div class="container">
      <div class="header__content" :class="{ active: mounted }">
        <div class="header__left">
          <NuxtLink class="logo" to="/">
            YOYO Studio
          </NuxtLink>
          
        </div>
        <div class="header__right">
          <nav>
            <ul class="header__nav">
              <li 
                v-for="item in navigationList"
                :key="item.name"
              >
                <NuxtLink
                  class="nav-link"
                  :exact="item.exact"
                  :to="item.link"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <button id="burger" class="burger" @click="openSidebar">
          <MenuBurger/>
          </button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    MenuBurger:() => import('static/menu-burger.svg')
  },
  data() {
    return {
      mounted: false,
    }
  },

  computed: {
    ...mapGetters({
      active: 'sidebar/active',
      navigationList: 'navigation/list',
    }),
  },

  mounted () {
    this.mounted = true;
  },
  methods:{
    ...mapActions({
      openSidebar: 'sidebar/open',
    }),
    someFunc() {
      this.openSidebar();
      this.$emit('menu-burger');
    },
  },
};
</script>
