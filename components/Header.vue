<template>
  <div class="container">
    <div
      class="header__content"
      :class="{ 'header__content_active': mounted }"
    >
      <div class="header__left">
        <NuxtLink
          class="logo"
          to="/"
        >
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
        <button
          class="burger"
          @click="$emit('showSidebar')"
        >
          <MenuBurger />
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    MenuBurger: () => import('static/menu-burger.svg'),
  },

  emits: ['showSidebar'],

  data() {
    return {
      mounted: false,
      navigationList: [
        { name: 'Главная', link: '/', exact: true },
        { name: 'Галерея', link: '/galery' },
        { name: 'Цены', link: '/prices' },
        { name: 'Оплата', link: '/payment' },
        { name: 'Календарь', link: '/calendar' },
        { name: 'Контакты', link: '/contacts' },
        { name: 'Журнал', link: '/journal' },
        { name: 'Правила', link: '/rules' },
      ],
    };
  },

  mounted() {
    this.mounted = true;
  },

};
</script>
