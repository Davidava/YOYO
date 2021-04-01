<template>
  <aside
    class="sidebar"
    :class="{ 'sidebar_show': sidebarActive }"
  >
    <button
      class="sidebar__close-button"
      @click="buttonClick"  
    >
      <SidebarClose/>
    </button>
    <nav>
      <transition-group
        name="sidebar__nav"
        tag="ul"
      >
      <li
        v-for="(item, index) in computedList"
        :key="item.name"
        :style="{'--index': index}"
        class="nav__item"
      >
        <NuxtLink
          class="nav-link"
          :exact="item.exact"
          :to="item.link"
          @click.native="buttonClick"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
      </transition-group>
    </nav>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    SidebarClose:() => import('static/menu-close.svg')
  },
  data() {
    return {
      list: [
        {name:'Главная', link:'/', exact: true,},
        {name:'Галерея', link:'/galery'},
        {name:'Цены', link:'/prices'},
        {name:'Оплата', link:'/payment'},
        {name:'Календарь', link:'/calendar'},
        {name:'Контакты', link:'/contacts'},
        {name:'Журнал', link:'/journal'},
        {name:'Правила', link:'/rules'},
      ],
    }
  },
  computed:{
    ...mapGetters({
      sidebarActive:'sidebar/active',
      navigationList: 'navigation/list',
    }),
    computedList() {
      if(this.sidebarActive) {
        return this.navigationList;
      }
    },
  },
  
  methods: {
    ...mapActions({
      closeSidebar: 'sidebar/close',
    }),
    buttonClick() {
      this.closeSidebar();
    },
  },
}
</script>