<template>
  <aside class="sidebar">
    <button
      class="sidebar__close-button"
      @click="$emit('hideSidebar')"
    >
      <SidebarClose />
    </button>
    <nav>
      <transition-group
        name="sidebar__nav"
        tag="ul"
      >
        <li
          v-for="(item, index) in list"
          :key="item.name"
          :style="{'--index': index}"
          class="nav__item"
          @click="$emit('hideSidebar')"
        >
          <NuxtLink
            class="nav-link"
            :exact="item.exact"
            :to="item.link"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </transition-group>
    </nav>
  </aside>
</template>

<script>

export default {
  components: {
    SidebarClose: () => import('static/menu-close.svg'),
  },

  props: {
    sidebarActive: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['hideSidebar'],

  data() {
    return {
      list: [],
    };
  },

  watch: {
    sidebarActive() {
      if (this.sidebarActive) {
        this.list = [
          { name: 'Главная', link: '/', exact: true },
          { name: 'Галерея', link: '/galery' },
          { name: 'Цены', link: '/prices' },
          { name: 'Оплата', link: '/payment' },
          { name: 'Календарь', link: '/calendar' },
          { name: 'Контакты', link: '/contacts' },
          { name: 'Журнал', link: '/journal' },
          { name: 'Правила', link: '/rules' },
        ];
      } else {
        this.list = [];
      }
    },
  },
};
</script>
